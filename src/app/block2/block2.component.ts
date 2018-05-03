import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html'
})
export class Block2Component implements OnInit, OnDestroy {
  private id: number;
  private queryParamsSub: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.queryParamsSub = this.route.queryParams.subscribe(params => {
      this.id = params['id'] || 0;
    });
  }

  ngOnDestroy() {
    this.queryParamsSub.unsubscribe();
    console.log('Block 2 destroyed.');
  }
}
