// Copyright 2023 Broadlume

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from '@src/index';
import { getInitials } from './utils';
import { FaEllipsisH } from 'react-icons/fa';

//Construct the user table cell
//User details, has a AVATAR, NAME and EMAIL
export const UserTableUser = (user: {
  profileImage: string | undefined;
  fname: string;
  lname: string;
  email: string | undefined;
}) => {
  return (
    <div className='~flex ~items-center'>
      <Avatar className='~h-9 ~w-9'>
        <AvatarImage
          src={user.profileImage}
          alt={`${user.fname} ${user.lname}`}
        />
        <AvatarFallback>{getInitials(user.fname, user.lname)}</AvatarFallback>
      </Avatar>
      <div className='~ml-4 ~space-y-1'>
        <p className='~text-sm ~font-medium ~leading-none'>{user.email}</p>
        <p className='~text-sm ~text-muted-foreground'>{`${user.fname} ${user.lname}`}</p>
      </div>
    </div>
  );
};

//Construct the user role cell
//This is a colored badge with the role name - will have to change when we actually implement roles
export const UserTableRole = (role: { id: string | number; name: string }) => {
  const getClassName = (roleID: string | number) => {
    switch (roleID.toString()) {
      case '1': //Admin
        return 'badge-custom-pink';
      case '2': //Non-Admin
        return 'badge-custom-blue';
      default:
        return '';
    }
  };

  return (
    <Badge variant='outline' className={`w-full ${getClassName(role.id)}`}>
      {role.name.toUpperCase()}
    </Badge>
  );
};

// this isn't used anywhere
export const UserTableActions = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size='icon' variant='secondary'>
          <FaEllipsisH />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='~w-auto ~space-y-2'>
          <button
            className='~h-full ~w-full ~text-left hover:~bg-gray-100'
            data-tag='allowRowEvents'
            data-action='edit'
          >
            Edit
          </button>
          <Separator />
          <button
            className='~h-full ~w-full ~text-left hover:~bg-gray-100'
            data-tag='allowRowEvents'
            data-action='deactivate'
          >
            Deactivate
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
