import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleConferenceComponent } from './salle-conference.component';

describe('SalleConferenceComponent', () => {
  let component: SalleConferenceComponent;
  let fixture: ComponentFixture<SalleConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalleConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
