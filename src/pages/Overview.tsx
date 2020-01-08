import React from 'react'
import {
  Card,
  CardBody,
  PageSection,
  Text,
  TextContent,
  Title
} from '@patternfly/react-core'
import { useA11yRouteChange, useDocumentTitle } from '../components'

const Overview: React.FunctionComponent = () => {
  useA11yRouteChange()
  useDocumentTitle('Overview')
  return (
    <>
      <PageSection variant="light">
        <TextContent>
          <Title size="3xl">Overview</Title>
          <Text>
            <b>Porta-fly</b> is a project to develop a new 3scale front end Patternfly-React app
          </Text>
        </TextContent>
      </PageSection>
      <PageSection>
        <Card>
          <CardBody>
            <TextContent>
              <Title size="3xl">Porta-fly</Title>
              <Text>
            The 3scale Porta component is part of the 3Scale API Management solution...
              </Text>
            </TextContent>
          </CardBody>
        </Card>
      </PageSection>
    </>
  )
}

export default Overview
