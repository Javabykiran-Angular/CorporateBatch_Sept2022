import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { DetailComponent } from '../detail/detail.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { UpdateEmpComponent } from '../update-emp/update-emp.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from '../auth.guard';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [ HomeComponent,
    HeaderComponent,
    DetailComponent,
    AddemployeeComponent,
    UpdateEmpComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
    NgxPaginationModule,
    MaterialModule,
  ],
  providers:[AuthGuard]
})
export class DashboardModule { }
