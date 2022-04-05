export interface ResponseModel {
  data: {
    deliverySimulations: {
      availableToPromises: {
        deliveryService: {
          mode: string,
          level: string,
          deliverySlotManagementId: string,
          transportType?: string,
          customerDeliveryService?: string,
          extraDeliveryServices?: string[],
          shippingPoint: {
            id: string,
            buId: string,
            type: string
          },
          deliveryLocation: {
            customerDeliveryLocation?: {
              cityName?: string,
              postalCode: string,
              provinceName?: string,
              countryCode: string,
              countryName?: string
            },
            customerPickupLocation?: {
              id: string,
              buId: string,
              type: string
            }
          }
        },
        minDeliveryDate: string,
        maxDeliveryDate: string
      }[],
      shoppingCartLine: {
        id: string,
        productReference: string,
        quantity: number
      }
    }[],
    unavailableItems: {
      id: string,
      productReference: string,
      quantity?: number
      error: {
        code: string,
        message: string,
        stockAvailable?: number
      }
    }[],
    endValidityDate: string
  }
}
