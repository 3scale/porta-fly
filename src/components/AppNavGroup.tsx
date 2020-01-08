import { NavGroup } from '@patternfly/react-core'
import React from 'react'
import { AppNavItem, IAppNavItemProps } from './AppNavItem'

export interface IAppNavGroupProps {
  title: string;
  items: Array<IAppNavItemProps | undefined>;
}

export const AppNavGroup: React.FunctionComponent<IAppNavGroupProps> = ({
  title,
  items = []
}: IAppNavGroupProps) => (
  <NavGroup title={title}>
    {items.map((subNavItem, jdx) => (
      <AppNavItem {...subNavItem} key={jdx} />
    ))}
  </NavGroup>
)
