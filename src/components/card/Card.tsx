import { FC } from 'react'

import { Container } from './cardStyle'

interface IProps {
  children: JSX.Element | JSX.Element[]
}

export const Card: FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>
}
