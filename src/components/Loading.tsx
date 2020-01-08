import React from 'react'
import { Spinner } from '@patternfly/react-core/dist/js/experimental'
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateVariant,
  PageSection,
  Title
} from '@patternfly/react-core'

export const Loading: React.FunctionComponent = () => (
  <PageSection aria-label="Loading Content Container">
    <EmptyState variant={EmptyStateVariant.full}>
      <EmptyStateIcon variant="container" component={Spinner} />
      <Title size="lg">Loading</Title>
    </EmptyState>
  </PageSection>
)
