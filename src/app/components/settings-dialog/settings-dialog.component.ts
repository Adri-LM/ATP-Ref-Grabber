import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ConfigService } from "../../services/config.service";
import { clone } from "../../utils/utils";
import { PromptDialogComponent } from "../prompt-dialog/prompt-dialog.component";

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent {

  dataSource: any;
  settingsFormGroup: FormGroup;
  displayedColumns: string[] = ['key', 'label'];
  presets: any = {
    FR: {
      bu: 'LMFR',
      channel: 'WEB',
      countryCode: 'FR',
      postalCode: '47000',
      store: '176'
    },
    IT: {
      bu: 'LMIT',
      channel: 'WEB',
      countryCode: 'IT',
      postalCode: '20060',
      store: '007'
    }
  }

  constructor(public dialogRef: MatDialogRef<SettingsDialogComponent>,
              private configService: ConfigService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    const settings = clone(configService.getRequestConfig());
    const staticLengthValidator = (l: number) => [Validators.required, Validators.minLength(l), Validators.maxLength(l)];

    this.dataSource = clone(this.configService.getServiceLevelKeys());
    this.settingsFormGroup = new FormGroup({
      bu: new FormControl(settings.bu, staticLengthValidator(4)),
      channel: new FormControl(settings.channel, [Validators.required]),
      countryCode: new FormControl(settings.address?.countryCode, staticLengthValidator(2)),
      postalCode: new FormControl(settings.address?.postalCode, [Validators.required, Validators.pattern('[0-9]{5}')]),
      store: new FormControl(settings.store?.id, [Validators.required, Validators.pattern('[0-9]{1,3}')]),
      references: new FormControl(settings.references?.join('\n'), [Validators.required])
    });
  }

  referenceCount(): number {
    return this.settingsFormGroup.value.references?.split("\n")
      .filter(Boolean)
      .length || 0;
  }

  setPreset(presetName: string) {
    const preset = this.presets[presetName];

    this.settingsFormGroup.setValue({
      bu: preset.bu,
      channel: preset.channel,
      countryCode: preset.countryCode,
      postalCode: preset.postalCode,
      store: preset.store,
      references: this.settingsFormGroup.get("references")?.value
    });
  }

  openEditDialog(serviceLevel: { key: string, label: string }) {
    const dialog = this.dialog.open(PromptDialogComponent, {
      data: {
        title: "Edit Service Level Label",
        message: serviceLevel.key,
        placeholder: "Label",
        confirmButtonLabel: "Save",
        cancelButtonLabel: "Cancel",
        defaultValue: serviceLevel.label
      }
    });

    dialog.afterClosed()
      .subscribe(result => {
        if (!result) return;

        this.dataSource
          .find((sl: any) => sl.key === serviceLevel.key)
          .label = result;
      })
  }

  saveSettings(): void {
    if (this.settingsFormGroup.invalid) return;

    const values = this.settingsFormGroup.value;
    const buCode = this.configService.getBuMap()
      .find(entry => entry.bu === values.bu)
      ?.buCode;

    const requestConfig = {
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
    };

    this.configService.saveConfig(requestConfig, this.dataSource);
    this.dialogRef.close();
  }
}
