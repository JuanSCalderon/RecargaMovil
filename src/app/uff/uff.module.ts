import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UffComponent } from './uff.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UffComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UffComponent]
})
export class UffModule { }
