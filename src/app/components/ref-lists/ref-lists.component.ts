import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ref-lists',
  templateUrl: './ref-lists.component.html',
  styleUrls: ['./ref-lists.component.scss']
})
export class RefListsComponent {

  @Input()
  data: any;
}
