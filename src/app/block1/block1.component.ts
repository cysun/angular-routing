import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html'
})
export class Block1Component implements OnInit, OnDestroy {
  private id: number;
  private paramsSub: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe(params => {
      this.id = params['id'] || 0;
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    console.log('Block 1 destroyed.');
  }
}
