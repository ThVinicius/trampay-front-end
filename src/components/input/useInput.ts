import { useMemo } from 'react'

export function useInput(disabled: boolean) {
  const { backGroundColor } = useMemo(() => {
    if (disabled === false) return { backGroundColor: '#ffffff' }

    return { backGroundColor: '#F2F2F2' }
  }, [disabled])

  return { backGroundColor }
}
