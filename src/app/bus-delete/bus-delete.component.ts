import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {IBuses} from './../models/iBuses';
import {BusServiceService} from './../services/Buses/bus-service.service';

@Component({
  selector: 'app-bus-delete',
  templateUrl: './bus-delete.component.html',
  styleUrls: ['./bus-delete.component.css']
})
export class BusDeleteComponent implements OnInit {
 Bus:IBuses;
 BusId:Number;
  constructor(private router:Router,private route:ActivatedRoute,private BusService:BusServiceService) { }
 
  //this function is used to display the particular bus Details for cancellation
  GetBus(BusId:Number)
  {
    this.BusService.GetBusInfo(BusId).subscribe((data:IBuses)=>{
      this.Bus=data;
    })
  }
 
  //this function is used to cancel the particular bus 
  cancelBus(BusId:Number){
    this.BusService.CancelBus(BusId).subscribe(()=>{
      alert("Bus Has Been Deleted Successfully");
      this.router.navigate(['bus']);
    },
    error=>{
      alert("Something went wrong");
    });
  }

  saveCancel():void{
    //paramter taken from url route
    const BusId =+ this.route.snapshot.paramMap.get('BusId');
    this.cancelBus(BusId);
  }

  ngOnInit(): void {
    //paramter taken from url route
    const BusId =+ this.route.snapshot.paramMap.get('BusId');
    this.GetBus(BusId);
  }

}
