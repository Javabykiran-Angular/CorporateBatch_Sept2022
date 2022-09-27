import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFollowerComponent } from './my-follower.component';

describe('MyFollowerComponent', () => {
  let component: MyFollowerComponent;
  let fixture: ComponentFixture<MyFollowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFollowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
