import React, { useContext } from 'react'
import Styles from './styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { errorMessage } = useContext(Context)
  return (
    <div className={Styles.inputWrapper}>
      <input {...props} />
    </div>
  );
}

export default Input
