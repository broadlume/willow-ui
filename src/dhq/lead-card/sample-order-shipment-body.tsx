import CircleFilled from '../assets/circle-filled.svg';
import { Badge } from '@src/index';
import { OrderItem, Shipment } from '../data/types';
import { getFulfillmentStatusViewInfo } from './shipment-helpers';

// format date to the format of "Wednesday, January 1, 2020"
const formatDate = (date: string) => {
  if (!date) return null;
  const parsed_date = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const result = formatter.format(parsed_date);
  return result;
};

interface SampleOrderLineItemProps {
  item: OrderItem;
}
const SampleOrderLineItem = ({ item }: SampleOrderLineItemProps) => {
  const manufacturer_name = item?.manufacturer?.name;
  return (
    <ul
      role='list'
      className='~border-b ~p-2'
      style={{ listStyleImage: `url(${CircleFilled})` }} // best way to get the image imported from the assets folder
    >
      <li style={{ marginLeft: '1em', paddingInlineStart: '10px' }}>
        <div className='~flex ~flex-col ~gap-1'>
          <div className='body-small'>
            {`${item.title} - Sample`}
            {manufacturer_name && (
              <span className='~font-normal'>{` (${manufacturer_name})`}</span>
            )}
          </div>
          <div className='body-small ~flex ~gap-4'>
            <span>
              SKU:&nbsp;
              <span className='~font-normal'>{item.sku}</span>
            </span>
            <span>
              Quantity:&nbsp;
              <span className='~font-normal'>{item.quantity}</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
  );
};

interface FulfillmentInfoProps {
  shipment: Shipment;
}
const FulfillmentInfo = ({ shipment }: FulfillmentInfoProps) => {
  const {
    trackingNumber,
    trackingUrl,
    fulfillmentDate,
    deliveryDate,
    carrier,
    fulfillmentStatus,
  } = shipment;
  const is_delivered =
    fulfillmentStatus === 'success' || fulfillmentStatus === 'delivered';
  const fulfillment_date =
    (fulfillmentDate && formatDate(fulfillmentDate)) ?? 'TBD';
  const delivery_date = (deliveryDate && formatDate(deliveryDate)) ?? 'TBD';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        alignItems: 'start',
        paddingBottom: '4px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        }}
      >
        <span className='body-x-small ~font-bold'>
          Fulfillment Date: &nbsp;
          <span className='~font-normal'>{fulfillment_date}</span>
        </span>
        <span className='body-x-small ~font-bold'>
          {is_delivered ? 'Delivered On' : 'Estimated Delivery'}:&nbsp;
          <span className='~font-normal'>{delivery_date}</span>
        </span>
      </div>
      <span className='body-x-small ~font-bold'>
        Tracking:&nbsp;
        <span className='~font-normal'>
          {/* if tracking number + url, show the tracking number as a link */}
          {trackingNumber && trackingUrl && (
            <a
              className='~text-xs'
              target='_blank'
              rel='noreferrer'
              href={trackingUrl}
            >
              <u>{trackingNumber}</u>
            </a>
          )}
          {/* if tracking number but no url, show the tracking number as regular text */}
          {trackingNumber && !trackingUrl && <>{trackingNumber}</>}
          {/* if no tracking number at all, just show "TBD" */}
          {!trackingNumber && 'TBD'}
          {/* if carrier, show carrier name in parentheses */}
          {carrier && (
            <span className='~text-ash-medium'>&nbsp;({carrier})</span>
          )}
        </span>
      </span>
    </div>
  );
};

interface SampleOrderShipmentHeaderProps {
  orderIndex: number;
  shipment: Shipment;
}
const SampleOrderShipmentHeader = ({
  orderIndex,
  shipment,
}: SampleOrderShipmentHeaderProps) => {
  const { trackingNumber } = shipment;
  const { color, title } = getFulfillmentStatusViewInfo(shipment);

  return (
    <div className='~flex ~items-center ~gap-3 ~px-0 ~pb-2 ~pt-4'>
      <div className='body-large ~font-normal'>
        {!trackingNumber && orderIndex > -1 ? (
          <>Remaining Items</>
        ) : (
          <>
            Sample Order
            {orderIndex > -1 && (
              <>
                &nbsp;
                <i>(Shipment {orderIndex + 1})</i>
              </>
            )}
          </>
        )}
      </div>
      <Badge className={color} size='small'>
        {title}
      </Badge>
    </div>
  );
};

type SampleOrderShipmentBodyProps = {
  shipment: Shipment;
  orderIndex?: number;
};
const SampleOrderShipmentBody = ({
  shipment,
  orderIndex = -1,
}: SampleOrderShipmentBodyProps) => {
  const { orderItems, fulfillmentDate } = shipment;
  const has_fulfillment_date = fulfillmentDate !== null;

  return (
    <>
      <SampleOrderShipmentHeader orderIndex={orderIndex} shipment={shipment} />

      {has_fulfillment_date && <FulfillmentInfo shipment={shipment} />}

      {orderItems.map((item) => (
        <SampleOrderLineItem item={item} key={item.id} />
      ))}
    </>
  );
};

export { SampleOrderShipmentBody };
