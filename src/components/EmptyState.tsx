import React from 'react'
import {
  Title,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
} from '@patternfly/react-core'
import { CubesIcon } from '@patternfly/react-icons'

const SimpleEmptyState = () => (
  <EmptyState variant={EmptyStateVariant.full}>
    <EmptyStateIcon icon={CubesIcon} />
    <Title headingLevel="h5" size="lg">
      There are no applications
    </Title>
  </EmptyState>
)

export { SimpleEmptyState as EmptyState }
