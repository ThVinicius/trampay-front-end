import { create } from 'zustand'

interface IAuthState {
  token: string | null
  setToken: (token: string | null) => void
}

export const useAuth = create<IAuthState>(set => ({
  token: null,
  setToken: token => set({ token })
}))
