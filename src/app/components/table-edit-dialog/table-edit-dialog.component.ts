import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-table-edit-dialog',
  templateUrl: './table-edit-dialog.component.html',
  styleUrls: ['./table-edit-dialog.component.scss']
})
export class TableEditDialogComponent {

  key: string;
  label: string;

  constructor(public dialogRef: MatDialogRef<TableEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.key = data.key;
    this.label = data.label;
  }

  save() {
    this.dialogRef.close({
      key: this.key,
      label: this.label
    })
  }
}
