import React, { useState, useEffect } from 'react';
import Styles from './subscribe-styles.scss'
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
      userEmailError: validation.validate('userEmail', state.userEmail),
      userNameError: validation.validate('userName', state.userName)
    })
  }, [state.userName, state.userEmail])

  return (
    <div className={Styles.main}>
      <header className={Styles.header}>
        <div className={Styles.container}>
          <img className={Styles.logo} src={logo} alt="theWhiseDev" />
        </div>
      </header>
      <div className={Styles.content}>
        <div className={Styles.container}>
          <div className={Styles.contentRight}>
            <h2 className={Styles.contentTitle}>Uma nova abordagem sobre desenvolvimento</h2>
            <div className={Styles.contentText}>
              <p>Em breve uma nova plataforma para ampliar seus conhecimentos em desenvolvimento de software e web.</p>
            </div>
            <Context.Provider value={{ state, setState }}>
              <form className={Styles.form} action="">
                <h4 className={Styles.title}>Inscreva-se e seja um alpha tester!</h4>
                <div className={Styles.fields}>
                  <Input type="text" className={Styles.input} name="userName" value={state.userName} placeholder="Nome" />
                  <Input type="email" className={Styles.input} name="userEmail" value={state.userEmail} placeholder="Email" />
                </div>
                <Button disabled={!state.validated} className={Styles.submit} type="submit">Cadastrar</Button>
              </form>
            </Context.Provider>
          </div>
          <figure className={Styles.illustration}>
            <img src={wise} alt="the Wise in the beggining of a journey" />
          </figure>
        </div>
      </div>
      <footer className={Styles.footer}>
        <div className={Styles.container}>
          <span className={Styles.tagline}>code wisely</span>
          <span className={Styles.signature}>{`</:{>`}</span>
        </div>
      </footer>
    </div >
  );
}

export default Subscribe
