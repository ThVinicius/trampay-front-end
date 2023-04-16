import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.form`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  button {
    margin-top: 36px;
  }
`

const Card = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 10px 46px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Anchor = styled(Link)`
  margin-top: 25px;
  font: normal 400 1.1rem 'Roboto', sans-serif;
  text-align: center;
`

export { Container, Card, Anchor }
