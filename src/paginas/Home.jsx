import styles from './Home.module.css';
import folha from '../images/folha.png';
import logochamae from '../images/logochamae.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        
        <div className={styles.logoHome}>
          <img src={folha} alt="" className={styles.folha} />
          <h1>Se precisar, ChamaÊ!</h1>
        </div>
        <p>
          Conectando o cliente e o serviço de forma rápida.
        </p>

        <Link to="/servicos">
          <button>Encontrar serviços</button>
        </Link>
        <div>
          <img src={logochamae} alt="" className={styles.logochamae} />
        </div>
      </section>
    </main>
  );
}

export default Home;