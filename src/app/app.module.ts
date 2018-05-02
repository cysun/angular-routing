import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Block1Component } from './block1/block1.component';
import { Block2Component } from './block2/block2.component';


@NgModule({
  declarations: [
    AppComponent,
    Block1Component,
    Block2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
