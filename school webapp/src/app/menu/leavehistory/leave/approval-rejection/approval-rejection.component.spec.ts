import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRejectionComponent } from './approval-rejection.component';

describe('ApprovalRejectionComponent', () => {
  let component: ApprovalRejectionComponent;
  let fixture: ComponentFixture<ApprovalRejectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalRejectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalRejectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
