import { FC } from 'react'

import { Logo } from '../logo/Logo'
import { Container } from './headerStyle'

export const Header: FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}
