import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLeaveRequestComponent } from './review-leave-request.component';

describe('ReviewLeaveRequestComponent', () => {
  let component: ReviewLeaveRequestComponent;
  let fixture: ComponentFixture<ReviewLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewLeaveRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
