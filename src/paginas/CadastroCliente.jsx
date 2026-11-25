import styles from './Cadastro.module.css';

function CadastroCliente() {

  function cadastrarCliente(event) {
    event.preventDefault();

    alert('Cadastro realizado com sucesso. Bem-vindo ao ChamaÊ!!');
  }

  return (
    <main className={styles.cadastro}>
      <h1>Cadastro de Cliente</h1>

      <p>Crie sua conta para encontrar os serviços que precisa.</p>

      <form onSubmit={cadastrarCliente}>
        <label>Nome completo:</label>
        <input type="text" placeholder="Digite seu nome" required />

        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" required />

        <label>Telefone:</label>
        <input type="tel" placeholder="Digite seu telefone" required />

        <label>Senha:</label>
        <input type="password" placeholder="Crie uma senha" required />

        <button type="submit">Criar conta</button>
      </form>
    </main>
  );
}

export default CadastroCliente;