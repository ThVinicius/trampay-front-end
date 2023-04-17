import { FC, FormEvent, useState } from 'react'

import { ButtonLoading } from '../../../components/buttonLoading/ButtonLoading'
import { InputPassword } from '../../../components/inputPassword/InputPassword'
import { Logo } from '../../../components/logo/Logo'
import { useSetPassword } from '../../../hooks/api/useSetPassword'
import { Container, Card, Title } from './formStyles'

interface IProps {
  token: string
}

export const Form: FC<IProps> = ({ token }) => {
  const { loading, setPassword: submitSetPassword } = useSetPassword(token)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submit = (event: FormEvent) => {
    event.preventDefault()

    submitSetPassword({ password, confirmPassword })
  }

  return (
    <Card>
      <Logo />
      <Title>Mudar senha</Title>
      <Container onSubmit={submit}>
        <InputPassword
          placeholder="Senha nova"
          value={password}
          onChange={setPassword}
          loading={loading}
        />
        <InputPassword
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={setConfirmPassword}
          loading={loading}
        />
        <ButtonLoading name="Mudar senha" loading={loading} />
      </Container>
    </Card>
  )
}
