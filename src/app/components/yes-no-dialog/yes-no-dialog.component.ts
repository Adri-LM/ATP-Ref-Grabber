import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss']
})
export class YesNoDialogComponent {

  message: string;

  constructor(public dialogRef: MatDialogRef<YesNoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.message = data.message || "";
  }

  close(fromYesButton: boolean): void {
    return this.dialogRef.close(fromYesButton);
  }
}
