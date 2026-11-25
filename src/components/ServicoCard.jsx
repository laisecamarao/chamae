import styles from './ServicoCard.module.css';

function ServicoCard({ titulo, descricao, imagem }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} className={styles.imagem} />

      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}

export default ServicoCard;