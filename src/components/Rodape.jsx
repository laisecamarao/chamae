import styles from './Rodape.module.css';
import barrafooter from '../images/barrafooter.png';

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <img src={barrafooter} alt="Barra ChamaÊ" />

      <p>© 2026 ChamaÊ. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Rodape;