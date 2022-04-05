import { ResponseModel } from "../models/response-model";

export const mockedResponse: ResponseModel = {
  data: {
    deliverySimulations: [
      {
        shoppingCartLine: {
          id: "1",
          productReference: "80175931",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "HOME_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "T",
              customerDeliveryService: "001",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-03-16T19:00:00Z",
            maxDeliveryDate: "2022-03-18T19:00:00Z"
          },
          {
            deliveryService: {
              mode: "RELAY_POINT_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "P",
              customerDeliveryService: "008",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-03-17T19:00:00Z",
            maxDeliveryDate: "2022-03-21T19:00:00Z"
          },
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "EXP",
              deliverySlotManagementId: "ONE_HOUR",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-15T09:00:00Z",
            maxDeliveryDate: "2022-03-15T09:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "2",
          productReference: "80178537",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-29T22:00:00Z",
            maxDeliveryDate: "2022-03-29T22:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "5",
          productReference: "81965604",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "EXP",
              deliverySlotManagementId: "ONE_HOUR",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-15T09:00:00Z",
            maxDeliveryDate: "2022-03-15T09:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "6",
          productReference: "81989276",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "EXP",
              deliverySlotManagementId: "ONE_HOUR",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-15T09:00:00Z",
            maxDeliveryDate: "2022-03-15T09:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "7",
          productReference: "81990644",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "EXP",
              deliverySlotManagementId: "ONE_HOUR",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-15T09:00:00Z",
            maxDeliveryDate: "2022-03-15T09:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "9",
          productReference: "82038044",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-04-03T22:00:00Z",
            maxDeliveryDate: "2022-04-03T22:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "11",
          productReference: "82051994",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "HOME_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "D",
              customerDeliveryService: "001",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "201374",
                buId: "001",
                type: "SUPPLIER"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-04-26T22:00:00Z",
            maxDeliveryDate: "2022-05-01T22:00:00Z"
          },
          {
            deliveryService: {
              mode: "HOME_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "D",
              customerDeliveryService: "001",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "201374",
                buId: "001",
                type: "SUPPLIER"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-04-26T22:00:00Z",
            maxDeliveryDate: "2022-05-01T22:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "12",
          productReference: "82105886",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "EXP",
              deliverySlotManagementId: "ONE_HOUR",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-15T09:00:00Z",
            maxDeliveryDate: "2022-03-15T09:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "13",
          productReference: "82151603",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "HOME_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "N",
              customerDeliveryService: "001",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-03-16T19:00:00Z",
            maxDeliveryDate: "2022-03-18T19:00:00Z"
          },
          {
            deliveryService: {
              mode: "RELAY_POINT_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "P",
              customerDeliveryService: "008",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-03-17T19:00:00Z",
            maxDeliveryDate: "2022-03-21T19:00:00Z"
          },
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-24T23:00:00Z",
            maxDeliveryDate: "2022-03-24T23:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "14",
          productReference: "82152412",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "HOME_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "T",
              customerDeliveryService: "001",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-03-16T19:00:00Z",
            maxDeliveryDate: "2022-03-18T19:00:00Z"
          },
          {
            deliveryService: {
              mode: "RELAY_POINT_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "P",
              customerDeliveryService: "008",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-03-17T19:00:00Z",
            maxDeliveryDate: "2022-03-21T19:00:00Z"
          },
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "EXP",
              deliverySlotManagementId: "ONE_HOUR",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-15T09:00:00Z",
            maxDeliveryDate: "2022-03-15T09:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "19",
          productReference: "82361020",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "HOME_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "T",
              customerDeliveryService: "001",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-03-16T19:00:00Z",
            maxDeliveryDate: "2022-03-18T19:00:00Z"
          },
          {
            deliveryService: {
              mode: "RELAY_POINT_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "P",
              customerDeliveryService: "008",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-03-17T19:00:00Z",
            maxDeliveryDate: "2022-03-21T19:00:00Z"
          },
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "EXP",
              deliverySlotManagementId: "ONE_HOUR",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-15T09:00:00Z",
            maxDeliveryDate: "2022-03-15T09:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "20",
          productReference: "82466492",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "HOME_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "N",
              customerDeliveryService: "001",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-03-16T19:00:00Z",
            maxDeliveryDate: "2022-03-18T19:00:00Z"
          },
          {
            deliveryService: {
              mode: "RELAY_POINT_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "P",
              customerDeliveryService: "008",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-03-17T19:00:00Z",
            maxDeliveryDate: "2022-03-21T19:00:00Z"
          },
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "EXP",
              deliverySlotManagementId: "ONE_HOUR",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-15T09:00:00Z",
            maxDeliveryDate: "2022-03-15T09:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "22",
          productReference: "82538033",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "HOME_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "T",
              customerDeliveryService: "001",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-03-16T19:00:00Z",
            maxDeliveryDate: "2022-03-18T19:00:00Z"
          },
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "EXP",
              deliverySlotManagementId: "ONE_HOUR",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-15T09:00:00Z",
            maxDeliveryDate: "2022-03-15T09:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "23",
          productReference: "82558088",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "HOME_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "N",
              customerDeliveryService: "001",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-04-06T18:00:00Z",
            maxDeliveryDate: "2022-04-08T18:00:00Z"
          },
          {
            deliveryService: {
              mode: "RELAY_POINT_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "P",
              customerDeliveryService: "008",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-04-07T18:00:00Z",
            maxDeliveryDate: "2022-04-11T18:00:00Z"
          }
        ]
      },
      {
        shoppingCartLine: {
          id: "25",
          productReference: "82730579",
          quantity: 1
        },
        availableToPromises: [
          {
            deliveryService: {
              mode: "HOME_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "T",
              customerDeliveryService: "001",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-04-01T18:00:00Z",
            maxDeliveryDate: "2022-04-05T18:00:00Z"
          },
          {
            deliveryService: {
              mode: "RELAY_POINT_DELIVERY",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: "P",
              customerDeliveryService: "008",
              extraDeliveryServices: [],
              shippingPoint: {
                id: "433",
                buId: "001",
                type: "WAREHOUSE"
              },
              deliveryLocation: {
                customerDeliveryLocation: {
                  cityName: undefined,
                  postalCode: "59260",
                  provinceName: undefined,
                  countryCode: "FR",
                  countryName: undefined
                },
                customerPickupLocation: undefined
              }
            },
            minDeliveryDate: "2022-04-04T18:00:00Z",
            maxDeliveryDate: "2022-04-06T18:00:00Z"
          },
          {
            deliveryService: {
              mode: "PICKUP_IN_STORE",
              level: "STD",
              deliverySlotManagementId: "NO_APPOINTMENT",
              transportType: undefined,
              customerDeliveryService: undefined,
              extraDeliveryServices: undefined,
              shippingPoint: {
                id: "176",
                buId: "001",
                type: "STORE"
              },
              deliveryLocation: {
                customerDeliveryLocation: undefined,
                customerPickupLocation: {
                  id: "176",
                  buId: "001",
                  type: "STORE"
                }
              }
            },
            minDeliveryDate: "2022-03-24T23:00:00Z",
            maxDeliveryDate: "2022-03-24T23:00:00Z"
          }
        ]
      }
    ],
    unavailableItems: [
      {
        id: "3",
        productReference: "81272932",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "4",
        productReference: "81274749",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "8",
        productReference: "82010099",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "10",
        productReference: "82047633",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "15",
        productReference: "82249753",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "16",
        productReference: "82283650",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "17",
        productReference: "82315986",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "18",
        productReference: "82360330",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "21",
        productReference: "82503752",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "24",
        productReference: "82730457",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "26",
        productReference: "82770827",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "27",
        productReference: "82850923",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      },
      {
        id: "28",
        productReference: "84421104",
        error: {
          code: "ERR009",
          message: "Didn't succeed to match a solution for the product",
          stockAvailable: undefined
        }
      }
    ],
    endValidityDate: "2022-03-14T18:26:44.909780802Z"
  }
};


// export const mockedResponse: ResponseModel = {
// data: {
//   "deliverySimulations": [
//     {
//       "shoppingCartLine": {
//         "id": "1",
//         "productReference": "80175931",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "HOME_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "T",
//             "customerDeliveryService": "001",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-03-16T19:00:00Z",
//           "maxDeliveryDate": "2022-03-18T19:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "RELAY_POINT_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "P",
//             "customerDeliveryService": "008",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-03-17T19:00:00Z",
//           "maxDeliveryDate": "2022-03-21T19:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "EXP",
//             "deliverySlotManagementId": "ONE_HOUR",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-15T09:00:00Z",
//           "maxDeliveryDate": "2022-03-15T09:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "2",
//         "productReference": "80178537",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-29T22:00:00Z",
//           "maxDeliveryDate": "2022-03-29T22:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "5",
//         "productReference": "81965604",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "EXP",
//             "deliverySlotManagementId": "ONE_HOUR",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-15T09:00:00Z",
//           "maxDeliveryDate": "2022-03-15T09:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "6",
//         "productReference": "81989276",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "EXP",
//             "deliverySlotManagementId": "ONE_HOUR",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-15T09:00:00Z",
//           "maxDeliveryDate": "2022-03-15T09:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "7",
//         "productReference": "81990644",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "EXP",
//             "deliverySlotManagementId": "ONE_HOUR",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-15T09:00:00Z",
//           "maxDeliveryDate": "2022-03-15T09:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "9",
//         "productReference": "82038044",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-04-03T22:00:00Z",
//           "maxDeliveryDate": "2022-04-03T22:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "11",
//         "productReference": "82051994",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "HOME_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "D",
//             "customerDeliveryService": "001",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "201374",
//               "buId": "001",
//               "type": "SUPPLIER"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-04-26T22:00:00Z",
//           "maxDeliveryDate": "2022-05-01T22:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "HOME_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "D",
//             "customerDeliveryService": "001",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "201374",
//               "buId": "001",
//               "type": "SUPPLIER"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-04-26T22:00:00Z",
//           "maxDeliveryDate": "2022-05-01T22:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "12",
//         "productReference": "82105886",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "EXP",
//             "deliverySlotManagementId": "ONE_HOUR",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-15T09:00:00Z",
//           "maxDeliveryDate": "2022-03-15T09:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "13",
//         "productReference": "82151603",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "HOME_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "N",
//             "customerDeliveryService": "001",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-03-16T19:00:00Z",
//           "maxDeliveryDate": "2022-03-18T19:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "RELAY_POINT_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "P",
//             "customerDeliveryService": "008",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-03-17T19:00:00Z",
//           "maxDeliveryDate": "2022-03-21T19:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-24T23:00:00Z",
//           "maxDeliveryDate": "2022-03-24T23:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "14",
//         "productReference": "82152412",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "HOME_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "T",
//             "customerDeliveryService": "001",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-03-16T19:00:00Z",
//           "maxDeliveryDate": "2022-03-18T19:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "RELAY_POINT_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "P",
//             "customerDeliveryService": "008",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-03-17T19:00:00Z",
//           "maxDeliveryDate": "2022-03-21T19:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "EXP",
//             "deliverySlotManagementId": "ONE_HOUR",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-15T09:00:00Z",
//           "maxDeliveryDate": "2022-03-15T09:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "19",
//         "productReference": "82361020",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "HOME_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "T",
//             "customerDeliveryService": "001",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-03-16T19:00:00Z",
//           "maxDeliveryDate": "2022-03-18T19:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "RELAY_POINT_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "P",
//             "customerDeliveryService": "008",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-03-17T19:00:00Z",
//           "maxDeliveryDate": "2022-03-21T19:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "EXP",
//             "deliverySlotManagementId": "ONE_HOUR",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-15T09:00:00Z",
//           "maxDeliveryDate": "2022-03-15T09:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "20",
//         "productReference": "82466492",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "HOME_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "N",
//             "customerDeliveryService": "001",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-03-16T19:00:00Z",
//           "maxDeliveryDate": "2022-03-18T19:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "RELAY_POINT_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "P",
//             "customerDeliveryService": "008",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-03-17T19:00:00Z",
//           "maxDeliveryDate": "2022-03-21T19:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "EXP",
//             "deliverySlotManagementId": "ONE_HOUR",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-15T09:00:00Z",
//           "maxDeliveryDate": "2022-03-15T09:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "22",
//         "productReference": "82538033",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "HOME_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "T",
//             "customerDeliveryService": "001",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-03-16T19:00:00Z",
//           "maxDeliveryDate": "2022-03-18T19:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "EXP",
//             "deliverySlotManagementId": "ONE_HOUR",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-15T09:00:00Z",
//           "maxDeliveryDate": "2022-03-15T09:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "23",
//         "productReference": "82558088",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "HOME_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "N",
//             "customerDeliveryService": "001",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-04-06T18:00:00Z",
//           "maxDeliveryDate": "2022-04-08T18:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "RELAY_POINT_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "P",
//             "customerDeliveryService": "008",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-04-07T18:00:00Z",
//           "maxDeliveryDate": "2022-04-11T18:00:00Z"
//         }
//       ]
//     },
//     {
//       "shoppingCartLine": {
//         "id": "25",
//         "productReference": "82730579",
//         "quantity": 1
//       },
//       "availableToPromises": [
//         {
//           "deliveryService": {
//             "mode": "HOME_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "T",
//             "customerDeliveryService": "001",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-04-01T18:00:00Z",
//           "maxDeliveryDate": "2022-04-05T18:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "RELAY_POINT_DELIVERY",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": "P",
//             "customerDeliveryService": "008",
//             "extraDeliveryServices": [],
//             "shippingPoint": {
//               "id": "433",
//               "buId": "001",
//               "type": "WAREHOUSE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": {
//                 "cityName": undefined,
//                 "postalCode": "59260",
//                 "provinceName": undefined,
//                 "countryCode": "FR",
//                 "countryName": undefined
//               },
//               "customerPickupLocation": undefined
//             }
//           },
//           "minDeliveryDate": "2022-04-04T18:00:00Z",
//           "maxDeliveryDate": "2022-04-06T18:00:00Z"
//         },
//         {
//           "deliveryService": {
//             "mode": "PICKUP_IN_STORE",
//             "level": "STD",
//             "deliverySlotManagementId": "NO_APPOINTMENT",
//             "transportType": undefined,
//             "customerDeliveryService": undefined,
//             "extraDeliveryServices": undefined,
//             "shippingPoint": {
//               "id": "176",
//               "buId": "001",
//               "type": "STORE"
//             },
//             "deliveryLocation": {
//               "customerDeliveryLocation": undefined,
//               "customerPickupLocation": {
//                 "id": "176",
//                 "buId": "001",
//                 "type": "STORE"
//               }
//             }
//           },
//           "minDeliveryDate": "2022-03-24T23:00:00Z",
//           "maxDeliveryDate": "2022-03-24T23:00:00Z"
//         }
//       ]
//     }
//   ],
//   "unavailableItems": [
//     {
//       "id": "3",
//       "productReference": "81272932",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "4",
//       "productReference": "81274749",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "8",
//       "productReference": "82010099",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "10",
//       "productReference": "82047633",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "15",
//       "productReference": "82249753",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "16",
//       "productReference": "82283650",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "17",
//       "productReference": "82315986",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "18",
//       "productReference": "82360330",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "21",
//       "productReference": "82503752",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "24",
//       "productReference": "82730457",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "26",
//       "productReference": "82770827",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "27",
//       "productReference": "82850923",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     },
//     {
//       "id": "28",
//       "productReference": "84421104",
//       "error": {
//         "code": "ERR009",
//         "message": "Didn't succeed to match a solution for the product",
//         "stockAvailable": undefined
//       }
//     }
//   ],
//   "endValidityDate": "2022-03-14T18:26:44.909780802Z"
// }
