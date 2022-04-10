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
  confirmButtonLabel: string;
  cancelButtonLabel: string;

  inputValue: string;

  inputs: {
    value: string,
    placeholder?: string,
    defaultValue?: string
  }[];

  constructor(public dialogRef: MatDialogRef<PromptDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.title = data.title || "Enter value";
    this.message = data.message || "";
    this.confirmButtonLabel = data.confirmButtonLabel || "Save";
    this.cancelButtonLabel = data.cancelButtonLabel || "Cancel";

    this.inputs = (data.inputs || [{ defaultValue: "" }])
      .map((i: any) => ({
        value: i.defaultValue,
        placeholder: i.placeholder
      }));
  }

  confirm() {
    this.dialogRef.close(this.inputs.map(i => i.value));
  }
}
