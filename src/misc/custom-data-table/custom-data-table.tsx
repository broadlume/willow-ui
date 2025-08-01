// Copyright 2023 Broadlume
import { ReactNode, forwardRef } from 'react';
import { Checkbox } from '@src/index';

//Our own custom data table component using https://github.com/jbetancur/react-data-table-component / https://react-data-table-component.netlify.app/
import DataTable, { TableProps } from 'react-data-table-component';

import './custom-data-table.scss';
type CustomDataTableProps<T> = TableProps<T> & {
  classNames?: { root?: string[] };
};
//This is the custom data table component
export const CustomDataTable = <T,>({
  classNames = { root: [] },
  ...props
}: CustomDataTableProps<T>) => {
  //This adds our own Checkbox component to use in the data table
  const CustomCheckBox = forwardRef(({ ...rest }, _ref) => {
    console.log('rest', props, rest);
    return <Checkbox {...rest} />;
  });

  return (
    <div
      className={`body-medium tw-reset ~rounded-lg ~border ~shadow ${classNames.root}`}
    >
      {props.selectableRows ? (
        <DataTable
          selectableRowsNoSelectAll
          {...props}
        />
      ) : (
        <DataTable {...props} />
      )}
    </div>
  );
};
