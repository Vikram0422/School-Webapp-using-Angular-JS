import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportStudentComponent } from './admin-report-student.component';

describe('AdminReportStudentComponent', () => {
  let component: AdminReportStudentComponent;
  let fixture: ComponentFixture<AdminReportStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReportStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
