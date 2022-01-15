import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperativePatternComponent } from './imperative-pattern.component';

describe('ImperativePatternComponent', () => {
  let component: ImperativePatternComponent;
  let fixture: ComponentFixture<ImperativePatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImperativePatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperativePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
