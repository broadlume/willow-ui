import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
  CardContent,
  CardHeader,
} from '@src/index';
import { LeadCardHeader } from './lead-card-header';

const lead = {
  name: 'John Doe',
  phone: '757-414-3234',
  email: 'john.doe@email.com',
  timestamp: '2021-07-01T12:00:00.000Z',
};

const LeadCard = (_) => {
  return (
    <Card>
      <CardContent noHeader>
        <Accordion type='single' collapsible className='border'>
          <AccordionItem value='test' className='~border-0'>
            <AccordionTrigger className='~p-0' caretAlign='left' caretOnly>
              <LeadCardHeader {...lead} />
            </AccordionTrigger>
            <AccordionContent className='~pl-7'>
              I don't feel like coding this part! 😅
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export { LeadCard };
