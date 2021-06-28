import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayformationComponent } from './displayformation.component';

describe('DisplayformationComponent', () => {
  let component: DisplayformationComponent;
  let fixture: ComponentFixture<DisplayformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
