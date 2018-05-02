import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Block1Component } from './block1/block1.component';
import { Block2Component } from './block2/block2.component';

const routes: Routes = [
  { path: 'block1', component: Block1Component },
  { path: 'block2', component: Block2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
