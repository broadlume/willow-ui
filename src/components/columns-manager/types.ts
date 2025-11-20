import type { CleanupFn } from '@atlaskit/pragmatic-drag-and-drop/types';
import { Column } from '@src/lib/hooks/useColumnVisibility';

export interface BoardProps {
  contextValue: BoardContextValue;
  columns: {
    id: keyof typeof ColumnType;
    title: string;
    items: ColumnItem[];
  }[];
}

export enum ColumnType {
  'visible-columns' = 'visible-columns',
  'hidden-columns' = 'hidden-columns',
}

export interface ColumnItem {
  id: string;
  content: string;
  isDraggable: boolean;
  columnData: Column;
}

export interface ColumnList {
  id: keyof typeof ColumnType;
  title: string;
  items: ColumnItem[];
}

export interface BoardContextValue {
  instanceId: symbol;

  getColumns: () => ColumnList[];

  registerCard: (args: {
    cardId: string;
    entry: {
      element: HTMLElement;
    };
  }) => CleanupFn;

  registerColumn: (args: {
    columnId: keyof typeof ColumnType;
    entry: {
      element: HTMLElement;
    };
  }) => CleanupFn;

  handleCardVisibility: (args: {
    card: ColumnItem & { columnId: keyof typeof ColumnType };
  }) => void;
}

export interface ColumnProps {
  column: {
    id: keyof typeof ColumnType;
    title: string;
    items: ColumnItem[];
  };
}

export interface ColumnManagerProps {
  isOpen: boolean;
  onClose: () => void;
  columns: Column[];
  visibleColumnIds: string[];
  toggleColumnVisibility: (columnId: string) => void;
}

export interface ManageColumnsProps {
  columns: Column[];
  visibleColumnIds: string[];
  toggleColumnVisibility: (columnId: string) => void;
  searchTerm: string;
}
