import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChapterListComponent } from './add-chapter-list.component';

describe('AddChapterListComponent', () => {
  let component: AddChapterListComponent;
  let fixture: ComponentFixture<AddChapterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChapterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChapterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
