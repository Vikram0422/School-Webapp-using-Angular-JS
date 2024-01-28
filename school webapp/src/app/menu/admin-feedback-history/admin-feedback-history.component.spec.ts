import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeedbackHistoryComponent } from './admin-feedback-history.component';

describe('AdminFeedbackHistoryComponent', () => {
  let component: AdminFeedbackHistoryComponent;
  let fixture: ComponentFixture<AdminFeedbackHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFeedbackHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeedbackHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
