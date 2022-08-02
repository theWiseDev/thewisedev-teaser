import React from 'react'
import RedventuresLogo from '@/presentation/assets/images/redventures-logo.png'
import HotmartLogo from '@/presentation/assets/images/hotmart-logo.png'
import RocketseatLogo from '@/presentation/assets/images/rocketseat-logo.png'
import RethinkLogo from '@/presentation/assets/images/rethink-logo.png'
import HelpperLogo from '@/presentation/assets/images/helpper-logo.png'
import SomaLogo from '@/presentation/assets/images/soma-logo.png'
import TrioLogo from '@/presentation/assets/images/trio-logo.png'

const WorkshopContact: React.FC = () => {
  return(
    <section className="workshopContact">
      <ul>
        <li className="workshopContact-list">
          <div className="workshopContact-memberBio">
            <p>
              O professor Otávio Lemos, também integrado ao projeto pessoal da plataforma theWiseDev, tem dado inúmeras palestras, workshops e consultorias junto a empresas que prezam por desenvolvimento de software com profissionalismo. Em particular, ele tem falado principalmente sobre Arquitetura de Software (Arquitetura Limpa), Teste de Software e TDD (Test-Driven Development). Se você tem interesse nesse conteúdo, entre em contato por <a href="mailto:otaviolemos@thewisedev.com.br"><strong>aqui</strong></a>.
            </p>
            <p>
              Algumas empresas que já se beneficiaram oficialmente do conteúdo do professor Otávio:
            </p>
          </div>
          <div className="workshopContact-companies">
            <figure>
              <img src={HotmartLogo} alt="Hotmart logo"/>
            </figure>
            <figure>
              <img src={RocketseatLogo} alt="Rocketseat logo"/>
            </figure>
            <figure>
              <img src={RedventuresLogo} alt="Redventures logo"/>
            </figure>
            <figure>
              <img src={HelpperLogo} alt="Helpper Logo"/>
            </figure>
            <figure>
              <img src={SomaLogo} alt="Somagrupo logo"/>
            </figure>
            <figure>
              <img src={TrioLogo} alt="trio logo"/>
            </figure>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default WorkshopContact





