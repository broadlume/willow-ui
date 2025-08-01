import { FaEllipsisH } from 'react-icons/fa';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from '@src/index';

//Construct the action button cell
/**
 * To allow RowClicked events you can add data-tag="allowRowEvents" to your custom cell component elements.
 * If your custom cell component is more complex and has nested elements you want to add data-tag="allowRowEvents" to the innermost element or on every element you want to propagate the click event to.
 * https://react-data-table-component.netlify.app/?path=/docs/api-columns--page
 */

//Just a simple button with an icon
export const DataTableActionButton = () => {
  return (
    <Button size='icon' variant='secondary' data-tag='allowRowEvents'>
      <FaEllipsisH data-tag='allowRowEvents' />
    </Button>
  );
};

//A button with a popover menu if there are actions
export const DataTableActionMenu = (props: { actions: string[] }) => {
  return props.actions.length > 0 ? (
    <Popover>
      <PopoverTrigger asChild>
        <Button size='icon' variant='ghost'>
          <FaEllipsisH />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='~w-auto ~gap-y-2'>
          {props.actions.map((action: string, i, arr) => {
            return (
              <>
                <div key={action}>
                  <button
                    className='~h-full ~w-full ~text-left ~capitalize hover:~bg-gray-100'
                    data-tag='allowRowEvents'
                    data-action={action.toLowerCase()}
                  >
                    {action}
                  </button>
                </div>
                {arr.length - 1 !== i && <Separator />}
              </>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  ) : (
    <></>
  );
};
