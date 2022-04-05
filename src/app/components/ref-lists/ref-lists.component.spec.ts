import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefListsComponent } from './ref-lists.component';

describe('RefTableComponent', () => {
  let component: RefListsComponent;
  let fixture: ComponentFixture<RefListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefListsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
