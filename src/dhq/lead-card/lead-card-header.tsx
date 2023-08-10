import { FaClock, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { format, formatDistanceToNow } from 'date-fns';
import {
  Button,
  Caret,
  Copy,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Globe,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  buttonVariants,
} from '@src/index';
import { useState } from 'react';
import { cn } from '@src/lib/utils';

const ContactInfoBlock = ({
  info,
  icon,
}: {
  info: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className='~flex ~items-center ~space-x-2 ~font-medium ~text-primary'>
      {icon}
      <span className='~cursor-pointer ~text-sm hover:~underline'>{info}</span>
    </div>
  );
};

const NameInfo = ({ name }: { name: string }) => {
  return (
    <div className='~flex ~items-center ~space-x-2'>
      <Globe className='~text-2xl' />
      <span>{name}</span>
    </div>
  );
};

const PhoneInfo = ({ phone }: { phone: string }) => (
  <ContactInfoBlock info={phone} icon={<FaPhoneAlt />} />
);

const EmailInfo = ({ email }: { email: string }) => (
  <ContactInfoBlock info={email} icon={<FaEnvelope />} />
);

const TimestampInfo = ({ timestamp }: { timestamp: string }) => {
  return (
    <div className='~flex ~items-center ~space-x-2'>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <span>
            <FaClock />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <span className='caption-2 ~font-light'>
            {format(new Date(timestamp), 'MMM do, yyyy, h:mm a O')}
          </span>
        </TooltipContent>
      </Tooltip>
      <span className='caption-2 ~font-light ~text-muted-foreground'>
        {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
      </span>
    </div>
  );
};

const AssignButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='caption-1 ~text-primary' caret>
        Assign
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Andy</DropdownMenuItem>
        <DropdownMenuItem>Jeff</DropdownMenuItem>
        <DropdownMenuItem>Cindy</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Manage Team</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const StatusButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className='~text-primary' asChild>
        <button
          className={cn(
            buttonVariants({ variant: 'outline' }),
            `~flex ~gap-1 ~border-input ~font-normal ~normal-case hover:~bg-transparent`
          )}
        >
          Status
          <Caret
            className={cn(
              '~text-base ~transition-transform',
              open && '~rotate-90'
            )}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Contacted</DropdownMenuItem>
        <DropdownMenuItem>Appointment Scheduled</DropdownMenuItem>
        <DropdownMenuItem>Appointment Completed</DropdownMenuItem>
        <DropdownMenuItem>Measurement Scheduled</DropdownMenuItem>
        <DropdownMenuItem>Measurement Completed</DropdownMenuItem>
        <DropdownMenuItem>Quoted</DropdownMenuItem>
        <DropdownMenuItem>Sold</DropdownMenuItem>
        <DropdownMenuItem>Job Complete</DropdownMenuItem>
        <DropdownMenuItem>Disqualified</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const LeadActionDropdownButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger caret />
      <DropdownMenuContent>
        <DropdownMenuItem>View Lead Details</DropdownMenuItem>
        <DropdownMenuItem>Create Contact</DropdownMenuItem>
        <DropdownMenuItem>Archive Lead</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='~flex ~gap-2'>
          <Copy />
          Share Link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const LeadButtons = () => (
  <div className='~ml-auto ~flex ~gap-2'>
    <AssignButton />
    <StatusButton />
    <LeadActionDropdownButton />
  </div>
);

type Props = {
  name: string;
  phone: string;
  email: string;
  timestamp: string;
};
const LeadCardHeader = ({ name, phone, email, timestamp }: Props) => {
  return (
    <div className='~flex ~h-full ~w-full ~flex-wrap ~gap-4'>
      <NameInfo name={name} />
      <PhoneInfo phone={phone} />
      <EmailInfo email={email} />
      <TimestampInfo timestamp={timestamp} />
      <LeadButtons />
    </div>
  );
};

export { LeadCardHeader };
