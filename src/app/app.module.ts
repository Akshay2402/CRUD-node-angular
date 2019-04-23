import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { RestService } from './rest.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [RestService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
