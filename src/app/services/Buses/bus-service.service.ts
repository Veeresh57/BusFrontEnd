import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {IBuses} from '../../models/iBuses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {
  url = 'http://localhost/MyBusApp/api/Bus/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };


  constructor(private http:HttpClient) { }

  BusDetails():Observable<IBuses>{
    return this.http.get<IBuses>(this.url +"GetBuses");
  }
  GetBusInfo(BusID:Number):Observable<IBuses>{
    return this.http.get<IBuses>(this.url+ "GetBuses/" +BusID);
  }
  EditBusInfo(Bus:IBuses):Observable<IBuses>{
    return this.http.put<IBuses>(this.url + "EditBus/" +Bus.BusId,Bus,this.httpOptions);
  }
  AddBus(Bus:IBuses):Observable<IBuses>{
    return this.http.post<IBuses>(this.url+ "AddBus",Bus,this.httpOptions);
  }
  CancelBus(BusId:Number):Observable<IBuses>{
    return this.http.delete<IBuses>(this.url+ "DeleteBus/" +BusId);
  }
  SearchBus(Start:string,Destination:string,DateOfJourney:Date):Observable<IBuses>{
    return this.http.get<IBuses>(this.url + "Search?Start="+Start+"&Destination="+Destination+"&DateOfJourney="+DateOfJourney);
  }
}
