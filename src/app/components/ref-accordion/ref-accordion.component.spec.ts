import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefAccordionComponent } from './ref-accordion.component';

describe('RefAccordionComponent', () => {
  let component: RefAccordionComponent;
  let fixture: ComponentFixture<RefAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
