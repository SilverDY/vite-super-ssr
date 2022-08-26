import { FC, forwardRef } from 'react';
import MaterialListItem, { ListItemProps } from '@mui/material/ListItem';

export type RippleContainerProps = ListItemProps;

export const RippleContainer: FC<RippleContainerProps> = forwardRef(({ ...props }, ref) => {
  return (
    <MaterialListItem
      button={true as any} //note: there is a bug in the Material ListItem component
      {...props}
      {...ref}
    />
  );
});
