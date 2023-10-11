import { Lead } from '../data/leads';
import { extractOrderItems } from '../data/helpers';
import { getShipments } from './shipment-helpers';
import { SampleOrderShipmentBody } from './sample-order-shipment-body';

type Props = {
  lead: Lead;
};

const SampleOrderBody = ({ lead }: Props) => {
  const orderItems = extractOrderItems(lead);
  const shipments = getShipments(orderItems);
  return (
    <div>
      {shipments.map((shipment, index) => (
        <SampleOrderShipmentBody
          shipment={shipment}
          orderIndex={index}
          key={index}
        />
      ))}
    </div>
  );
};

export { SampleOrderBody };
