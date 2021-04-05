import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IBuses} from './../models/iBuses';
import {BusServiceService} from './../services/Buses/bus-service.service';



@Component({
  selector: 'app-busop',
  templateUrl: './busop.component.html',
  styleUrls: ['./busop.component.css']
})
export class BusopComponent implements OnInit {
  Bus:IBuses;

  constructor(private router:Router,private busservice:BusServiceService) { }

  //this function is used to display all the available buses Details
  ViewBus()
  {
    this.busservice.BusDetails().subscribe((data:IBuses)=>{
      this.Bus=data;
      console.log(this.Bus);
    });
  }


  ngOnInit(): void {
    this.ViewBus();
  }

}
