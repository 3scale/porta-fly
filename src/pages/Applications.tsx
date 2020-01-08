import React from 'react'
import { useDocumentTitle } from '../components'
import {
  PageSection,
  PageSectionVariants,
  Text,
  TextContent,
  TextVariants
} from '@patternfly/react-core'
import { Table, TableBody, TableHeader } from '@patternfly/react-table'

const Applications: React.FunctionComponent = () => {
  useDocumentTitle('Applications')

  const columns = [
    'Name',
    'State',
    'Account',
    'Plan',
    'Created at'
  ]
  const rows = [
    {
      cells: [
        'Application 1',
        'Active',
        'Deneloper 1',
        'Basic',
        '01-01-2019'
      ]
    },
    {
      cells: [
        'Application 2',
        'Active',
        'Deneloper 1',
        'Basic',
        '01-01-2019'
      ]
    },
    {
      cells: [
        'Application 3',
        'Active',
        'Deneloper 1',
        'Basic',
        '01-01-2019'
      ]
    }
  ]

  return (
    <>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Applications</Text>
        </TextContent>
        <TextContent>
          <Text component={TextVariants.p}>
            This is the applications screen.
          </Text>
        </TextContent>
      </PageSection>

      <PageSection>
        <Table aria-label="Applications list" cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      </PageSection>
    </>
  )
}

export default Applications
