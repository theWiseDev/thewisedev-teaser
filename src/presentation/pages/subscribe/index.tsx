import React, { useState, useEffect } from 'react';
import logo from '@/presentation/assets/images/logo.svg'
import wise from '@/presentation/assets/images/illustration.svg'
import { Input, Button } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import Validation from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Subscribe: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    loading: false,
    validated: false,
    userEmail: '',
    userEmailError: 'Campo Obrigatório',
    userName: '',
    userNameError: 'Campo Obrigatório'
  })

  useEffect(() => {
    setState({
      ...state,
      // userEmailError: validation.validate('userEmail', state.userEmail),
      // userNameError: validation.validate('userName', state.userName)
    })
  }, [state.userName, state.userEmail])

  return (
    <div className="main">
      <header className="header">
        <div className="container">
          <img className="logo" src={logo} alt="theWhiseDev" />
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="contentRight">
            <h2 className="contentTitle">Uma nova abordagem sobre desenvolvimento</h2>
            <div className="contentText">
              <p>Em breve uma nova plataforma para ampliar seus conhecimentos em desenvolvimento de software e web.</p>
            </div>
            <Context.Provider value={{ state, setState }}>
              <form className="form" action="">
                <h4 className="title">Inscreva-se e seja um alpha tester!</h4>
                <div className="fields">
                  <Input type="text" className="input" name="userName" value={state.userName} placeholder="Nome" />
                  <Input type="email" className="input" name="userEmail" value={state.userEmail} placeholder="Email" />
                </div>
                <Button disabled={!state.validated} className="submit" type="submit">Cadastrar</Button>
              </form>
            </Context.Provider>
          </div>
          <figure className="illustration">
            <img src={wise} alt="the Wise in the beggining of a journey" />
          </figure>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <span className="tagline">code wisely</span>
          <span className="signature">{`</:{>`}</span>
        </div>
      </footer>
    </div >
  );
}

export default Subscribe
