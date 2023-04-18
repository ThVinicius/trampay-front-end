import { FC, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Card } from '../../components/card/Card'
import { Form } from './form/Form'
import { Container } from './style'

export const SetPassword: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const token = useMemo(() => {
    const searchParams = new URLSearchParams(location.search)
    const token = searchParams.get('token')

    if (!token) navigate('/')

    return token
  }, [])

  return (
    <Container>
      <Card>
        <Form token={token as string} />
      </Card>
    </Container>
  )
}
