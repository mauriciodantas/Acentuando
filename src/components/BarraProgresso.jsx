import styles from "./BarraProgresso.module.css";

export default function BarraProgresso({ atual, total, pontuacao }) {
  const pct = (atual / total) * 100;
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <span className={styles.questao}>
          Questão <strong>{atual}</strong> de <strong>{total}</strong>
        </span>
        <span className={styles.pontos}>
          ⭐ {pontuacao} {pontuacao === 1 ? "ponto" : "pontos"}
        </span>
      </div>
      <div className={styles.trilha}>
        <div className={styles.preenchimento} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
