import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from '../services/Customer/customer-service.service';
import {ICustomer} from '../models/iCustomer';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Customer:ICustomer={
    CustomerId:null,
    EmailId:null,
    MobileNumber:null,
    DateOfBirth:null,
    Password:null
  };
  CustomerId:Number;
  Password:string;


  constructor(private CustomerService:CustomerServiceService, private router:Router) { }

  CustomerLogin(Customer:ICustomer){

    //this function validates the Customer Login through the service 
    this.CustomerService.loginCustomer(Customer).subscribe(()=>
    {
      this.CustomerId=this.Customer.CustomerId;
      alert("You Have Successfully Logged In");
      this.router.navigate(['/search/',this.CustomerId]);
      console.log(this.CustomerId);
    },
    error=>{alert("Invalid Credentials");}
    );
  }
  
  //this function gets the details of the particular customer who has logged in
  Get(){
    this.CustomerService.getCustomer(this.Password).subscribe((data:ICustomer)=>{
      this.Customer=data;
      console.log(this.Customer);
      this.CustomerLogin(this.Customer);
    },
    error=>{alert("Invalid Credentials");}
    );
  }
  
  saveLogin(Customer:ICustomer):void{
    this.Get();
  }

  ngOnInit(): void {
    localStorage.getItem('currentuser');
  }

}
