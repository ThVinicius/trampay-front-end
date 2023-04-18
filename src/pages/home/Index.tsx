import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card } from '../../components/card/Card'
import { Header } from '../../components/header/Header'
import { useAuth } from '../../contexts/auth/auth'
import { Form } from './form/Form'
import { Container, Title } from './style'

export const Home: FC = () => {
  const { token } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) navigate('/')
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Title>Upload do arquivo CSV</Title>
        <Card>
          <Form />
        </Card>
      </Container>
    </>
  )
}
