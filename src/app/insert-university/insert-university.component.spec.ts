import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUniversityComponent } from './insert-university.component';

describe('InsertUniversityComponent', () => {
  let component: InsertUniversityComponent;
  let fixture: ComponentFixture<InsertUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
