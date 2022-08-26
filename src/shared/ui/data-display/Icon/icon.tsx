import React, { useMemo } from 'react';

import { styled } from '~shared/lib/styles';

import { IconNamesType, IconProps } from './types';

import { icons } from './icons';

const getIconComponentByName = (name: IconNamesType) => {
  return icons[name];
};

export const Icon: React.FC<IconProps> = ({ name, iconComponent, fill, ...props }) => {
  const IconComponent = useMemo(() => {
    return iconComponent || (name ? getIconComponentByName(name) : null);
  }, [iconComponent, name]) as React.ComponentType<IconProps> | null;

  if (!IconComponent) {
    console.warn(`this icon name doesn't exist: ${name}`); // eslint-disable-line no-console

    return <span />;
  }

  const computedFill = fill === true ? 'currentColor' : fill;

  const IconComponentStyle = styled(IconComponent)<IconProps>(({ onClick }) => ({
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fontSize: '1.5rem',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    flexShrink: 0,
    cursor: onClick ? 'pointer' : undefined,
    fill: computedFill as any,
  }));

  return <IconComponentStyle {...props} />;
};
