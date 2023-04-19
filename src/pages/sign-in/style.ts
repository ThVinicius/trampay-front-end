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

  @media (max-width: 450px) {
    div:first-child {
      width: 100%;
      border-radius: 0;
    }
  }
`

export { Container }
