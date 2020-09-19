import React from 'react'
import Otavio from '@/presentation/assets/images/Otavio-Lemos.jpg'
import Bruno from '@/presentation/assets/images/Bruno-Scodeler.jpg'

const Team: React.FC = () => {
  return(
    <section className="team">
      <ul className="teamList">
        <li className="team-member featured">
          <figure className="team-memberImage">
            <img src={Otavio} alt="Otávio Lemos"/>
          </figure>
          <div className="team-memberAbout">
            <h3 className="team-memberName">Otávio Lemos</h3>
            <nav className="team-memberS">
              <a href="https://github.com/otaviolemos" rel="noreferrer nofollow" target="_blank" className="github-icon">Github</a>
              <a href="https://www.linkedin.com/in/otavio-lemos-0271399/" rel="noreferrer nofollow" target="_blank" className="github-icon">Linkedin</a>
            </nav>
            <div className="team-memberBio">
              <p>Otávio Lemos é desenvolvedor, pesquisador e professor de computação. Leciona há dez anos na Universidade Federal de São Paulo (UNIFESP), tem mestrado e doutorado pela Universidade de São Paulo (ICMC), e fez pós-doutorado na Universidade da Califórnia em Irvine (UCI). </p>
              <p>Na UCI, o Prof. Otávio trabalhou em diferentes períodos perfazendo aproximadamente dois anos em colaboração com a renomada pesquisadora Cristina Lopes, onde figura como pesquisador associado ao Institute for Software Research (https://isr.uci.edu/people/researchers). </p>
              <p>Já apresentou seu trabalho de pesquisa no Google, na Carnegie Mellon University (CMU) e na UCI, além de em inúmeros congressos internacionais. </p>
              <p>Em 2019 iniciou seu trabalho na Internet com um canal pessoal no YouTube que cresceu rapidamente. Esse trabalho representa a aproximação do Prof. Otávio com a indústria de desenvolvimento de software, tópico pelo qual é apaixonado e procura se especializar cada vez mais.</p>
            </div>
          </div>
        </li>
        <li className="team-member">
          <figure className="team-memberimage">
            <img src={Bruno} alt="Bruno Scodeler"/>
          </figure>
          <div className="team-memberAbout">
            <h3 className="team-memberName">Bruno Scodeler</h3>
            <nav className="team-memberS">
              <a href="https://github.com/scodeler" rel="noreferrer nofollow" target="_blank" className="github-icon">Github</a>
              <a href="https://www.linkedin.com/in/bruno-scodeler/" rel="noreferrer nofollow" target="_blank" className="github-icon">Linkedin</a>
            </nav>
            <div className="team-memberBio">
              <p>Formado em Design pela ESPM-SP, Sócio do Maquinário - Laboratório Criativo, onde há 9 anos trabalha como UX/UI Designer e Desenvolvedor de Front-end.</p>
            </div>
          </div>
        </li>
        <li className="team-member">
          <figure className="team-memberimage">
            <img src={Bruno} alt="Bruno Scodeler"/>
          </figure>
          <div className="team-memberAbout">
            <h3 className="team-memberName">Adriano</h3>
            <nav className="team-memberS">
              <a href="https://github.com/" rel="noreferrer nofollow" target="_blank" className="github-icon">Github</a>
              <a href="https://www.linkedin.com/" rel="noreferrer nofollow" target="_blank" className="github-icon">Linkedin</a>
            </nav>
            <div className="team-memberBio">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Team
