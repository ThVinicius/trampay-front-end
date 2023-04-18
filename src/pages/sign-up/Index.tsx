import { FC } from 'react'

import { Card } from '../../components/card/Card'
import { Form } from './form/Form'
import { Container } from './style'

export const SignUp: FC = () => {
  return (
    <Container>
      <Card>
        <Form />
      </Card>
    </Container>
  )
}
