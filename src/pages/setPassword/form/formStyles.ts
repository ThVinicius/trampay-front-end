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
  align-items: center;
`

const Title = styled.h1`
  margin-top: 25px;
  font: normal 700 2.2rem 'Roboto', sans-serif;
`

export { Container, Card, Title }
