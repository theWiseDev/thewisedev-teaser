import React from 'react'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: string;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (

    <button {...rest} className="button">{children}</button>
  );
}

export default Button
