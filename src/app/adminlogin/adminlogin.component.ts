import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IAdmin} from './../models/iAdmin';
import {AdminServiceService} from './../services/Admin/admin-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  Admin:IAdmin={
    AdminId:null,
    Password:null
  };

  constructor(private adminservice:AdminServiceService, private router:Router) { }
  
  //this function validates admin login
  AdminLogin(){
    this.adminservice.AdminLogin(this.Admin).subscribe(()=>{
       alert("Logged In As Admin");
       this.router.navigate(['/bus']);
    },
    error=>{
      alert("Invalid Credentials");
    });
  }

  saveAdmin(Admin:IAdmin):void{
    this.AdminLogin();
  }

  ngOnInit(): void {
  }

}
