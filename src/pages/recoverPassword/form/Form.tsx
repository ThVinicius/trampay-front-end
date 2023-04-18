import { Dispatch, FC, FormEvent, SetStateAction } from 'react'

import { ButtonLoading } from '../../../components/buttonLoading/ButtonLoading'
import { Input } from '../../../components/input/Input'
import { Logo } from '../../../components/logo/Logo'
import { Container, Anchor, Title } from './formStyles'

interface IProps {
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  loading: boolean
  sendEmail: (email: string) => void
}

export const Form: FC<IProps> = ({ email, setEmail, loading, sendEmail }) => {
  const submit = (event: FormEvent) => {
    event.preventDefault()

    sendEmail(email)
  }

  return (
    <>
      <Logo />
      <Title>Recuperação de senha</Title>
      <Container onSubmit={submit}>
        <Input
          type="email"
          placeholder="Email"
          disabled={loading}
          value={email}
          onChange={setEmail}
        />
        <ButtonLoading name="Enviar email" loading={loading} />
      </Container>
      <Anchor to="/sign-up">Não tem uma conta? crie uma!</Anchor>
      <Anchor to="/">Já tem uma conta? acesse-a!</Anchor>
    </>
  )
}
