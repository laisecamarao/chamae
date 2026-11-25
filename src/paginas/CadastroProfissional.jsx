import styles from './Cadastro.module.css';

function CadastroProfissional() {

  function cadastrarProfissional(event) {
    event.preventDefault();

    alert('Cadastro realizado com sucesso. Bem-vindo ao ChamaÊ!!');
  }

  return (
    <main className={styles.cadastro}>
      <h1>Cadastro de Profissional</h1>

      <p>Cadastre-se para oferecer seus serviços no ChamaÊ.</p>

      <form onSubmit={cadastrarProfissional}>
        <label>Nome completo:</label>
        <input type="text" placeholder="Digite seu nome" required />

        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" required />

        <label>Telefone:</label>
        <input type="tel" placeholder="Digite seu telefone" required />

        <label>Área de atuação:</label>
        <select required>
          <option value="">Selecione seu serviço</option>
          <option>Eletricista</option>
          <option>Encanador</option>
          <option>Pintor</option>
          <option>Jardineiro</option>
          <option>Informática</option>
          <option>Montador de móveis</option>
          <option>Outro</option>
        </select>

        <label>Senha:</label>
        <input type="password" placeholder="Crie uma senha" required />

        <button type="submit">Criar conta</button>
      </form>
    </main>
  );
}

export default CadastroProfissional;