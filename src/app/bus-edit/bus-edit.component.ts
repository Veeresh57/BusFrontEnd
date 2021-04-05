import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {BusServiceService} from './../services/Buses/bus-service.service';
import {IBuses} from './../models/iBuses';

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html',
  styleUrls: ['./bus-edit.component.css']
})
export class BusEditComponent implements OnInit {
  Bus:IBuses;
  BusId:Number;

  constructor(private busservice:BusServiceService,private router:Router,private route:ActivatedRoute) { }

  //this function is used to display the particular bus Details for editing
  GetBus(BusId:Number){
    this.busservice.GetBusInfo(BusId).subscribe((data:IBuses)=>{
      this.Bus=data;
      console.log(this.Bus);
    });
  }

  //this function is used to edit the particular bus Details
  EditBus(){
    this.busservice.EditBusInfo(this.Bus).subscribe(()=>{
      alert("Bus Information has been Updated");
      this.router.navigate(['/bus']);
    });
  }

  ngOnInit(): void {
    //paramter taken from url route
    const BusId =+ this.route.snapshot.paramMap.get('BusId');
    console.log(BusId);
    this.GetBus(BusId);
  }

  SaveDetails(Bus:IBuses):void{
    this.Bus=Bus;
    this.EditBus();
  }

}
