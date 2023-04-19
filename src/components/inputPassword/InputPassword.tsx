import { FC, Dispatch, SetStateAction } from 'react'

import { InputBox } from './styles'
import { useInputPassword } from './useInputPassword'

interface IProps {
  placeholder: string
  width?: string
  height?: string
  loading?: boolean
  value: string
  onChange: Dispatch<SetStateAction<string>>
}

export const InputPassword: FC<IProps> = ({
  placeholder,
  width = '53.40vw',
  height = '60px',
  loading = false,
  value,
  onChange
}) => {
  const { backGroundColor, disabled, Icon, setHidden, type } =
    useInputPassword(loading)

  return (
    <InputBox
      width={width}
      height={height}
      backGroundColor={backGroundColor}
      className="input-password-container"
    >
      <input
        type={type}
        placeholder={placeholder}
        required
        disabled={disabled}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <div onClick={() => setHidden(prev => !prev)}>
        <Icon />
      </div>
    </InputBox>
  )
}
