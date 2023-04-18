import styled from 'styled-components'

const Container = styled.main`
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: #272727;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  margin: 30px;
  font: normal 700 2.1rem 'Roboto', sans-serif;
  color: #fff;
`

export { Container, Title }
