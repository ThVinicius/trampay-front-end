import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { toastProps } from '../../utils/toastProps'

import { api } from '../../config/axios'
import { useAuth } from '../../contexts/auth/auth'

interface IPayload {
  email: string
  password: string
}

export function useSignIn() {
  const navigate = useNavigate()
  const { setToken } = useAuth()
  const [loading, setLoading] = useState(false)

  const signIn = (payload: IPayload) => {
    if (loading) return
    setLoading(true)

    const toastId = toast.loading('Requisição em andamento...')

    const promise = api.post<{ access_token: string }>('/sign-in', payload)

    promise
      .then(({ data }) => {
        setToken(data.access_token)

        toast.update(
          toastId,
          toastProps('success', 'Login efetuado com sucesso! 👌')
        )

        navigate('/home')
      })
      .catch(({ response }) => {
        let renderToast: string

        switch (response?.status) {
          case 401:
            renderToast = response.data.message

            break

          default:
            renderToast = 'Erro inesperado, tente mais tarde'
            break
        }

        toast.update(toastId, toastProps('error', `${renderToast} 🤯`))
      })
      .finally(() => setLoading(false))
  }

  return { signIn, loading }
}
