import styles from './Servicos.module.css';
import ServicoCard from '../components/ServicoCard';
import eletricista from '../images/eletricista.png';
import ti from '../images/ti.png';
import encanador from '../images/encanador.png';
import jardineiro from '../images/jardineiro.png';
import montador from '../images/montador.png';
import pintor from '../images/pintor.png';

function Servicos() {
  return (
    <main className={styles.servicos}>
      <section className={styles.conteudo}>
        <h1>Encontre o serviço que você precisa</h1>

        <p>
          Conectamos você a profissionais autônomos
          de diferentes áreas.
        </p>

        <div className={styles.lista}>
          <ServicoCard
          titulo="Eletricistas"
          descricao="Instalações e reparos elétricos."
          imagem={eletricista}
        />

        <ServicoCard
          titulo="Informática"
          descricao="Suporte e assistência técnica."
          imagem={ti}
        />

        <ServicoCard
          titulo="Encanadores"
          descricao="Manutenção e serviços hidráulicos."
          imagem={encanador}
        />

        <ServicoCard
          titulo="Jardineiros"
          descricao="Cuidados e manutenção de jardins."
          imagem={jardineiro}
        />

        <ServicoCard
          titulo="Montadores"
          descricao="Montagem de móveis."
          imagem={montador}
        />

        <ServicoCard
          titulo="Pintores"
          descricao="Pintura e renovação de ambientes."
          imagem={pintor}
        />
        </div>
      </section>
    </main>
  );
}

export default Servicos;