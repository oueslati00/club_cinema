import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailCoursComponent } from './add-detail-cours.component';

describe('AddDetailCoursComponent', () => {
  let component: AddDetailCoursComponent;
  let fixture: ComponentFixture<AddDetailCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
