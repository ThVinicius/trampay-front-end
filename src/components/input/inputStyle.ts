import styled from 'styled-components'

interface IContainer {
  backGroundColor: string
}

const Container = styled.input<IContainer>`
  width: 53.4vw;
  height: 60px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 12px;
  font: normal 400 1rem 'Roboto', sans-serif;
  background-color: ${props => props.backGroundColor};
  color: #000000;
  padding-left: 14px;

  :focus {
    outline: 2px solid #00fa72;
  }
`

export { Container }
