import { FC } from 'react'

import { Container } from './buttonStyle'
import { useButton } from './useButton'

interface IProps {
  name: string
  width?: string
  height?: string
  backgroundColor?: string
  loading?: boolean
}

export const ButtonLoading: FC<IProps> = ({
  name,
  width = '12.63vw',
  height = '60px',
  backgroundColor = '#00fa72',
  loading = false
}) => {
  const { Label, opacity } = useButton(loading, name)

  return (
    <Container
      type="submit"
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      opacity={opacity}
    >
      {typeof Label === 'string' ? (
        Label
      ) : (
        <Label color="#FFFFFF" height={20} width={99} />
      )}
    </Container>
  )
}
