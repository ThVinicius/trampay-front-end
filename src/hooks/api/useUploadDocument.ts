import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'

import { toastProps } from '../../utils/toastProps'

import { api } from '../../config/axios'
import { useAuth } from '../../contexts/auth/auth'

type ISet = Dispatch<SetStateAction<File | null>>

export function useUploadDocument() {
  const { token } = useAuth()
  const [loading, setLoading] = useState(false)

  const upload = (form: FormData, setFile: ISet) => {
    if (loading) return
    setLoading(true)

    const toastId = toast.loading('Requisição em andamento...')

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${token}`
      }
    }

    const promise = api.post('/user-balance', form, config)

    promise
      .then(() => {
        setFile(null)

        toast.update(
          toastId,
          toastProps('success', 'Arquivo enviado com sucesso 👌')
        )
      })
      .catch(({ response }) => {
        let renderToast: string

        switch (response?.status) {
          case 400:
            renderToast = 'Somente arquivos no formato CSV são aceitos!'

            break

          default:
            renderToast = 'Erro inesperado, tente mais tarde'
            break
        }

        toast.update(toastId, toastProps('error', `${renderToast} 🤯`))
      })
      .finally(() => setLoading(false))
  }

  return { loading, upload }
}
