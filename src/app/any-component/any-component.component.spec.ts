import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyComponentComponent } from './any-component.component';

describe('AnyComponentComponent', () => {
  let component: AnyComponentComponent;
  let fixture: ComponentFixture<AnyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
