import { FC } from 'react'

import { Card } from '../../components/card/Card'
import { Form } from './form/Form'
import { Container } from './style'

export const SignIn: FC = () => {
  return (
    <Container>
      <Card>
        <Form />
      </Card>
    </Container>
  )
}
