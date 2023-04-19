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

  @media (max-width: 450px) {
    width: 100%;

    input,
    .input-password-container {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`

const Title = styled.h1`
  margin-top: 25px;
  font: normal 700 2.2rem 'Roboto', sans-serif;
`

export { Container, Title }
