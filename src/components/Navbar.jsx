import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        ChamaÊ
      </Link>

      <div className={styles.menu}>
        <Link to="/">Início</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/login">Entrar</Link>
      </div>
    </nav>
  );
}

export default Navbar;