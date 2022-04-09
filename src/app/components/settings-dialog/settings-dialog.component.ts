import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ConfigService } from "../../services/config.service";

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent {

  dataSource: any;
  settingsFormGroup: FormGroup;
  displayedColumns: string[] = ['key', 'label'];

  constructor(public dialogRef: MatDialogRef<SettingsDialogComponent>,
              private configService: ConfigService,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    const settings = configService.getRequestConfig();
    const serviceLevelKeys = configService.getServiceLevelKeys();
    const staticLengthValidator = (l: number) => [Validators.required, Validators.minLength(l), Validators.maxLength(l)];

    this.dataSource = serviceLevelKeys;
    this.settingsFormGroup = new FormGroup({
      bu: new FormControl(settings.bu, staticLengthValidator(4)),
      channel: new FormControl(settings.channel, [Validators.required]),
      countryCode: new FormControl(settings.address?.countryCode, staticLengthValidator(2)),
      postalCode: new FormControl(settings.address?.postalCode, [Validators.required, Validators.pattern('[0-9]{5}')]),
      store: new FormControl(settings.store?.id, [Validators.required, Validators.pattern('[0-9]{1,3}')]),
      references: new FormControl(settings.references?.join('\n'), [Validators.required]),
      serviceLevelKeys: new FormControl(serviceLevelKeys)
    });
  }

  referenceCount(): number {
    return this.settingsFormGroup.value.references?.split("\n")
      .filter(Boolean)
      .length || 0;
  }

  saveSettings(): void {
    if (this.settingsFormGroup.invalid) return;

    const values = this.settingsFormGroup.value;

    const buCode = this.configService.getBuMap()
      .find(entry => entry.bu === values.bu)
      ?.buCode;

    this.configService.saveRequestConfig({
      bu: values.bu,
      buCode,
      channel: values.channel,
      store: {
        buId: buCode,
        id: values.store
      },
      address: {
        postalCode: values.postalCode,
        countryCode: values.countryCode
      },
      references: values.references.split("\n")
    });

    this.dialogRef.close();
  }
}
