import { Component, OnInit } from '@angular/core';
import { ResponseModel } from "./models/response-model";
import { ApiService } from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ATP Ref Grabber';

  labelMessages = {
    empty: 'Send a request by using the Run button below.\nYou can configure your data in Settings.',
    request_send: 'BU: %s (%s) | Store: %s (%s) | Address: %s - %s',
    unresolvable_addr: 'Unable to resolve address, check your internet connection or VPN.'
  };

  data: any;
  infoLabel: string = "";

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.infoLabel = this.labelMessages.empty;
  }

  sendRequest() {
    this.apiService.mockDeliveryModeRequest()
      .then(this.processResult)
      .then((groups: any) => this.data = groups)
      .catch((error: { message: string; }) => this.handleError(error.message));
  }

  processResult(response: ResponseModel) {
    const dsResponse = response.data;
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
    this.infoLabel = errorMsg.includes("getaddrinfo ENOTFOUND")
      ? this.labelMessages.unresolvable_addr
      : errorMsg;
  }
}
