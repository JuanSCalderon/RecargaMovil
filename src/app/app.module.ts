import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComcelModule } from './comcel/comcel.module';
import { MovistarModule } from './movistar/movistar.module';
import { TigoModule } from './tigo/tigo.module';
import { UffModule } from './uff/uff.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComcelModule,
    MovistarModule,
    TigoModule,
    UffModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
