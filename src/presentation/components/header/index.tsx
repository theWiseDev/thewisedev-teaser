import React from 'react'
import logo from '@/presentation/assets/images/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="theWhiseDev" />
      <nav className="socialNav">
        <a href="https://github.com/theWiseDev" target="_blank" rel="noopener noreferrer" className="github-icon">Github</a>
        <a href="https://www.youtube.com/user/OtavioALLemos" target="_blank" rel="noopener noreferrer" className="youtube-icon">Youtube</a>
        <a href="https://www.instagram.com/theWiseDev/" target="_blank" rel="noopener noreferrer" className="instagram-icon">instagram</a>
      </nav>
    </header>
  )
}

export default Header
