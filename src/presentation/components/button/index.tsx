import React from 'react'
import Styles from './styles.scss'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: string;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (

    <button {...rest} className={Styles.button}>{children}</button>
  );
}

export default Button
