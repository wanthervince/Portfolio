import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemskills',
  templateUrl: './itemskills.component.html',
  styleUrls: ['./itemskills.component.css'],
})
export class ItemskillsComponent implements OnInit {
  @Input() data!: string;
  constructor() {}

  ngOnInit(): void {}
}
