import { Link } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {

  function fazerLogin(event) {
    event.preventDefault();

    alert('Login realizado com sucesso. Bem-vindo de volta ao ChamaÊ!');
  }

  return (
    <main className={styles.login}>
      <h1>Entre no ChamaÊ</h1>

      <p>Conecte-se à sua conta.</p>

      <form onSubmit={fazerLogin}>
        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" required />

        <label>Senha:</label>
        <input type="password" placeholder="Digite sua senha" required />

        <button type="submit">Entrar</button>
      </form>

      <p>Ainda não tem uma conta?</p>

      <Link to="/cadastro-cliente">
        <button>Cadastre-se como cliente</button>
      </Link>

      <Link to="/cadastro-profissional">
        <button>Cadastre-se como profissional</button>
      </Link>
    </main>
  );
}

export default Login;
