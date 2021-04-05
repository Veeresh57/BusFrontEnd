import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookComponent } from './book/book.component';
import { BusAddComponent } from './bus-add/bus-add.component';
import { BusDeleteComponent } from './bus-delete/bus-delete.component';
import { BusEditComponent } from './bus-edit/bus-edit.component';
import { BusopComponent } from './busop/busop.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {RegisterComponent} from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import {AuthenticationGuard} from './authentication.guard';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'search/:CustomerId',component:SearchComponent,canActivate:[AuthenticationGuard]},
  {path:'book/:CustomerId/:BusId',component:BookComponent,canActivate:[AuthenticationGuard]},
  {path:'viewBookings/:CustomerId',component:ViewbookingComponent,canActivate:[AuthenticationGuard]},
  {path:'cancel/:CustomerId/:TicketId',component:CancelticketComponent,canActivate:[AuthenticationGuard]},
  {path:'admin',component:AdminloginComponent},
  {path:'bus',component:BusopComponent},
  {path:'busadd',component:BusAddComponent},
  {path:'busedit/:BusId',component:BusEditComponent},
  {path:'busdelete/:BusId',component:BusDeleteComponent},
  {path:'logout',component:LogoutComponent},
  {path:'about',component:AboutComponent},
  {path:'help',component:HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
