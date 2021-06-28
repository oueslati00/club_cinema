import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbaruserComponent } from './sidbaruser.component';

describe('SidbaruserComponent', () => {
  let component: SidbaruserComponent;
  let fixture: ComponentFixture<SidbaruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidbaruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidbaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
