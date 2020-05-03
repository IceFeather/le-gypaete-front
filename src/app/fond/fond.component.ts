import { Component, OnInit, Input } from '@angular/core';
import { interval, Subscription, merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { FondService } from './fond.service';

@Component({
  selector: 'app-fond',
  templateUrl: './fond.component.html',
  styleUrls: ['./fond.component.scss'],
  animations: [
    trigger('diapo', [
      // ...
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(500, style({ opacity: 0 }))
      ]),
    ])
  ]
})
export class FondComponent implements OnInit {

  constructor(public fondService: FondService) {
  }

  ngOnInit(): void {
  }

}
