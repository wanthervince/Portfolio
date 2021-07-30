import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstOpen!: boolean;
  tactive!: boolean;

  transition() {
    this.tactive = true;

    setTimeout(() => {
      this.firstOpen = false;
    }, 1200);

    setTimeout(() => {
      this.tactive = false;
    }, 3000);
  }

  ngAfterViewInit() {
    if (localStorage.getItem('isTrue') === 'true') {
      this.firstOpen = false;
    } else {
      this.openFirst();
    }
  }

  openFirst() {
    localStorage.setItem('isTrue', 'true');
    this.firstOpen = true;
  }
}
