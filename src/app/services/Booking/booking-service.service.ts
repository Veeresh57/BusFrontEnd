import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {IBooking} from '../../models/iBooking';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  url = 'http://localhost/MyBusApp/api/Booking/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http:HttpClient) { }
  
  Bookticket(book:IBooking):Observable<IBooking>{
    return this.http.post<IBooking>(this.url+ "Book" ,book,this.httpOptions);
  }

  ViewBookings(CustomerId:Number):Observable<IBooking>{
    return this.http.get<IBooking>(this.url+ "GetBookingDetails/" +CustomerId);
  }

  cancelTicket(CustomerId:Number,TicketId:Number):Observable<IBooking>{
    return this.http.delete<IBooking>(this.url+"Cancel?CustomerId="+CustomerId+"&TicketId="+TicketId);
  }
}
