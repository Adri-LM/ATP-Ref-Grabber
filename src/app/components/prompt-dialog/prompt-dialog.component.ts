import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss']
})
export class PromptDialogComponent {

  title: string;
  message: string;
  placeholder: string;
  confirmButtonLabel: string;
  cancelButtonLabel: string;

  inputValue: string;

  constructor(public dialogRef: MatDialogRef<PromptDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.title = data.title || "Enter value";
    this.message = data.message || "";
    this.placeholder = data.placeholder || "";
    this.confirmButtonLabel = data.confirmButtonLabel || "Save";
    this.cancelButtonLabel = data.cancelButtonLabel || "Cancel";

    this.inputValue = data.defaultValue || "";
  }

  confirm() {
    this.dialogRef.close(this.inputValue)
  }
}
