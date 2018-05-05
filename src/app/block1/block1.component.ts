import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html'
})
export class Block1Component implements OnInit, OnDestroy {
  private id: number;
  private x: number;
  private y: number;
  private fragment: string;
  private paramsSub: Subscription;
  private fragmentSub: Subscription;
  private dataSub: Subscription;

  constructor(
    @Inject('APP_URL') private appUrl: string,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe(params => {
      this.id = params['id'] || 0;
      this.x = params['x'];
      this.y = params['y'];
    });
    this.fragmentSub = this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.fragmentSub.unsubscribe();
    console.log('Block 1 destroyed.');
  }

  goToBlock2(id?: number): boolean {
    if (id) {
      this.router.navigate(['block2'], { queryParams: { id: id } });
    } else {
      this.router.navigate(['block2']);
    }
    return false;
  }
}
