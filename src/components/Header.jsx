import styles from "./Header.module.css";

export default function Header({ pagina, onNavegar }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => onNavegar("home")}>
        <span className={styles.logoIcone}>✍️</span>
        <span className={styles.logoTexto}>
          <span className={styles.destaque}>Acen</span>tuando
        </span>
      </div>
      <nav className={styles.nav}>
        <button
          className={`${styles.navBtn} ${pagina === "home" ? styles.ativo : ""}`}
          onClick={() => onNavegar("home")}
        >
          Início
        </button>
        <button
          className={`${styles.navBtn} ${pagina === "exercicios" ? styles.ativo : ""}`}
          onClick={() => onNavegar("exercicios")}
        >
          Exercícios
        </button>
        <button
          className={`${styles.navBtn} ${pagina === "regras" ? styles.ativo : ""}`}
          onClick={() => onNavegar("regras")}
        >
          Regras
        </button>
      </nav>
    </header>
  );
}
