import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private serviceLevelKeys: any[] = [
    {key: "HOME_DELIVERY_STD_NO_APPOINTMENT", label: "LDD"},
    {key: "HOME_DELIVERY_EXP_HALF_DAILY_SLOT", label: "SFS"},
    {key: "HOME_DELIVERY_EXP_NO_APPOINTMENT", label: "LDD Exp."},
    {key: "PICKUP_IN_STORE_EXP_ONE_HOUR", label: "R&C"},
    {key: "PICKUP_IN_STORE_STD_NO_APPOINTMENT", label: "O&C"},
    {key: "RELAY_POINT_DELIVERY_STD_NO_APPOINTMENT", label: "Relay"}
  ];

  private config: any = {
    bu: "LMFR",
    buCode: "001",
    channel: "WEB",
    store: {
      buId: "001",
      id: "176"
    },
    address: {
      postalCode: "76610",
      countryCode: "FR"
    },
    references: ["392091", "530075", "953340", "13177486", "13345999", "17906336", "30079385", "31436034", "31807090", "31819193",
      "31988803", "32063591", "32285393", "32452161", "32587870", "32836195", "33061280", "34115732", "34425384", "34578971", "82249753"]
  };

  public getRequestConfig() {
    return this.config;
  }

  public getServiceLevelKeys() {
    return this.serviceLevelKeys;
  }
}
