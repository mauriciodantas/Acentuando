import styles from "./CartaoCategoria.module.css";

export default function CartaoCategoria({ categoria }) {
  return (
    <div className={styles.cartao} style={{ "--cor": categoria.cor }}>
      <div className={styles.icone}>{categoria.icone}</div>
      <h3 className={styles.titulo}>{categoria.titulo}</h3>
      <p className={styles.descricao}>{categoria.descricao}</p>
      <div className={styles.exemplos}>
        {categoria.exemplos.map((ex) => (
          <span key={ex} className={styles.tag}>
            {ex}
          </span>
        ))}
      </div>
    </div>
  );
}
