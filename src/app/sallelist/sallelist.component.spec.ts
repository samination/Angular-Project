import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SallelistComponent } from './sallelist.component';

describe('SallelistComponent', () => {
  let component: SallelistComponent;
  let fixture: ComponentFixture<SallelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SallelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
