export interface RequestModel {
  channel: string,
  contextStore: {
    id: string,
    buId: string
  },
  shoppingCartLines: {
    id: string,
    productReference: string,
    quantity: number
  }[],
  customerDeliveryLocation: {
    postalCode: string,
    countryCode: string
  }
}
