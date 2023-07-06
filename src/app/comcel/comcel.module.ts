import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComcelComponent } from './comcel.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComcelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ComcelComponent]
})
export class ComcelModule { }
