import { Injectable } from '@angular/core';
import { RequestConfig } from "../models/request-config";

const Store = window.require('electron-store');

const storeKeys = {
  REQUEST_CONFIG: "requestConfig",
  SERVICE_LEVEL_KEYS: "serviceLevelKeys"
}

const storeSchema = {
  requestConfig: {
    type: 'object',
    default: {},
    properties: {
      bu: {
        type: "string",
        default: "LMFR"
      },
      buCode: {
        type: "string",
        default: "001"
      },
      channel: {
        type: "string",
        default: "WEB"
      },
      store: {
        type: "object",
        default: {},
        properties: {
          id: {
            type: 'string',
            default: '176'
          },
          buId: {
            type: 'string',
            default: '001'
          }
        }
      },
      address: {
        type: "object",
        default: {},
        properties: {
          postalCode: {
            type: 'string',
            default: '47000'
          },
          countryCode: {
            type: 'string',
            default: 'FR'
          }
        }
      },
      references: {
        type: 'array',
        default: ["392091", "530075", "953340", "13177486", "13345999"]
      }
    }
  },
  serviceLevelKeys: {
    type: 'array',
    default: [
      { key: "HOME_DELIVERY_STD_NO_APPOINTMENT", label: "LDD" },
      { key: "HOME_DELIVERY_EXP_HALF_DAILY_SLOT", label: "SFS" },
      { key: "HOME_DELIVERY_EXP_NO_APPOINTMENT", label: "LDD Exp." },
      { key: "PICKUP_IN_STORE_EXP_ONE_HOUR", label: "R&C" },
      { key: "PICKUP_IN_STORE_STD_NO_APPOINTMENT", label: "O&C" },
      { key: "RELAY_POINT_DELIVERY_STD_NO_APPOINTMENT", label: "Relay" }
    ]
  }
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private store: any;

  private serviceLevelKeys: any[];
  private config: RequestConfig;

  private buMap = [
    { bu: "LMFR", buCode: "001" },
    { bu: "LMIT", buCode: "005" }
  ];

  constructor() {
    this.store = new Store({ schema: storeSchema });
    this.config = this.store.get(storeKeys.REQUEST_CONFIG);
    this.serviceLevelKeys = this.store.get(storeKeys.SERVICE_LEVEL_KEYS);
  }

  public getRequestConfig(): RequestConfig {
    return this.config;
  }

  public saveRequestConfig(config: RequestConfig): void {
    this.store.set(storeKeys.REQUEST_CONFIG, config);
    this.config = config;
  }

  public getServiceLevelKeys() {
    return this.serviceLevelKeys;
  }

  public getBuMap(): any[] {
    return this.buMap;
  }
}
