import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Block1Component } from './block1/block1.component';
import { Block2Component } from './block2/block2.component';
import { Block3Component } from './block3/block3.component';
import { Block4Component } from './block4/block4.component';
import { Block5Component } from './block5/block5.component';
import { Block6Component } from './block6/block6.component';
import { Block7Component } from './block7/block7.component';
import { CanActivateGuard } from './can-activate.guard';


@NgModule({
  declarations: [
    AppComponent,
    Block1Component,
    Block2Component,
    Block3Component,
    Block4Component,
    Block5Component,
    Block6Component,
    Block7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
