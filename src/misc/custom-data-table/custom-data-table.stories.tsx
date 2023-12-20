import type { Meta, StoryObj } from '@storybook/react';

import { CustomDataTable } from './custom-data-table';
import { data } from './data';
import { UserTableColumns } from './helpers/user-table-columns';

const meta: Meta<typeof CustomDataTable> = {
  component: CustomDataTable,
  title: 'Misc/Custom Data Table',
};

export default meta;
type Story = StoryObj<typeof CustomDataTable>;

//Handle our table row selection
const handleSelectedRows = ({ selectedRows }: { selectedRows: any[] }) => {
  // TODO
  console.log('Selected Rows:', selectedRows);
};
//Handle our table row click
const handleRowClicked = (row: any, event: any) => {
  // TODO
  console.log('Row clicked:', row);

  switch (event.target.dataset.action) {
    case 'edit':
      // navigate(`/settings/permissions/user/`, { state: { user: row } });
      window.confirm('Boooo');
      break;
    case 'deactivate':
      //Show a confirmation modal
      window.confirm(
        'Are you sure you want to deactivate this user?\nTODO: Show our nice confirmation modal and implement the functionality'
      );
      break;
    default:
      //Do nothing
      break;
  }
};

const userActions: string[] = [];
//If user has admin access they can edit and deactivate users
// if( adminLevel() > 0 ){
userActions.push('edit', 'deactivate');
// }

export const Demo: Story = {
  render: (args) => (
    <CustomDataTable
      columns={UserTableColumns(userActions)}
      data={data}
      selectableRows
      pagination
      onSelectedRowsChange={handleSelectedRows}
      onRowClicked={handleRowClicked}
      noDataComponent='No users'
      // progressPending={promiseInProgress}
      progressComponent={<small>Please wait...</small>}
      persistTableHead={true}
    />
  ),
};
