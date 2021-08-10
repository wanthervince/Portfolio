import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  active: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  burger() {
    this.active = !this.active;
  }
}
