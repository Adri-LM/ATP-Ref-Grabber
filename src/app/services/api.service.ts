import { Injectable } from '@angular/core';
import { mockedResponse } from "../config/config";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public mockDeliveryModeRequest: any = () => Promise.resolve(mockedResponse);
}
