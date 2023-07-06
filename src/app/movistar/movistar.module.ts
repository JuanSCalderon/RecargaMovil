import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovistarComponent } from './movistar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovistarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MovistarComponent]
})
export class MovistarModule { }
