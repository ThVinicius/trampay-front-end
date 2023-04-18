import { GrDocumentCsv } from 'react-icons/gr'

import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 20px;
  }
`

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;

  input {
    display: none;
  }
`

export const FileName = styled.span`
  color: green;
`

export const DocumentCsvIcon = styled(GrDocumentCsv)`
  font-size: 3rem;
`
