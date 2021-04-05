import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {IBooking} from './../models/iBooking';
import {BookingServiceService} from './../services/Booking/booking-service.service';
import {CustomerServiceService} from './../services/Customer/customer-service.service';
import {ICustomer} from './../models/iCustomer';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {
  booking:IBooking;
  CustomerId:Number;
  Customer:ICustomer;
  EmailId:string;
  
  constructor(private viewservice:BookingServiceService, private CustomerServ:CustomerServiceService,private router:Router, private route:ActivatedRoute) { }
 
  //this function here displays the booking details of a particular Customer
  viewBookingDetails(CustomerId:number){
    this.viewservice.ViewBookings(CustomerId).subscribe((data:IBooking)=>{
      this.booking=data;
      console.log("Booking: ",this.booking);
    },
    error=>{
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
    //Here the paramter Customer Id to be passed to viewBookingDetails function is taken from the url route
    const CustomerId =+ this.route.snapshot.paramMap.get('CustomerId');
    this.viewBookingDetails(CustomerId);
    console.log(CustomerId);
    this.CustomerId=CustomerId;
    console.log(this.CustomerId);
    this.get(CustomerId);
  }

}
