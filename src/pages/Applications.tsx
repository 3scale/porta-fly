import React, { useState, useEffect } from 'react'
import { useDocumentTitle, Loading, EmptyState } from '../components'
import Application from '../model/Application'
import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  TextVariants,
} from '@patternfly/react-core'
import { Table, TableHeader, TableBody } from '@patternfly/react-table'

const Applications: React.FunctionComponent = () => {
  useDocumentTitle('Applications')

  const [isPending, setIsPending] = useState<boolean>(true)
  const [applications, setApplications] = useState<Application[]>([])

  useEffect(() => {
    fetch('/applications')
      .then(res => res.json())
      .then(setApplications)
      .catch(err => console.log(err))
      .finally(() => setIsPending(false))
  }, [])

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
        {isPending ? <Loading /> : <ApplicationsTable applications={applications} />}
      </PageSection>
    </>
  )
}

const ApplicationsTable = ({ applications }: { applications: Application[] }) => {
  if (applications.length === 0) {
    return <EmptyState />
  }

  const COLUMNS = ['Name', 'State', 'Account', 'Plan', 'Created at']

  const rows = applications.map(app => [app.name, app.state, app.account, app.plan.name, app.created_at])

  return (
    <Table aria-label="Applications list" cells={COLUMNS} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  )
}

export default Applications
