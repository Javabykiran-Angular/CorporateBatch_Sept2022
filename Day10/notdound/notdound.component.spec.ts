import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotdoundComponent } from './notdound.component';

describe('NotdoundComponent', () => {
  let component: NotdoundComponent;
  let fixture: ComponentFixture<NotdoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotdoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotdoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
