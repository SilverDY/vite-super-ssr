import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  Toolbar,
} from '@mui/material';

import { Link, matchPath } from '~shared/lib/router';
import { Box } from '~shared/ui';

export interface NavItem {
  Icon?: ReactNode;
  title: string;
  path: string;
}

export interface DrawerProps {
  currentPath: string;
  routes: NavItem[];
}

const drawerWidth = 240;

export const Drawer: FC<DrawerProps> = ({ routes, currentPath }) => {
  const initialIndex = useMemo(() => {
    const result = routes.findIndex((item) => checkActiveItem(item.path, currentPath));

    return result !== -1 ? result : 0;
  }, [currentPath, routes]);

  const [activeTabIndex, setActiveTabIndex] = useState(initialIndex);

  useEffect(() => {
    routes.forEach((item, index) => {
      const isActive = checkActiveItem(item.path, currentPath);

      if (isActive && index !== activeTabIndex) {
        setActiveTabIndex(index);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath, routes]);

  const renderItem = ({ path, title, Icon }: NavItem, index: number) => {
    const selected = index === activeTabIndex;

    return (
      <Link key={path} to={path}>
        <ListItem
          disablePadding
          sx={{ background: (theme) => (selected ? theme.palette.action.selected : undefined) }}
        >
          <ListItemButton>
            <ListItemIcon>{Icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItemButton>
        </ListItem>
      </Link>
    );
  };

  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />

      <Box sx={{ overflow: 'auto' }}>
        <List>{routes.map(renderItem)}</List>
      </Box>
    </MuiDrawer>
  );
};

function checkActiveItem(itemPath: string, currentPath: string) {
  return matchPath(
    {
      path: currentPath,
      caseSensitive: true,
      end: true,
    },
    itemPath
  );
}
