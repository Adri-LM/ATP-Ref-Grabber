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
  serviceLevelKeysMap: any;

  @Input()
  useListMode: boolean = false;

  prettyServiceLevelKeys(serviceLevelKeys: any) {
    let result = serviceLevelKeys;

    Object.entries(this.serviceLevelKeysMap)
      .forEach(([k, v]: any) => {
        result = result.replaceAll(k, v);
      });

    return result;
  }
}
