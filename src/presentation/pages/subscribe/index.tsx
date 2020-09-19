import React, { useState, useEffect } from 'react'
import {Send} from 'react-feather'
import logo from '@/presentation/assets/images/logo.svg'
import wise from '@/presentation/assets/images/illustration.svg'
import { Input, Button, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import Validation from '@/presentation/protocols/validation'
import { Subscribe } from '@/domain/usecases'
import CleanArchitecture from './CleanArchitecture'
import Team from './Team'
import Footer from '@/presentation/components/footer'

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
              Estamos descobrindo maneiras novas e mais efetivas de formar desenvolvedores, formando-nos a nós mesmos e ajudando outros a fazerem o mesmo. 
            </h2>
            <div className="contentText">
              <p>Os cursos superiores de computação ‘tradicionais’ frequentemente sofrem por focar muito em fundamentos e pouco em tecnologias novas. Por outro lado, os bootcamps e cursos técnicos frequentemente sofrem por focar muito em tecnologias novas e pouco em fundamentos. </p>
              <p>Estamos divisando maneiras novas para formar desenvolvedores focando em princípios e práticas atemporais estando ao mesmo tempo em sincronia com as tecnologias de ponta utilizadas na indústria. O objetivo é formar desenvolvedores com uma verdadeira sabedoria dev!</p>
              <p>A plataforma theWiseDev será desenvolvida utilizando esses princípios e práticas atemporais e contando com o auxílio de toda a comunidade dev. Uma plataforma desenvolvida por devs e para devs!</p>
            </div>
            <Context.Provider value={{ state, setState }}>
              <form className="form" onSubmit={handleSubmit}>
                <h4 className="title">Inscreva-se e seja um alpha tester!</h4>
                <div className="form-text">
                  <p>Deixe seu e-mail para ser notificado e receba o nosso exclusivo <a>Poster Clean Architecture</a> em pdf.</p>
                </div>
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
                  Quero meu poster
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
      <CleanArchitecture />
      <Team />
      <Footer />
    </div>
  )
}

export default Subscribe
