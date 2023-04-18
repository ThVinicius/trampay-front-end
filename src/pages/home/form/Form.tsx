import { FC, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

import { ButtonLoading } from '../../../components/buttonLoading/ButtonLoading'
import { useUploadDocument } from '../../../hooks/api/useUploadDocument'
import { Container, DocumentCsvIcon, FileName, InputLabel } from './formStyle'

export const Form: FC = () => {
  const { loading, upload } = useUploadDocument()
  const [csv, setCsv] = useState<File | null>(null)

  const submit = (event: FormEvent) => {
    event.preventDefault()

    if (!csv) return toast.info('Por favor carregue um CSV')

    const formData = new FormData()
    formData.append('csv', csv as File)

    upload(formData, setCsv)
  }

  return (
    <Container onSubmit={submit}>
      <InputLabel htmlFor="inputTag">
        Selecione seu arquivo CSV <br />
        <DocumentCsvIcon />
        <input
          id="inputTag"
          type="file"
          required
          onChange={e => setCsv(e.target.files && e.target.files[0])}
        />
        <br />
        {csv && <FileName>{csv.name}</FileName>}
      </InputLabel>
      <ButtonLoading name="Enviar" loading={loading} />
    </Container>
  )
}
