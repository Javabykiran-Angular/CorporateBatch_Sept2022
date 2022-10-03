import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
// import { MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    MatConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    // MatIconModule
    
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    // MatIconModule

  ]
})
export class MaterialModule { }
