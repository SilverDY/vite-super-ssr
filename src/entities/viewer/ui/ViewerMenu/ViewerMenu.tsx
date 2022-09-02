import { FC, MouseEventHandler, useCallback, useState } from 'react';

import { Menu, MenuItem } from '@mui/material';

import { Avatar, IconButton } from '~shared/ui';
import { FormattedMessage, provideTranslation } from '~shared/lib/l10n';

import { locales } from '../../locales';

export interface ViewerMenuProps {
  onSignOut: MouseEventHandler<HTMLLIElement>;
  avatar?: string;
}

const ViewerMenu: FC<ViewerMenuProps> = ({ onSignOut, avatar }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Avatar src={avatar} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onSignOut}>
          <FormattedMessage id="entity.viewer.buttons.signOut" />
        </MenuItem>
      </Menu>
    </>
  );
};

const TranslatedViewerMenu = provideTranslation<ViewerMenuProps>(locales, ViewerMenu);

export { TranslatedViewerMenu as ViewerMenu };
