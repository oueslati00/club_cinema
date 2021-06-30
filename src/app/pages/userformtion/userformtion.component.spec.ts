import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformtionComponent } from './userformtion.component';

describe('UserformtionComponent', () => {
  let component: UserformtionComponent;
  let fixture: ComponentFixture<UserformtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserformtionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserformtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
