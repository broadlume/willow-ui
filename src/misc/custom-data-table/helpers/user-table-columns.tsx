// Copyright 2023 Broadlume

import { DataTableActionMenu } from './data-table-action-button';
import { DataTableLimitToolTip } from './data-table-limit-tooltip';
import { UserTableRole, UserTableUser } from './user-table-cells';
import {
  createStringArrayFromObjectArray,
  createStringFromObjectArray,
} from './utils';

//This is the column data and definitions for the user table
//https://react-data-table-component.netlify.app/?path=/docs/api-columns--page
export const UserTableColumns = (actions: string[]) => {
  return [
    {
      //User details, has a AVATAR, NAME and EMAIL
      name: 'User', //The title of the column
      cell: (row: any) => <UserTableUser {...row} />, //The html to render in the cell
      selector: (row: any) => `${row.fname} ${row.lname}`, //The data we use to sort?
      sortable: true,
      grow: 4, //This will make the column grow to fill the space
    },
    {
      //Shows the user's role in a label/badge
      name: 'Role',
      cell: (row: any) => <UserTableRole {...row.role} />, //The html to render in the cell
      selector: (row: any) => (row.role ? row.role.name : ''), //The data we use to sort?
      sortable: true,
      //hide: 599, //Hide this column on small screens
    },
    {
      //Locations the user has access to, this will be a list of locations from an object
      name: 'Locations',
      cell: (row: any) => (
        <DataTableLimitToolTip
          items={createStringArrayFromObjectArray(row.locations, 'name')}
          max={3}
        />
      ),
      selector: (row: any) =>
        createStringFromObjectArray(row.locations, 'name'), //The data we use to sort?
      sortable: false,
      //hide: 959, //Hide this column on medium screens
      allowOverflow: true, //Allow the text to overflow
      ignoreRowClick: true, //Ignore clicks on this column
    },
    {
      //Division, this will be a list of divisions from an object
      name: 'Divisions',
      cell: (row: any) => (
        <DataTableLimitToolTip
          items={createStringArrayFromObjectArray(row.divisions, 'name')}
          max={3}
        />
      ),
      selector: (row: any) =>
        createStringFromObjectArray(row.divisions, 'name'),
      sortable: false,
      //hide: 959, //Hide this column on medium screens
      allowOverflow: true, //Allow the text to overflow
      ignoreRowClick: true, //Ignore clicks on this column
    },
    {
      //Our action button
      cell: (row: any) => <DataTableActionMenu actions={actions} />,
      center: true,
      ignoreRowClick: true, //Ignore clicks on this column
      omit: actions.length === 0, //Omit the column if there are no actions
    },
  ];
};
