import React from 'react'
import CAImage from '@/presentation/assets/images/CleanArchitecture.svg'

const CleanArchitecture:React.FC = () => {
  return(
    <section className="cleanArchitecture">
      <figure className="cleanArchitecture-image">
        <h2 className="cleanArchitec">Clean Architecture</h2>
        <img src={CAImage} alt="Clean Architecture diagram"/>
      </figure>
      <div className="cleanArchitecture-content">
        <p>Este website foi desenvolvido utilizando princípios e práticas atemporais de desenvolvimento de software. Entre eles figuram os princípios de projeto S.O.L.I.D., o desenvolvimento guiado por teste (TDD) e a arquitetura limpa (Clean Architecture). A plataforma <strong>theWiseDev</strong> será desenvolvida utilizando os mesmos princípios e práticas, ao mesmo tempo que se propõe a ensiná-los.</p>
        <p>Durante as últimas décadas, viu-se a evolução de um apanhado de ideias importantes sobre Arquitetura de Software, incluindo: a Arquitetura Hexagonal (também conhecida como Ports and Adapters) de Alistair Cockburn, DCI de James Coplien e Trygve Reenskaug, BCE de Ivar Jacobson, entre outros.</p>
        <p>A Clean Architecture é uma proposta de Robert C. Martin - o Uncle Bob - para integrar todas essas arquiteturas em um conceito aplicável. Esse tipo de ideia é um símbolo do que a plataforma theWiseDev se propõe a compartilhar, e provavelmente comporá o primeiro curso que será desenvolvido e lançado em breve na plataforma. Participe da nossa mailing list cadastrando-se acima para receber informações sobre novidades da plataforma!</p>
      </div>
    </section>
  );
}

export default CleanArchitecture
