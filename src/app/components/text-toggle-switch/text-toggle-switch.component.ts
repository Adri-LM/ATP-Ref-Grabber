import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-toggle-switch',
  templateUrl: './text-toggle-switch.component.html',
  styleUrls: ['./text-toggle-switch.component.scss']
})
export class TextToggleSwitchComponent {

  @Input()
  onLabel: string;

  @Input()
  offLabel: string;

  @Input()
  bicolor: boolean = false;

  @Input()
  set value(val: boolean) {
    this._value = val;
    this.valueChange.emit(this._value);
  }

  get value(): boolean {
    return this._value;
  }

  private _value: boolean;

  @Output()
  valueChange = new EventEmitter<boolean>();
}
