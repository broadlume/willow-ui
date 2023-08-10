import { AccordionHeader, AccordionTrigger } from '@radix-ui/react-accordion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  // AccordionTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  DotsMenuVertical,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Edit,
  Input,
  TrashCan,
} from '@src/index';
import { getRandomAvatar } from '@src/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

type Props = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  timestamp: string;
};

const CommentDropdownButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <DotsMenuVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className='~flex ~gap-2'>
          <Edit />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem className='~flex ~gap-2'>
          <TrashCan />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ActivityLog = ({
  firstName,
  lastName,
  phone,
  email,
  timestamp,
}: Props) => {
  const [value, setValue] = useState('activity-log');
  return (
    <Accordion type='single' collapsible value={value} onValueChange={setValue}>
      <AccordionHeader>
        <Button
          variant='link'
          onClick={() =>
            setValue((prev) => (prev === 'activity-log' ? '' : 'activity-log'))
          }
          className='~mr-auto ~flex ~gap-2'
        >
          <span>{value ? 'Close' : 'Open'} Activity Log</span>
          {!value && <Badge size='xs'>1</Badge>}
        </Button>
      </AccordionHeader>
      <AccordionItem value='activity-log' className='~border-0'>
        <AccordionContent className='~p-0 ~pt-3'>
          <div className='~flex ~flex-col ~gap-4'>
            <div className='~flex ~items-center'>
              <Avatar className='~mr-4 ~self-start'>
                <AvatarImage
                  src={getRandomAvatar(`${firstName} ${lastName}`)}
                  alt='John Doe'
                />
                <AvatarFallback>{`${firstName[0]}${lastName[0]}`}</AvatarFallback>
              </Avatar>
              <div className='~flex ~flex-wrap ~items-center ~gap-y-1'>
                <div className='~flex ~items-center ~gap-1'>
                  <Badge
                    variant='secondary'
                    className='~px-4 ~py-2 ~text-sm ~font-normal'
                  >
                    Emailed this lead today, they are interested in coming in
                    store next week.
                  </Badge>
                  <CommentDropdownButton />
                </div>
                <span className='~ml-2 ~text-xs ~font-light ~italic'>
                  {formatDistanceToNow(new Date(timestamp), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const LeadCardFooter = (props: Props) => {
  const { firstName, lastName, phone, email, timestamp } = props;
  return (
    <div className='~mt-4 ~flex ~flex-col ~gap-4'>
      <ActivityLog {...props} />
      <div className='~flex ~gap-4'>
        <Avatar>
          <AvatarImage
            src={getRandomAvatar(`${firstName} ${lastName}`)}
            alt='John Doe'
          />
          <AvatarFallback>{`${firstName[0]}${lastName[0]}`}</AvatarFallback>
        </Avatar>
        {/* mr-1 so that the outline isn't cut off when focused */}
        <Input placeholder='Write a note...' className='~mr-1' />
      </div>
    </div>
  );
};

export { LeadCardFooter };
