import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TigoComponent } from './tigo.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    TigoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TigoComponent]
})
export class TigoModule { }
