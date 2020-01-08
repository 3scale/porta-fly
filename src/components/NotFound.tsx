import { NavLink } from 'react-router-dom'
import React from 'react'
import { useA11yRouteChange } from './util/useA11yRoute'
import { useDocumentTitle } from './util/useDocumentTitle'
import { Alert, PageSection } from '@patternfly/react-core'

export const NotFound: React.FunctionComponent = () => {
  useA11yRouteChange()
  useDocumentTitle('Page not found')
  return (
    <PageSection>
      <Alert variant="danger" title="404! This view hasn't been created yet." />
      <br />
      <NavLink to="/" className="pf-c-nav__link">
        Take me home
      </NavLink>
    </PageSection>
  )
}
