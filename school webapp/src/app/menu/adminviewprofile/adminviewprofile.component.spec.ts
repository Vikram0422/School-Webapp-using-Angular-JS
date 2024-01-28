import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewprofileComponent } from './adminviewprofile.component';

describe('AdminviewprofileComponent', () => {
  let component: AdminviewprofileComponent;
  let fixture: ComponentFixture<AdminviewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
