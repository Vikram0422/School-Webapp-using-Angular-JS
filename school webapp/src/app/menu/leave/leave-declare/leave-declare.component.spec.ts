import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDeclareComponent } from './leave-declare.component';

describe('LeaveDeclareComponent', () => {
  let component: LeaveDeclareComponent;
  let fixture: ComponentFixture<LeaveDeclareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveDeclareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveDeclareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
