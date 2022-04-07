export interface ResponseModel {
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
            postalCode: string,
            countryCode: string
          },
          customerPickupLocation?: {
            id: string,
            buId: string,
            type: string
          }
        }
      }
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
  }[]
}
