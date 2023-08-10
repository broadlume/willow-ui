export type OrderItem = {
  __typename: 'OrderItem';
  id: string;
  sku: string;
  title: string;
  quantity: number;
  image: string | null;
  manufacturer: {
    __typename: 'Manufacturer';
    name: string;
  } | null;
  vendor: string | null;
  lineItemId: string | null;
  trackingNumber: string | null;
  trackingUrl: string | null;
  carrier: string | null;
  fulfillmentDate: string | null;
  deliveryDate: string | null;
  fulfillmentStatus: FulfillmentStatusEnum;
};

export const FulfillmentStatusEnums = {
  attempted_delivery: 'attempted_delivery',
  cancelled: 'cancelled',
  confirmed: 'confirmed',
  delivered: 'delivered',
  error: 'error',
  failure: 'failure',
  in_transit: 'in_transit',
  label_printed: 'label_printed',
  label_purchased: 'label_purchased',
  open: 'open',
  out_for_delivery: 'out_for_delivery',
  pending: 'pending',
  ready_for_pickup: 'ready_for_pickup',
  success: 'success',
} as const;
export type FulfillmentStatusEnum =
  (typeof FulfillmentStatusEnums)[keyof typeof FulfillmentStatusEnums];

// basically just a temporary type we deal with because it's how lodash's groupBy works
// convert to Shipment type ASAP
export type ShipmentBaseInfo = {
  trackingNumber: string | null;
  orderItems: OrderItem[];
};
// the ideal type we want to use for shipments
export type Shipment = ShipmentBaseInfo & {
  fulfillmentStatus: FulfillmentStatusEnum;
  trackingUrl: string | null;
  fulfillmentDate: string | null;
  deliveryDate: string | null;
  carrier: string | null;
};
