import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Block1Component } from './block1/block1.component';
import { Block2Component } from './block2/block2.component';
import { Block3Component } from './block3/block3.component';

const routes: Routes = [
  { path: 'block1', component: Block1Component }, // handle the case where there's no id param
  { path: 'block1/:id', component: Block1Component },
  { path: 'block2', component: Block2Component },
  { path: 'block3', component: Block3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
