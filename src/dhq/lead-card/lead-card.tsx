import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
  CardContent,
} from '@src/index';
import { LeadCardHeader } from './lead-card-header';
import { LeadCardFooter } from './lead-card-footer';
import { SampleOrderBody } from './sample-order-body';
import type { Lead } from '../data/leads';

type LeadCardProps = {
  lead: Lead;
};
const LeadCard = ({ lead }: LeadCardProps) => {
  const {
    occurredAt: timestamp,
    source: {
      customerFirstName: firstName,
      customerLastName: lastName,
      customerPhoneNumber: phone,
      customerEmail: email,
    },
  } = lead;
  const headerProps = { firstName, lastName, phone, email, timestamp };
  return (
    <Card>
      <CardContent noHeader>
        <Accordion
          type='single'
          collapsible
          className='border'
          defaultValue='lead'
        >
          <AccordionItem value='lead' className='~border-0'>
            <AccordionTrigger className='~p-0' caretAlign='left' caretOnly>
              <LeadCardHeader {...headerProps} />
            </AccordionTrigger>
            {/* left-align content to the end of the caret */}
            <AccordionContent className='~pl-7'>
              <SampleOrderBody lead={lead} />
              <LeadCardFooter {...headerProps} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export { LeadCard };
