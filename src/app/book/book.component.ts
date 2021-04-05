import { Component, OnInit } from '@angular/core';
import {IBooking} from '../models/iBooking';
import {BookingServiceService} from '../services/Booking/booking-service.service';
import {CustomerServiceService} from '../services/Customer/customer-service.service';
import {ActivatedRoute, Router} from '@angular/router'; 
import {BusServiceService} from './../services/Buses/bus-service.service';
import {IBuses} from './../models/iBuses';
import { Route } from '@angular/compiler/src/core';
import { ICustomer } from '../models/iCustomer';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book:IBooking={
    TicketId :null,
    CustomerId:null,
    EmailId :null,
    MobileNumber:null,
    BusName:null,
    Start:null,
    Destination:null,
    DateOfJourney:null,
    Seats:null,
    Bookingstatus:null,
    Travelstatus:null
  };
  Customer:ICustomer;
  CustomerId:Number;
  EmailId:string;
  MobileNumber:string;
  Bus:IBuses;
  BusName:string;
  Start:string;
  Destination:string;
  DateOfJourney:string;
  SeatCount:Number;

  constructor(private BookService:BookingServiceService,private custser:CustomerServiceService,private router:Router,private busservice:BusServiceService,private route:ActivatedRoute) { }

  //this function is used for booking ticket
  bookticket(){
    this.BookService.Bookticket(this.book).subscribe(()=>{
    alert("Your Ticket has been Successfully booked");
    this.router.navigate(['/search/',this.book.CustomerId]);
    });
  }

  savebooking(book:IBooking):void{
    this.bookticket();
  }

  //this function is used for populating details of particular customer who does the booking
  GetCust(CustomerId:Number){
   this.custser.getCust(CustomerId).subscribe((data:ICustomer)=>{
    this.Customer=data;
    this.book.CustomerId=data.CustomerId;
    this.book.EmailId=data.EmailId;
    this.book.MobileNumber=data.MobileNumber;
   });
  }

  //this function is used for populating details of particular bus on which booking is done
  GetBus(BusId:Number){
    this.busservice.GetBusInfo(BusId).subscribe((data:IBuses)=>{
      this.Bus=data;
      this.book.BusName=data.BusName;
      this.book.Start=data.Start;
      this.book.Destination=data.Destination;
      this.book.DateOfJourney=new Date(data.DateOfJourney);
      this.SeatCount=data.Availability;
    });
  }

  
  
  ngOnInit(): void {
    //paramter taken from url route
    const CustomerId =+ this.route.snapshot.paramMap.get('CustomerId');
    this.GetCust(CustomerId);
    const BusId =+ this.route.snapshot.paramMap.get('BusId');
    this.GetBus(BusId);
  }

}
