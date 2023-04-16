import { useMemo } from 'react'
import { ThreeDots } from 'react-loader-spinner'

interface IButton {
  Label: string | typeof ThreeDots
  opacity: number
}

export function useButton(loading: boolean, name: string) {
  const { Label, opacity } = useMemo((): IButton => {
    if (loading === false) return { opacity: 1, Label: name }

    return { opacity: 0.7, Label: ThreeDots }
  }, [loading])

  return { Label, opacity }
}
