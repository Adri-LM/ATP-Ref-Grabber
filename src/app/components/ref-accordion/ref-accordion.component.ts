import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ref-accordion',
  templateUrl: './ref-accordion.component.html',
  styleUrls: ['./ref-accordion.component.scss']
})
export class RefAccordionComponent {

  @Input()
  data: any;

  @Input()
  serviceLevelKeys: any[] = [];

  splitServiceLevelKeys(concatenatedServiceLevelKeys: string) {
    return concatenatedServiceLevelKeys
      .split(" + ")
      .map(serviceLevelKey => this.prettyServiceLevelKey(serviceLevelKey));
  }

  prettyServiceLevelKey(serviceLevelKey: any) {
    return this.serviceLevelKeys
      .find((sl: { key: string, value: string }) => sl.key === serviceLevelKey)
      ?.label || serviceLevelKey;
  }
}
