import { Component, OnInit } from '@angular/core';
import {Route,ActivatedRoute, Router} from '@angular/router';
import {IBuses} from './../models/iBuses';
import {BusServiceService} from './../services/Buses/bus-service.service';
import {CustomerServiceService} from './../services/Customer/customer-service.service';
import {ICustomer} from './../models/iCustomer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Customer:ICustomer;
  Bus:IBuses;
  Start:string;
  Destination:string;
  DateOfJourney:Date;
  CustomerId:Number;
  date:string;
  EmailId:string;

  constructor(private busservice:BusServiceService,private CustomerServ:CustomerServiceService, private router:Router,private route:ActivatedRoute) { }

  //this function searches the required bus based on our details of journey
  SearchBus(){
     this.busservice.SearchBus(this.Start,this.Destination,this.DateOfJourney).subscribe((data:IBuses)=>{
       console.log(data);
       this.Bus=data;
       console.log("BusDetail:",this.Bus);
     },
     _error=>{
       alert("Something went wrong");
     });
  }

  get(CustomerId:Number){
    this.CustomerServ.getCust(CustomerId).subscribe((data:ICustomer)=>{
      this.Customer=data;
      this.EmailId=this.Customer.EmailId;
    })
  }

  ngOnInit(): void {
    //the paramter Customer Id to be passed is taken from the url route
    const CustomerId =+ this.route.snapshot.paramMap.get('CustomerId');
    this.CustomerId=CustomerId;
    this.get(CustomerId);
  }

  cur(){
  var today = new Date();
  var d = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  this.date=d;
  }
}
