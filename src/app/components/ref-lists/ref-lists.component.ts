import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ref-lists',
  templateUrl: './ref-lists.component.html',
  styleUrls: ['./ref-lists.component.scss']
})
export class RefListsComponent {

  @Input()
  data: any;

  @Input()
  serviceLevelKeys: any[] = [];

  @Input()
  useListMode: boolean = false;

  splitServiceLevelKeys(concatenatedServiceLevelKeys: string) {
    return concatenatedServiceLevelKeys
      .split(" + ")
      .map(serviceLevelKey => this.prettyServiceLevelKey(serviceLevelKey));
  }

  prettyServiceLevelKey(serviceLevelKey: any) {
    let result = serviceLevelKey;

    this.serviceLevelKeys.forEach((entry: any) => {
      result = result.replaceAll(entry.key, entry.label);
    });

    return result;
  }
}
