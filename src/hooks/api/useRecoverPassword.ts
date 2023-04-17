import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { toastProps } from '../../utils/toastProps'

import { api } from '../../config/axios'

export function useRecoverPassword() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (email: string) => {
    if (loading) return
    setLoading(true)

    const toastId = toast.loading('Requisição em andamento...')

    const promise = api.post('/redefine-password', { email })

    promise
      .then(() => {
        setSuccess(true)

        toast.update(
          toastId,
          toastProps('success', 'Uma mensagem foi enviado ao seu email 👌')
        )

        navigate('/')
      })
      .catch(({ response }) => {
        let renderToast: string

        switch (response?.status) {
          case 400:
            renderToast = response.data.message

            break

          case 404:
            renderToast = 'Esse email não esta cadastrado!'

            break

          default:
            renderToast = 'Erro inesperado, tente mais tarde'
            break
        }

        toast.update(toastId, toastProps('error', `${renderToast} 🤯`))
      })
      .finally(() => setLoading(false))
  }

  return { sendEmail, loading, success }
}
