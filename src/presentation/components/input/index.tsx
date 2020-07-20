import React from 'react'
import Styles from './styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWrapper}>
      <input {...props} />
    </div>
  );
}

export default Input
