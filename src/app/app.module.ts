import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddusersComponent } from './addusers/addusers.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { DeleteusersComponent } from './deleteusers/deleteusers.component';
import { EditusersComponent } from './editusers/editusers.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddusersComponent,
    ShowusersComponent,
    DeleteusersComponent,
    EditusersComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
