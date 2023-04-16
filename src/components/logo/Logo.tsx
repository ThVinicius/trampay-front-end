import { FC } from 'react'

import logo from '../../assets/images/trampay-logo.png'
import { Container } from './logoStyle'

export const Logo: FC = () => {
  return (
    <Container>
      <p>Desafio</p>
      <img src={logo} alt="logo trampay" />
    </Container>
  )
}
