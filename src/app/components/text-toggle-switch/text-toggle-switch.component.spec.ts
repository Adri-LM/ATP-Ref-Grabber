import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToggleSwitchComponent } from './text-toggle-switch.component';

describe('TextToggleSwitchComponent', () => {
  let component: TextToggleSwitchComponent;
  let fixture: ComponentFixture<TextToggleSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToggleSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
