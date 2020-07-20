import React from 'react';
import Styles from './subscribe-styles.scss'
import logo from '@/presentation/assets/images/logo.svg'
import wise from '@/presentation/assets/images/illustration.svg'

const Login: React.FC = () => {
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
            <form className={Styles.form} action="">
              <h4 className={Styles.title}>Inscreva-se e seja um alpha tester!</h4>
              <div className={Styles.fields}>
                <div className={Styles.inputWrapper}>
                  <input type="text" className={Styles.input} name="userName" placeholder="Nome" />
                </div>
                <div className={Styles.inputWrapper}>
                  <input type="email" className={Styles.input} name="userEmail" placeholder="Email" />
                </div>
              </div>
              <button className={Styles.button} type="submit">Cadastrar</button>
            </form>
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

export default Login
