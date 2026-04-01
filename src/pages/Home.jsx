import CartaoCategoria from "../components/CartaoCategoria";
import { categorias } from "../data/exercicios";
import styles from "./Home.module.css";

export default function Home({ onNavegar }) {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>🇧🇷 Português Brasileiro</div>
        <h1 className={styles.heroTitulo}>
          Aprenda <span className={styles.destaque}>acentuação</span>
          <br />
          de um jeito divertido!
        </h1>
        <p className={styles.heroDesc}>
          Pratique as regras de acentuação do português com exercícios
          interativos, dicas claras e feedback instantâneo.
        </p>
        <div className={styles.heroBtns}>
          <button
            className={styles.btnPrimario}
            onClick={() => onNavegar("exercicios")}
          >
            Começar Exercícios 🚀
          </button>
          <button
            className={styles.btnSecundario}
            onClick={() => onNavegar("regras")}
          >
            Ver as Regras 📖
          </button>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <strong>8</strong>
            <span>exercícios</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <strong>4</strong>
            <span>categorias</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <strong>∞</strong>
            <span>aprendizado</span>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>O que você vai aprender</h2>
        <p className={styles.secaoDesc}>
          Explore as principais regras de acentuação do português
        </p>
        <div className={styles.grid}>
          {categorias.map((cat) => (
            <CartaoCategoria key={cat.id} categoria={cat} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitulo}>Pronto para o desafio?</h2>
          <p className={styles.ctaDesc}>
            Teste seus conhecimentos e veja quantos acertos você consegue!
          </p>
          <button
            className={styles.btnPrimario}
            onClick={() => onNavegar("exercicios")}
          >
            Iniciar Agora ✨
          </button>
        </div>
      </section>
    </main>
  );
}
