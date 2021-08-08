import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMyformationComponent } from './display-myformation.component';

describe('DisplayMyformationComponent', () => {
  let component: DisplayMyformationComponent;
  let fixture: ComponentFixture<DisplayMyformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMyformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMyformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
