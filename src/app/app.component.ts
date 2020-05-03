import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Le Gypaete';

  saison = 'hiver';

  ngOnInit(): void {
  }

  changerSaison(event) {
    if (this.saison === 'été') {
      this.saison = 'hiver';
    } else {
      this.saison = 'été';
    }
    // this.diaporamaFond.reset();
  }

}
