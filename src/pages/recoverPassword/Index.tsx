import { FC, useState } from 'react'

import { Card } from '../../components/card/Card'
import { useRecoverPassword } from '../../hooks/api/useRecoverPassword'
import { Form } from './form/Form'
import { Container, Text } from './style'

export const RecoverPassword: FC = () => {
  const { sendEmail, loading, success } = useRecoverPassword()
  const [email, setEmail] = useState('')

  return (
    <Container>
      <Card>
        <>
          {!success && <Form {...{ email, setEmail, sendEmail, loading }} />}
          {success && (
            <Text>
              Foi enviado uma mensagem para {email}. Verifique o email para
              mudar sua senha
            </Text>
          )}
        </>
      </Card>
    </Container>
  )
}
