import {
  OrderItem,
  Shipment,
  ShipmentBaseInfo,
  FulfillmentStatusEnum,
  FulfillmentStatusEnums,
} from '../data/types';
import { groupBy } from 'lodash';

const {
  pending,
  open,
  success,
  cancelled,
  error,
  failure,
  label_printed,
  label_purchased,
  attempted_delivery,
  ready_for_pickup,
  confirmed,
  in_transit,
  out_for_delivery,
  delivered,
} = FulfillmentStatusEnums;

// map fulfillment status to a title, color (i.e. pill type), & index for sorting
const fulfillment_status_map: Record<
  FulfillmentStatusEnum,
  { title: string; color: string; index: number }
> = {
  [pending]: {
    title: 'Awaiting Fulfillment',
    color: '~text-heart ~bg-heart/20',
    index: 2,
  },
  [open]: {
    title: 'In Transit',
    color: '~text-ribbon ~bg-ribbon/20',
    index: 1,
  },
  [success]: {
    title: 'Delivered',
    color: '~text-success ~bg-success/20',
    index: 0,
  },
  [error]: { title: 'Error', color: '~text-danger ~bg-danger/20', index: 3 },
  [failure]: { title: 'Failed', color: '~text-danger ~bg-danger/20', index: 3 },
  [cancelled]: {
    title: 'Canceled',
    color: '~text-danger ~bg-danger/20',
    index: 3,
  },
  [label_printed]: {
    title: 'In Transit',
    color: '~text-ribbon ~bg-ribbon/20',
    index: 1,
  },
  [label_purchased]: {
    title: 'In Transit',
    color: '~text-ribbon ~bg-ribbon/20',
    index: 1,
  },
  [attempted_delivery]: {
    title: 'In Transit',
    color: '~text-ribbon ~bg-ribbon/20',
    index: 1,
  },
  [ready_for_pickup]: {
    title: 'In Transit',
    color: '~text-ribbon ~bg-ribbon/20',
    index: 1,
  },
  [confirmed]: {
    title: 'In Transit',
    color: '~text-ribbon ~bg-ribbon/20',
    index: 1,
  },
  [in_transit]: {
    title: 'In Transit',
    color: '~text-ribbon ~bg-ribbon/20',
    index: 1,
  },
  [out_for_delivery]: {
    title: 'In Transit',
    color: '~text-ribbon ~bg-ribbon/20',
    index: 1,
  },
  [delivered]: {
    title: 'Delivered',
    color: '~text-success ~bg-success/20',
    index: 0,
  },
};

export const getFulfillmentStatusViewInfo = (shipment: Shipment) =>
  fulfillment_status_map[shipment.fulfillmentStatus];
const getFulfillmentStatusIndex = (shipment: Shipment) =>
  fulfillment_status_map[shipment.fulfillmentStatus].index;

const convertDictionaryToArray = (dictionary: Record<string, OrderItem[]>) => {
  // basic conversion from Dictionary to array
  const array = Object.entries(dictionary); // be mindful of this, it converts null to "null"
  // additionally convert from array of [trackingNumber, orderItems] to array of {trackingNumber, orderItems}
  // this has the perk of quickly allowing us to dispose of the "null" string and use null instead
  const converted: ShipmentBaseInfo[] = array.map(
    ([trackingNumber, orderItems]) => ({
      trackingNumber: trackingNumber === 'null' ? null : trackingNumber,
      orderItems,
    })
  );
  return converted;
};

const processShipment = (shipment: ShipmentBaseInfo) => {
  // process ShipmentBaseInfo object into full Shipment object using tracking info from the first item in the shipment
  const { trackingNumber, orderItems } = shipment;
  const first_item = orderItems[0];
  const {
    fulfillmentStatus,
    trackingUrl,
    fulfillmentDate,
    deliveryDate,
    carrier,
  } = first_item;
  return {
    trackingNumber,
    orderItems,
    fulfillmentStatus,
    trackingUrl,
    fulfillmentDate,
    deliveryDate,
    carrier,
  };
};

const groupAndProcessShipmentItems = (items: OrderItem[] | undefined) => {
  if (!items) return [];
  // group items by shipment
  const shipments = groupBy(items, (item) => item.trackingNumber);
  // convert from array of [trackingNumber, orderItems] to array of {trackingNumber, orderItems}
  const converted = convertDictionaryToArray(shipments);
  // process shipments into full Shipment objects (technically just for convenience, but boy is it convenient)
  return converted.map(processShipment);
};

const shipmentSortingFunction = (
  shipment_a: Shipment,
  shipment_b: Shipment
) => {
  // account for null delivery dates
  if (!shipment_a.deliveryDate) return 1;
  if (!shipment_b.deliveryDate) return -1;
  // sort shipments by fulfillment status, then by delivery date
  const [status_index_a, status_index_b] = [
    getFulfillmentStatusIndex(shipment_a),
    getFulfillmentStatusIndex(shipment_b),
  ];
  if (status_index_a !== status_index_b) return status_index_a - status_index_b;
  const delivery_date_a = new Date(shipment_a.deliveryDate);
  const delivery_date_b = new Date(shipment_b.deliveryDate);
  return delivery_date_a.getTime() - delivery_date_b.getTime();
};

export const getShipments = (items: OrderItem[] | undefined) => {
  // group items by shipment
  const shipments = groupAndProcessShipmentItems(items);
  // sort shipments
  return shipments.sort(shipmentSortingFunction);
};
