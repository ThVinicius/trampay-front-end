import { useMemo, useState } from 'react'

import { Eye, EyeSlash } from './styles'

export function useInputPassword(loading: boolean) {
  const [hidden, setHidden] = useState(true)

  const { backGroundColor, disabled } = useMemo(() => {
    if (loading === false)
      return { backGroundColor: '#ffffff', disabled: false }

    return { backGroundColor: '#F2F2F2', disabled: true }
  }, [loading])

  const { Icon, type } = useMemo(() => {
    if (hidden === false) return { Icon: Eye, type: 'text' }

    return { Icon: EyeSlash, type: 'password' }
  }, [hidden])

  return { setHidden, backGroundColor, disabled, Icon, type }
}
