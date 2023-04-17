import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { toastProps } from '../../utils/toastProps'

import { api } from '../../config/axios'

interface IPayload {
  password: string
  confirmPassword: string
}

export function useSetPassword(token: string) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const setPassword = (payload: IPayload) => {
    if (loading) return
    setLoading(true)

    const toastId = toast.loading('Requisição em andamento...')

    const config = { headers: { authorization: `Bearer ${token}` } }

    const promise = api.patch('/set-password', payload, config)

    promise
      .then(() => {
        toast.update(
          toastId,
          toastProps('success', 'Senha redefinida com sucesso! 👌')
        )

        navigate('/')
      })
      .catch(({ response }) => {
        let renderToast: string

        switch (response?.status) {
          case 400:
            renderToast = 'As senhas não estão iguais!'

            break

          default:
            renderToast = 'Erro inesperado, tente mais tarde'
            break
        }

        toast.update(toastId, toastProps('error', `${renderToast} 🤯`))
      })
      .finally(() => setLoading(false))
  }

  return { setPassword, loading }
}
