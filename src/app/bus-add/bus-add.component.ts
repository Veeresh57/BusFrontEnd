import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IBuses} from './../models/iBuses';
import {BusServiceService} from './../services/Buses/bus-service.service'; 

@Component({
  selector: 'app-bus-add',
  templateUrl: './bus-add.component.html',
  styleUrls: ['./bus-add.component.css']
})
export class BusAddComponent implements OnInit {
  Bus:IBuses={
    BusId :null,
    BusName: null,
    Start: null,
    Destination: null,
    DateOfJourney:null,
    Availability:null 
  };

  constructor(private router:Router,private Busservice:BusServiceService) { }

  ngOnInit(): void {
  }
  
  //this function is used to add a new Bus
  BusAdd(){
    this.Busservice.AddBus(this.Bus).subscribe(()=>{
      alert("Bus has been added Successfully");
      this.router.navigate(['bus']);
    }),
    error=>{
      alert("Something went wrong");
    }
  }

  saveBus(Bus:IBuses):void{
    this.BusAdd();
  }
}
