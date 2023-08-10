import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
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

type Props = {
  name: string;
  phone: string;
  email: string;
  timestamp: string;
};

const CommentDropdownButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <DotsMenuVertical className='~mr-2' />
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

const LeadCardFooter = ({ name, phone, email, timestamp }: Props) => {
  return (
    <div className='~mt-4 ~flex ~flex-col ~gap-4'>
      <div className='~flex ~items-center'>
        <Avatar className='~mr-4'>
          <AvatarImage src={getRandomAvatar(name)} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Badge
          variant='secondary'
          className='~mr-2 ~px-4 ~text-sm ~font-normal'
        >
          Emailed this lead today, they are interested in coming in store next
          week.
        </Badge>
        <CommentDropdownButton />
        <span className='~text-xs ~font-light ~italic'>
          {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
        </span>
      </div>
      <div className='~flex ~gap-4'>
        <Avatar>
          <AvatarImage src={getRandomAvatar(name)} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Input placeholder='Write a note...' />
      </div>
    </div>
  );
};

export { LeadCardFooter };
