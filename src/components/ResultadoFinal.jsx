import styles from "./ResultadoFinal.module.css";

function getResultado(pontuacao, total) {
  const pct = pontuacao / total;
  if (pct === 1) return { emoji: "🏆", titulo: "Perfeito!", cor: "#f59f00", msg: "Você acertou tudo! Você é um mestre da acentuação!" };
  if (pct >= 0.75) return { emoji: "🎉", titulo: "Muito bem!", cor: "#51cf66", msg: "Ótimo desempenho! Você conhece bem as regras de acentuação." };
  if (pct >= 0.5) return { emoji: "👍", titulo: "Bom trabalho!", cor: "#4ECDC4", msg: "Você está no caminho certo. Continue praticando!" };
  return { emoji: "📚", titulo: "Continue praticando!", cor: "#ff6b6b", msg: "Revise as regras e tente novamente. Você vai melhorar!" };
}

export default function ResultadoFinal({ pontuacao, total, onReiniciar, onVerRegras }) {
  const { emoji, titulo, cor, msg } = getResultado(pontuacao, total);
  const pct = Math.round((pontuacao / total) * 100);

  return (
    <div className={styles.container}>
      <div className={styles.emoji}>{emoji}</div>
      <h2 className={styles.titulo} style={{ color: cor }}>{titulo}</h2>
      <p className={styles.mensagem}>{msg}</p>

      <div className={styles.placar}>
        <div className={styles.numero} style={{ color: cor }}>
          {pontuacao}<span className={styles.total}>/{total}</span>
        </div>
        <div className={styles.percentual}>{pct}% de acertos</div>
      </div>

      <div className={styles.acoes}>
        <button className={styles.btnPrimario} onClick={onReiniciar}>
          🔄 Tentar Novamente
        </button>
        <button className={styles.btnSecundario} onClick={onVerRegras}>
          📖 Ver Regras
        </button>
      </div>
    </div>
  );
}
