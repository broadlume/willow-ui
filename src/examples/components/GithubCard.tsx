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
  return (
    <Card>
      <CardHeader className='~grid ~grid-cols-[1fr_110px] ~items-start ~gap-4 ~space-y-0'>
        <div className='~space-y-1'>
          <CardTitle>willow-ui</CardTitle>
          <CardDescription>
            Beautifully designed components built with shadcn/ui, Radix UI and
            Tailwind CSS.
          </CardDescription>
        </div>
        <div className='~flex ~items-center ~space-x-1 ~rounded-md ~bg-secondary ~text-secondary-foreground'>
          <Button variant='secondary' className='~flex-1 ~px-3 ~shadow-none'>
            <StarIcon className='~mr-2 ~h-4 ~w-4' />
            Star
          </Button>
          <Separator orientation='vertical' className='~h-[20px] ~bg-input' />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='secondary' className='~px-2 ~shadow-none'>
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
              <DropdownMenuCheckboxItem checked>
                Future Ideas
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
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
