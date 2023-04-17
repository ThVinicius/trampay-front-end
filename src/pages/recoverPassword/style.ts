import styled from 'styled-components'

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #11998e;
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);
  background: linear-gradient(to right, #38ef7d, #11998e);
`

const Text = styled.p`
  font: normal 400 1.1rem 'Roboto', sans-serif;
`

export { Container, Text }