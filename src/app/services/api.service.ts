import { Injectable } from '@angular/core';
import { mockedResponse } from "../config/config";
import { RequestModel } from "../models/request-model";
import { IPCService } from "./ipc.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private ipcService: IPCService) {}

  public mockDeliveryModeRequest: any = () => Promise.resolve(mockedResponse);

  public sendDeliveryModeRequest(config: any): any {
    const request = {
      bu: config.bu,
      buCode: config.buCode,
      body: this.buildATPRequestBody(config)
    };

    return this.ipcService.invoke("sendDeliveryModeRequest", request);
  }

  buildATPRequestBody(config: any): RequestModel {
    const body: RequestModel = {
      channel: config.channel,
      contextStore: config.store,
      shoppingCartLines: [],
      customerDeliveryLocation: config.address
    }

    config.references
      .map((ref: string, index: number) => ({
        id: (index + 1).toString(),
        productReference: ref,
        quantity: 1
      }))
      .forEach((offer: any) => body.shoppingCartLines.push(offer))

    return body;
  }
}
