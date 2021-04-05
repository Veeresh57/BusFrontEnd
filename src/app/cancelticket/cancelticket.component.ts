import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {IBooking} from './../models/iBooking';
import {BookingServiceService} from './../services/Booking/booking-service.service';

@Component({
  selector: 'app-cancelticket',
  templateUrl: './cancelticket.component.html',
  styleUrls: ['./cancelticket.component.css']
})
export class CancelticketComponent implements OnInit {
  booking:IBooking;
  TicketId:Number;
  CustomerId:Number;

  constructor(private cancelservice:BookingServiceService,private router:Router, private route:ActivatedRoute) { }
 
  //this function is used to cancel the particular ticket based on Customer Id and Ticket Id
  CancelBooking(CustomerId:Number,TicketId:Number){
    this.cancelservice.cancelTicket(CustomerId,TicketId).subscribe((data:IBooking)=>{
      this.booking=data;
      console.log("booking:",this.booking);
    })
  }

  ngOnInit(): void {
    //the parameters for the function are taken from the url routes
    const CustomerId =+ this.route.snapshot.paramMap.get('CustomerId');
    this.CustomerId=CustomerId;
    console.log("Cid:",CustomerId);
    const TicketId =+ this.route.snapshot.paramMap.get('TicketId');
    this.TicketId=TicketId;
    console.log(" Tid:",TicketId);
    this.onCancel(CustomerId,TicketId)
  }
  
  onCancel(CustomerId:Number,TicketId:Number):void{
    console.log(CustomerId,TicketId);
    this.CancelBooking(CustomerId,TicketId);
  }

}
