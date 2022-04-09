import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SettingsDialogComponent } from "./components/settings-dialog/settings-dialog.component";
import { ResponseModel } from "./models/response-model";
import { ApiService } from "./services/api.service";
import { ConfigService } from "./services/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ATP Ref Grabber';

  labelMessages = {
    empty: 'Send a request by using the Run button below.\nYou can configure your data in Settings.',
    unresolvable_addr: 'Unable to resolve address, check your internet connection or VPN.'
  };

  data: any;
  infoLabel: string = "";
  useMock: boolean = true;
  useListMode: boolean = false;
  isLoading: boolean = false;

  constructor(public configService: ConfigService,
              private apiService: ApiService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.infoLabel = this.labelMessages.empty;
    this.useListMode = this.configService.getViewMode() === 'list';
  }

  sendRequest() {
    (this.useMock ? this.mockDeliveryModeRequest() : this.sendDeliveryModeRequest())
      .then(this.processResult)
      .then((groups: any) => this.data = groups)
      .catch((error: { message: string; }) => this.handleError(error.message))
      .finally(() => this.isLoading = false);
  }

  viewModeChanged() {
    this.configService.saveViewMode(this.useListMode ? 'list' : 'accordion');
  }

  mockDeliveryModeRequest() {
    this.infoLabel = `⚠ Mocked result`
    return this.apiService.mockDeliveryModeRequest();
  }

  sendDeliveryModeRequest() {
    const config = this.configService.getRequestConfig();
    this.infoLabel = `BU: ${config.bu} (${config.buCode}) | Store: ${config.store.id} (${config.channel})` +
      ` | Address: ${config.address.postalCode} - ${config.address.countryCode}`
    this.isLoading = true;

    return this.apiService.sendDeliveryModeRequest(config);
  }

  processResult(dsResponse: ResponseModel) {
    const groups: any = {};

    dsResponse.deliverySimulations.forEach(s => {
      const ref = s.shoppingCartLine.productReference;
      const modes = s.availableToPromises
        .map(atp => atp.deliveryService)
        .map((service: any) => `${service.mode}_${service.level}_${service.deliverySlotManagementId}`)
        .join(" + ");

      if (groups[modes] == null) {
        groups[modes] = [ref];
      } else {
        groups[modes].push(ref);
      }
    });

    groups["UNSHIPPABLES"] = dsResponse.unavailableItems.map(u => u.productReference);

    return groups;
  }

  handleError(errorMsg: string) {
    this.infoLabel = errorMsg.includes("connect ETIMEDOUT")
      ? this.labelMessages.unresolvable_addr
      : errorMsg;
  }

  openSettingsDialog() {
    this.dialog.open(SettingsDialogComponent);
  }
}
