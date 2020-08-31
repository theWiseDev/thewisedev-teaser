import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  const { state, setState } = useContext(Context)
  return (
    <button {...rest} className={`button ${state.loading && 'loading'}`}>
      {children}
    </button>
  )
}

export default Button
