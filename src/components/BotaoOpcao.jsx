import styles from "./BotaoOpcao.module.css";

export default function BotaoOpcao({ texto, estado, onClick }) {
  // estado: "neutro" | "correta" | "errada" | "correta-nao-selecionada"
  return (
    <button
      className={`${styles.botao} ${styles[estado]}`}
      onClick={onClick}
      disabled={estado !== "neutro"}
    >
      <span className={styles.texto}>{texto}</span>
      {estado === "correta" && <span className={styles.icone}>✓</span>}
      {estado === "errada" && <span className={styles.icone}>✗</span>}
      {estado === "correta-nao-selecionada" && (
        <span className={styles.icone}>✓</span>
      )}
    </button>
  );
}
