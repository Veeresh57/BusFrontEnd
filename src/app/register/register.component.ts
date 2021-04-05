import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../models/iCustomer';
import {CustomerServiceService} from '../services/Customer/customer-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Customer:ICustomer={
    CustomerId:null,
    EmailId:null,
    MobileNumber:null,
    DateOfBirth:null,
    Password:null
  };



  constructor(private CustomerService:CustomerServiceService, private router:Router) { }

  //this function is used for registering customer(adding customer details to database)
  postCustomerDetails(){
    this.CustomerService.postCustomer(this.Customer).subscribe( () =>{
      alert("You Have Successfully Created your Account");
      this.router.navigate(['']);
    });
  }

  saveCustomerDetails(Customer:ICustomer): void{
    this.postCustomerDetails();
  }

  ngOnInit(): void {
  }

}
