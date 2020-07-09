import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvParentComponent } from './conv-parent.component';

describe('ConvParentComponent', () => {
  let component: ConvParentComponent;
  let fixture: ComponentFixture<ConvParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
