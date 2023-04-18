import { FC, FormEvent, useState } from 'react'

import { ButtonLoading } from '../../../components/buttonLoading/ButtonLoading'
import { Input } from '../../../components/input/Input'
import { InputPassword } from '../../../components/inputPassword/InputPassword'
import { Logo } from '../../../components/logo/Logo'
import { useSignIn } from '../../../hooks/api/useSignIn'
import { Container, Anchor, Title } from './formStyles'

export const Form: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, loading } = useSignIn()

  const submit = (event: FormEvent) => {
    event.preventDefault()

    signIn({ email, password })
  }

  return (
    <>
      <Logo />
      <Title>Acessar conta</Title>
      <Container onSubmit={submit}>
        <Input
          type="email"
          placeholder="Email"
          disabled={loading}
          value={email}
          onChange={setEmail}
        />
        <InputPassword
          placeholder="Senha"
          value={password}
          onChange={setPassword}
          loading={loading}
        />
        <ButtonLoading name="Entrar" loading={loading} />
      </Container>
      <Anchor to="/sign-up">Não tem uma conta? crie uma!</Anchor>
      <Anchor to="/password-recovery">Esqueci minha senha</Anchor>
    </>
  )
}
