import { NavExpandable } from '@patternfly/react-core'
import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { AppNavItem, IAppNavItemProps } from './AppNavItem'

export interface IAppNavExpandableProps {
  title: string;
  to: string;
  items: Array<IAppNavItemProps | undefined>;
}

export const AppNavExpandable: React.FunctionComponent<IAppNavExpandableProps> = ({
  title,
  to,
  items
}: IAppNavExpandableProps) => {
  const match = useRouteMatch({ path: to })
  const isActive = !!match
  return (
    <NavExpandable title={title} isActive={isActive} isExpanded={isActive}>
      {items.map((subNavItem, jdx) => (
        <AppNavItem {...subNavItem} key={jdx} />
      ))}
    </NavExpandable>
  )
}
