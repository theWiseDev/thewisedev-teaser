import React from 'react'
import Otavio from '@/presentation/assets/images/Otavio-Lemos.jpg'
import Bruno from '@/presentation/assets/images/Bruno-Scodeler.jpg'
import Adriano from '@/presentation/assets/images/Adriano-Carvalho.jpg'

const Team: React.FC = () => {
  return(
    <section className="team">
      <ul className="teamList">
        <li className="team-member featured">
          <figure className="team-memberImage">
            <img src={Otavio} alt="Otávio Lemos"/>
          </figure>
          <div className="team-memberAbout">
            <div className="team-memberTop">
              <h3 className="team-memberName">Otávio Lemos</h3>
              <nav className="team-memberSocial">
                <a href="https://github.com/otaviolemos" rel="noreferrer nofollow" target="_blank" className="github-icon">Github</a>
                <a href="https://www.linkedin.com/in/otavio-lemos-0271399/" rel="noreferrer nofollow" target="_blank" className="linkedin-icon">Linkedin</a>
              </nav>
            </div>
            <div className="team-memberBio">
              <p>Otávio Lemos é desenvolvedor, pesquisador e professor de computação. Leciona há dez anos na Universidade Federal de São Paulo (UNIFESP), tem mestrado e doutorado pela Universidade de São Paulo (ICMC), e fez pós-doutorado na Universidade da Califórnia em Irvine (UCI). </p>
              <p>Na UCI, o Prof. Otávio trabalhou em diferentes períodos perfazendo aproximadamente dois anos, em colaboração com a renomada pesquisadora Cristina Lopes. Atualmente ele figura como <a href="https://isr.uci.edu/people/researchers" target="_blank" rel="noopener noreferrer">pesquisador associado</a> ao Institute for Software Research.</p>
              <p>Já apresentou seu trabalho de pesquisa no Google, na Carnegie Mellon University (CMU) e na UCI, além de em inúmeros congressos internacionais. </p>
              <p>Em 2019 iniciou seu trabalho na Internet com um canal pessoal no YouTube que cresceu rapidamente. Esse trabalho representa a aproximação do Prof. Otávio com a indústria de desenvolvimento de software, tópico pelo qual é apaixonado e procura se especializar cada vez mais.</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Team
