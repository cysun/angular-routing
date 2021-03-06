import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Block1Component } from './block1/block1.component';
import { Block2Component } from './block2/block2.component';
import { Block3Component } from './block3/block3.component';
import { Block4Component } from './block4/block4.component';
import { Block5Component } from './block5/block5.component';
import { Block6Component } from './block6/block6.component';
import { Block7Component } from './block7/block7.component';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  { path: 'block1', component: Block1Component },
  { path: 'block1/:id', component: Block1Component },
  { path: 'block2', component: Block2Component },
  {
    path: 'block3',
    component: Block3Component,
    children: [
      { path: 'block4', component: Block4Component },
      { path: 'block5', component: Block5Component }
    ]
  },
  { path: 'block6', component: Block6Component, outlet: 'outlet2' },
  {
    path: 'block7',
    component: Block7Component,
    canActivate: [CanActivateGuard]
  },
  { path: 'blockX', redirectTo: 'block1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'APP_URL',
      useValue: 'http://localhost:4200'
    }
  ]
})
export class AppRoutingModule {}
