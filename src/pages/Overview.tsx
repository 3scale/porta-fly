import React from 'react'
import {useA11yRouteChange, useDocumentTitle} from '../components'
import {
  PageSection,
  TextContent,
  Title,
  Text,
  Card,
  CardBody
} from '@patternfly/react-core'

const Overview: React.FunctionComponent = ({children}) => {
  useA11yRouteChange()
  useDocumentTitle('Overview')
  return (
    <>
      <PageSection variant={'light'}>
        <TextContent>
          <Title size={'3xl'}>Overview</Title>
          <Text>
            <b>Porta-fly</b> is a project to develop a new 3scale front end Patternfly-React app
          </Text>
        </TextContent>
      </PageSection>
      <PageSection>
        <Card>
          <CardBody>
            <TextContent>
            <Title size={'3xl'}>Porta-fly</Title>
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
