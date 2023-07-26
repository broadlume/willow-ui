import { BellIcon, EyeNoneIcon, PersonIcon } from '@radix-ui/react-icons';
import { RadioGroupItem } from '@radix-ui/react-radio-group';
import { cn } from '@src/lib/utils';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Label,
  RadioGroup,
} from 'src/index';

export function NotificationsDemo(_) {
  return (
    <Card>
      <CardHeader className='~pb-3'>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose what you want to be notified about.
        </CardDescription>
      </CardHeader>
      <CardContent className='~grid ~gap-1'>
        <RadioGroup defaultValue='available' className='~grid ~grid-rows-3'>
          <Label
            htmlFor='everything'
            className={cn(
              '~-mx-2 ~flex ~cursor-pointer ~items-start ~space-x-4 ~rounded-md ~p-2 ~transition-all hover:~bg-accent hover:~text-accent-foreground',
              '[&:has([data-state=checked])]:~bg-accent [&:has([data-state=checked])]:~text-accent-foreground'
            )}
          >
            <RadioGroupItem
              value='everything'
              id='everything'
              className='~sr-only'
            />
            <BellIcon className='~mt-px ~h-5 ~w-5' />
            <div className='~space-y-1'>
              <p className='~text-sm ~font-medium ~leading-none'>Everything</p>
              <p className='~text-sm ~text-muted-foreground'>
                Email digest, mentions & all activity.
              </p>
            </div>
          </Label>
          <Label
            htmlFor='available'
            className={cn(
              '~-mx-2 ~flex ~cursor-pointer ~items-start ~space-x-4 ~rounded-md ~p-2 ~transition-all hover:~bg-accent hover:~text-accent-foreground',
              '[&:has([data-state=checked])]:~bg-accent [&:has([data-state=checked])]:~text-accent-foreground'
            )}
          >
            <RadioGroupItem
              value='available'
              id='available'
              className='~sr-only'
            />
            <PersonIcon className='~mt-px ~h-5 ~w-5' />
            <div className='~space-y-1'>
              <p className='~text-sm ~font-medium ~leading-none'>Available</p>
              <p className='~text-sm ~text-muted-foreground'>
                Only mentions and comments.
              </p>
            </div>
          </Label>
          <Label
            htmlFor='ignoring'
            className={cn(
              '~-mx-2 ~flex ~cursor-pointer ~items-start ~space-x-4 ~rounded-md ~p-2 ~transition-all hover:~bg-accent hover:~text-accent-foreground',
              '[&:has([data-state=checked])]:~bg-accent [&:has([data-state=checked])]:~text-accent-foreground'
            )}
          >
            <RadioGroupItem
              value='ignoring'
              id='ignoring'
              className='~sr-only'
            />
            <EyeNoneIcon className='~mt-px ~h-5 ~w-5' />
            <div className='~space-y-1'>
              <p className='~text-sm ~font-medium ~leading-none'>Ignoring</p>
              <p className='~text-sm ~text-muted-foreground'>
                Turn off all notifications.
              </p>
            </div>
          </Label>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
