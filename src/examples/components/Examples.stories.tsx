import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '@src/lib/utils';

import { CreateAccountDemo } from './CreateAccount';
import { PaymentMethodDemo } from './PaymentMethod';
import { CookieSettingsDemo } from './CookieSettings';
import { ReportAnIssueDemo } from './ReportAnIssue';
import { ShareDocumentDemo } from './ShareDocument';
import { NotificationsDemo } from './Notifications';
import { GithubCardDemo } from './GithubCard';
import { DatePickerCardDemo } from './DatePickerCard';

const meta: Meta = {
  title: 'Examples/Examples',
  tags: ['autodocs'],
};

export default meta;

export const Page: StoryObj = {
  render: CardsPageDemo,
};

export const CreateAccount: StoryObj = {
  render: CreateAccountDemo,
};

export const PaymentMethod: StoryObj = {
  render: PaymentMethodDemo,
};

export const CookieSettings: StoryObj = {
  render: CookieSettingsDemo,
};

export const ReportAnIssue: StoryObj = {
  render: ReportAnIssueDemo,
};

export const ShareDocument: StoryObj = {
  render: ShareDocumentDemo,
};

export const Notifications: StoryObj = {
  render: NotificationsDemo,
};
export const GithubCard: StoryObj = {
  render: GithubCardDemo,
};
export const DatePickerCard: StoryObj = {
  render: DatePickerCardDemo,
};

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        '~flex ~min-w-0 ~items-center ~justify-center [&>div]:~w-full',
        className
      )}
      {...props}
    />
  );
}

function CardsPageDemo(_) {
  return (
    <>
      <div className='~items-start ~justify-center ~gap-6 ~rounded-lg ~p-8 md:~grid lg:~grid-cols-2 xl:~grid-cols-3'>
        <div className='~col-span-2 ~grid ~items-start ~gap-6 lg:~col-span-1'>
          <DemoContainer>
            <CreateAccountDemo />
          </DemoContainer>
          <DemoContainer>
            <PaymentMethodDemo />
          </DemoContainer>
        </div>
        <div className='~col-span-2 ~grid ~items-start ~gap-6 lg:~col-span-1'>
          <DemoContainer>
            <ShareDocumentDemo />
          </DemoContainer>
          <DemoContainer>
            <DatePickerCardDemo />
          </DemoContainer>
          <DemoContainer>
            <NotificationsDemo />
          </DemoContainer>
        </div>
        <div className='~col-span-2 ~grid ~items-start ~gap-6 lg:~col-span-1 lg:~grid-cols-2 xl:~grid-cols-1'>
          <DemoContainer>
            <ReportAnIssueDemo />
          </DemoContainer>
          <DemoContainer>
            <GithubCardDemo />
          </DemoContainer>
          <DemoContainer>
            <CookieSettingsDemo />
          </DemoContainer>
        </div>
      </div>
    </>
  );
}
