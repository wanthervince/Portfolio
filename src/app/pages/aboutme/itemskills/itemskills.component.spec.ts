import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemskillsComponent } from './itemskills.component';

describe('ItemskillsComponent', () => {
  let component: ItemskillsComponent;
  let fixture: ComponentFixture<ItemskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
