import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent implements OnInit {
  @Input() url!: string;
  @Input() redSocial!: string;
  @Input() img!: string;
  @Input() class!: string;
  constructor() {}

  ngOnInit(): void {}
}
