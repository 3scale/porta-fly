import { NotFound } from './NotFound'
import React from 'react'
import { Route, Switch, SwitchProps, useRouteMatch } from 'react-router-dom'

export const SwitchWith404: React.FunctionComponent<SwitchProps> = ({
  children,
  ...props
}: SwitchProps) => {
  const match = useRouteMatch()
  const defaultMatch = React.useMemo(
    () => match && <Route path={match.path} exact />,
    [match]
  )
  return (
    <Switch {...props}>
      {children}
      {/*
       * Default route that matches the parent route, to avoid showing a 404
       * for "junction" pages . See the "Dashboard" example.
       */}
      {defaultMatch}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
