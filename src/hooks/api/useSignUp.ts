import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { toastProps } from '../../utils/toastProps'

import { api } from '../../config/axios'

interface IPayload {
  email: string
  password: string
  confirmPassword: string
}

export function useSignUp() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [successFullyCreated, setSuccessFullyCreated] = useState(false)

  const signUp = (payload: IPayload) => {
    if (loading) return
    setLoading(true)

    const toastId = toast.loading('Requisição em andamento...')

    const promise = api.post('/sign-up', payload)

    promise
      .then(() => {
        setSuccessFullyCreated(true)

        toast.update(
          toastId,
          toastProps('success', 'Conta criada com sucesso! 👌')
        )

        navigate('/')
      })
      .catch(({ response }) => {
        let renderToast: string

        switch (response?.status) {
          case 400:
            renderToast = 'As senhas não estão iguais!'

            break

          case 409:
            renderToast = 'Esse email já esta em uso!'

            break

          default:
            renderToast = 'Erro inesperado, tente mais tarde'
            break
        }

        toast.update(toastId, toastProps('error', `${renderToast} 🤯`))
      })
      .finally(() => setLoading(false))
  }

  return { signUp, loading, successFullyCreated }
}
