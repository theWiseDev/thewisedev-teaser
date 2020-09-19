import React, { useState, useEffect } from 'react'
import logo from '@/presentation/assets/images/logo.svg'
import wise from '@/presentation/assets/images/illustration.svg'
import { Input, Button, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import Validation from '@/presentation/protocols/validation'
import { Subscribe } from '@/domain/usecases'

type Props = {
  validation: Validation
  subscribe: Subscribe
}

const Subscribe: React.FC<Props> = ({ validation, subscribe }: Props) => {
  const [state, setState] = useState({
    loading: false,
    userEmail: '',
    userEmailError: '',
    userName: '',
    userNameError: '',
    mainError: '',
    success: null
  })

  useEffect(() => {
    setState({
      ...state,
      userEmailError: validation.validate('userEmail', state.userEmail),
      userNameError: validation.validate('userName', state.userName),
    })
  }, [state.userName, state.userEmail])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    setState({ ...state, loading: true })
    try{
      const response = await subscribe.subscribe({ name: state.userName, email: state.userEmail })
      setState({...state, loading: false, success: `Obrigado por se inscrever, ${response.name}`})
    } catch(error){
      console.log(error)
    }
  }

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
            <h2 className="contentTitle">
              Uma nova abordagem sobre desenvolvimento
            </h2>
            <div className="contentText">
              <p>
                Em breve uma nova plataforma para ampliar seus conhecimentos em
                desenvolvimento de software e web.
              </p>
            </div>
            <Context.Provider value={{ state, setState }}>
              <form className="form" onSubmit={handleSubmit}>
                <h4 className="title">Inscreva-se e seja um alpha tester!</h4>
                <div className="fields">
                  <Input
                    type="text"
                    className="input"
                    name="userName"
                    value={state.userName}
                    placeholder="Nome"
                  />
                  <Input
                    type="email"
                    className="input"
                    name="userEmail"
                    value={state.userEmail}
                    placeholder="Email"
                  />
                </div>
                <Button
                  disabled={!!state.userEmailError || !!state.userNameError}
                  type="submit"
                >
                  Cadastrar
                </Button>
                <FormStatus />
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
    </div>
  )
}

export default Subscribe
