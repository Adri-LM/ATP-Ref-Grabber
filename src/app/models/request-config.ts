export interface RequestConfig {
  bu: string,
  buCode: string,
  channel: string,
  store: {
    buId: string,
    id: string
  },
  address: {
    postalCode: string,
    countryCode: string
  },
  references: string[]
}
