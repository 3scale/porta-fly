import { Loading } from './Loading'
import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

export interface IDynamicImportProps extends RouteProps {
  getComponent: () => Promise<{ default: React.ComponentType }>;
}

export function LazyRoute ({ getComponent, ...props }: IDynamicImportProps) {
  const LazyComponent = React.useMemo(() => React.lazy(getComponent), [getComponent])
  return (
    <Route {...props}>
      <React.Suspense fallback={<Loading />}>
        <LazyComponent />
      </React.Suspense>
    </Route>
  )
}
