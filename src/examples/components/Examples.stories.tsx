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
        '~mb-6 ~flex ~min-w-0 ~break-inside-avoid ~items-center ~justify-center [&>div]:~w-full',
        className
      )}
      {...props}
    />
  );
}

const demos = [
  CreateAccountDemo,
  PaymentMethodDemo,
  ShareDocumentDemo,
  DatePickerCardDemo,
  NotificationsDemo,
  ReportAnIssueDemo,
  GithubCardDemo,
  CookieSettingsDemo,
];

function CardsPageDemo(_) {
  return (
    <div className='~@container'>
      <div className='~gap-6 ~rounded-lg ~p-8 @3xl:~columns-2 @7xl:~columns-3'>
        {demos.map((Demo, i) => (
          <DemoContainer key={i}>
            <Demo />
          </DemoContainer>
        ))}
      </div>
    </div>
  );
}
