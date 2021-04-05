import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BusopComponent } from './busop/busop.component';
import { BusAddComponent } from './bus-add/bus-add.component';
import { BusEditComponent } from './bus-edit/bus-edit.component';
import { BusDeleteComponent } from './bus-delete/bus-delete.component';
import { LogoutComponent } from './logout/logout.component';
import {AuthguardServiceService} from './services/Authguard/authguard-service.service';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent,
    HomeComponent,
    BookComponent,
    ViewbookingComponent,
    CancelticketComponent,
    AdminloginComponent,
    BusopComponent,
    BusAddComponent,
    BusEditComponent,
    BusDeleteComponent,
    LogoutComponent,
    AboutComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,FormsModule
  ],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
