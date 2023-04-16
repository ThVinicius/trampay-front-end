import { Dispatch, FC, SetStateAction } from 'react'

import { Container } from './inputStyle'
import { useInput } from './useInput'

interface IProps {
  type?: string
  placeholder: string
  disabled?: boolean
  value: string
  onChange: Dispatch<SetStateAction<string>>
}

export const Input: FC<IProps> = ({
  type = 'text',
  placeholder,
  disabled = false,
  value,
  onChange
}) => {
  const { backGroundColor } = useInput(disabled)

  return (
    <Container
      backGroundColor={backGroundColor}
      type={type}
      placeholder={placeholder}
      required
      disabled={disabled}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
