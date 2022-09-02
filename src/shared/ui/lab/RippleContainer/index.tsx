import { FC, forwardRef } from 'react';
import { ListItemProps, ListItem as MuiListItem } from '@mui/material';

export type RippleContainerProps = ListItemProps;

export const RippleContainer: FC<RippleContainerProps> = forwardRef(({ ...props }, ref) => {
  return (
    <MuiListItem
      button={true as any} //note: there is a bug in the Material ListItem component
      {...props}
      {...ref}
    />
  );
});
