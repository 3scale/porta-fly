import { AppLayoutContext } from '../AppLayout'
import React from 'react'

export function useBreadcrumb (breadcrumb: React.ReactElement) {
  const context = React.useContext(AppLayoutContext)

  React.useEffect(() => {
    context.setBreadcrumb(breadcrumb)
    return () => {
      context.setBreadcrumb(null)
    }
  }, [context, breadcrumb])
}
