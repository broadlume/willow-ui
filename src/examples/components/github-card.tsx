import { useState } from 'react';
import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from '@radix-ui/react-icons';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Separator,
} from '@src/index';

export function GithubCardDemo(_) {
  const [futureIdeasChecked, setFutureIdeasChecked] = useState(false);
  const [myStackChecked, setMyStackChecked] = useState(false);
  const [inspirationChecked, setInspirationChecked] = useState(true);
  return (
    <Card>
      <CardHeader className='~grid ~grid-cols-[1fr_110px] ~items-start ~gap-4 ~space-y-0'>
        <div className='~space-y-1'>
          <CardTitle>willow-ui</CardTitle>
          <CardDescription>
            Beautifully designed components built with shadcn/ui, Radix UI &
            Tailwind CSS.
          </CardDescription>
        </div>
        <div className='~flex ~items-center ~rounded-md ~bg-secondary ~text-secondary-foreground'>
          <Button
            variant='secondary'
            className='~flex-1 ~px-3 ~font-medium ~normal-case ~shadow-none'
          >
            <StarIcon className='~mr-2 ~h-4 ~w-4' />
            Star
          </Button>
          <Separator orientation='vertical' className='~h-[20px] ~bg-input' />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='secondary' className='~px-3 ~shadow-none'>
                <ChevronDownIcon className='~h-4 ~w-4 ~text-secondary-foreground' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              alignOffset={-5}
              className='~w-[200px]'
              forceMount
            >
              <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={futureIdeasChecked}
                onCheckedChange={setFutureIdeasChecked}
              >
                Future Ideas
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={myStackChecked}
                onCheckedChange={setMyStackChecked}
              >
                My Stack
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={inspirationChecked}
                onCheckedChange={setInspirationChecked}
              >
                Inspiration
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusIcon className='~mr-2 ~h-4 ~w-4' /> Create List
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className='~flex ~space-x-4 ~text-sm ~text-muted-foreground'>
          <div className='~flex ~items-center'>
            <CircleIcon className='~mr-1 ~h-3 ~w-3 ~fill-sky-400 ~text-sky-400' />
            TypeScript
          </div>
          <div className='~flex ~items-center'>
            <StarIcon className='~mr-1 ~h-3 ~w-3' />
            20k
          </div>
          <div>Updated July 2023</div>
        </div>
      </CardContent>
    </Card>
  );
}
