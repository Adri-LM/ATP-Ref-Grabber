import { Injectable } from '@angular/core';
import { RequestConfig } from "../models/request-config";

const configKeys = {
  REQUEST_CONFIG: "requestConfig",
  SERVICE_LEVEL_KEYS: "serviceLevelKeys",
  VIEW_MODE: "viewMode",
};

const defaultViewMode = "list";

const defaultRequestConfig = {
  bu: "LMFR",
  buCode: "001",
  channel: "WEB",
  store: {
    buId: "001",
    id: "176"
  },
  address: {
    postalCode: "47000",
    countryCode: "FR"
  },
  references: ["392091", "530075", "953340", "13177486", "13345999", "17906336", "30079385", "31436034", "31807090", "31819193",
    "31988803", "32063591", "32285393", "32452161", "32587870", "32836195", "33061280", "34115732", "34425384", "34578971", "82249753"]
};

const defaultServiceLevelKeys = [
  { key: "HOME_DELIVERY_STD_NO_APPOINTMENT", label: "LDD" },
  { key: "HOME_DELIVERY_EXP_HALF_DAILY_SLOT", label: "SFS" },
  { key: "HOME_DELIVERY_EXP_NO_APPOINTMENT", label: "LDD Exp." },
  { key: "PICKUP_IN_STORE_EXP_ONE_HOUR", label: "R&C" },
  { key: "PICKUP_IN_STORE_STD_NO_APPOINTMENT", label: "O&C" },
  { key: "RELAY_POINT_DELIVERY_STD_NO_APPOINTMENT", label: "Relay" }
];

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: { viewMode: string, requestConfig: RequestConfig, serviceLevelKeys: any[] };

  private buMap = [
    { bu: "LMFR", buCode: "001" },
    { bu: "LMIT", buCode: "005" }
  ];

  constructor() {
    const requestConfig = localStorage.getItem(configKeys.REQUEST_CONFIG);
    const serviceLevelKeys = localStorage.getItem(configKeys.SERVICE_LEVEL_KEYS);

    this.config = {
      viewMode: localStorage.getItem(configKeys.VIEW_MODE) || defaultViewMode,
      requestConfig: requestConfig ? JSON.parse(requestConfig) : defaultRequestConfig,
      serviceLevelKeys: serviceLevelKeys ? JSON.parse(serviceLevelKeys) : defaultServiceLevelKeys
    };
  }

  public getRequestConfig(): RequestConfig {
    return this.config.requestConfig;
  }

  public saveConfig(requestConfig: RequestConfig, serviceLevelKeys: any[]): void {
    this.config.requestConfig = requestConfig;
    this.config.serviceLevelKeys = serviceLevelKeys;
    localStorage.setItem(configKeys.REQUEST_CONFIG, JSON.stringify(requestConfig));
    localStorage.setItem(configKeys.SERVICE_LEVEL_KEYS, JSON.stringify(serviceLevelKeys));
  }

  public saveViewMode(viewMode: 'list' | 'accordion'): void {
    this.config.viewMode = viewMode;
    localStorage.setItem(configKeys.VIEW_MODE, viewMode);
  }

  public getServiceLevelKeys() {
    return this.config.serviceLevelKeys;
  }

  public getBuMap(): any[] {
    return this.buMap;
  }

  public getViewMode(): string {
    return this.config.viewMode;
  }
}
