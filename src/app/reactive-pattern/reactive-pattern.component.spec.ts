import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePatternComponent } from './reactive-pattern.component';

describe('ReactivePatternComponent', () => {
  let component: ReactivePatternComponent;
  let fixture: ComponentFixture<ReactivePatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivePatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
