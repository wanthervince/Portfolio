import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css'],
})
export class ButtomComponent implements OnInit {
  @Input() data!: string;
  constructor() {}

  ngOnInit(): void {}
}
