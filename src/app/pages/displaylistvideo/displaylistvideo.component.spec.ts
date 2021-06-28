import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaylistvideoComponent } from './displaylistvideo.component';

describe('DisplaylistvideoComponent', () => {
  let component: DisplaylistvideoComponent;
  let fixture: ComponentFixture<DisplaylistvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaylistvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaylistvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
