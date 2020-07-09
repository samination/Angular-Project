import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvChildComponent } from './conv-child.component';

describe('ConvChildComponent', () => {
  let component: ConvChildComponent;
  let fixture: ComponentFixture<ConvChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
