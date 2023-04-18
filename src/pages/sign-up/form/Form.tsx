import { FC, FormEvent, useState } from 'react'

import { ButtonLoading } from '../../../components/buttonLoading/ButtonLoading'
import { Input } from '../../../components/input/Input'
import { InputPassword } from '../../../components/inputPassword/InputPassword'
import { Logo } from '../../../components/logo/Logo'
import { useSignUp } from '../../../hooks/api/useSignUp'
import { Container, Anchor, Title } from './formStyles'

export const Form: FC = () => {
  const { loading, signUp } = useSignUp()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submit = (event: FormEvent) => {
    event.preventDefault()

    signUp({ email, password, confirmPassword })
  }

  return (
    <>
      <Logo />
      <Title>Criar conta</Title>
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
        <InputPassword
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={setConfirmPassword}
          loading={loading}
        />
        <ButtonLoading name="Cadastrar" loading={loading} />
      </Container>
      <Anchor to="/">Já tem uma conta? acesse-a!</Anchor>
    </>
  )
}
