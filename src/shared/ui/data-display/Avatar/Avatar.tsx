import { FC, forwardRef } from 'react';
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material';

export interface AvatarProps extends MuiAvatarProps {}

export const Avatar: FC<AvatarProps> = forwardRef(({ ...props }, ref) => {
  return <MuiAvatar {...props} ref={ref} />;
});

Avatar.displayName = 'Avatar';
