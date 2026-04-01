import { useExercicio } from "../hooks/useExercicio";
import BarraProgresso from "../components/BarraProgresso";
import BotaoOpcao from "../components/BotaoOpcao";
import ResultadoFinal from "../components/ResultadoFinal";
import styles from "./Exercicios.module.css";

function getEstadoOpcao(opcao, selecionada, correta, respondida) {
  if (!respondida) return "neutro";
  if (opcao === correta) {
    return opcao === selecionada ? "correta" : "correta-nao-selecionada";
  }
  if (opcao === selecionada) return "errada";
  return "neutro";
}

export default function Exercicios({ onNavegar }) {
  const {
    exercicioAtual,
    indice,
    total,
    selecionada,
    respondida,
    acertou,
    pontuacao,
    finalizado,
    responder,
    proxima,
    reiniciar,
  } = useExercicio();

  if (finalizado) {
    return (
      <div className={styles.container}>
        <ResultadoFinal
          pontuacao={pontuacao}
          total={total}
          onReiniciar={reiniciar}
          onVerRegras={() => onNavegar("regras")}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <BarraProgresso atual={indice + 1} total={total} pontuacao={pontuacao} />

        <div className={styles.dicaWrapper}>
          <span className={styles.dica}>💡 {exercicioAtual.dica}</span>
        </div>

        <h2 className={styles.pergunta}>{exercicioAtual.pergunta}</h2>

        <div className={styles.opcoes}>
          {exercicioAtual.opcoes.map((opcao) => (
            <BotaoOpcao
              key={opcao}
              texto={opcao}
              estado={getEstadoOpcao(opcao, selecionada, exercicioAtual.correta, respondida)}
              onClick={() => responder(opcao)}
            />
          ))}
        </div>

        {respondida && (
          <div className={`${styles.feedback} ${acertou ? styles.feedbackCerto : styles.feedbackErrado}`}>
            <div className={styles.feedbackHeader}>
              <span className={styles.feedbackIcone}>{acertou ? "🎉" : "🤔"}</span>
              <strong>{acertou ? "Correto!" : "Quase lá!"}</strong>
            </div>
            <p className={styles.explicacao}>{exercicioAtual.explicacao}</p>
            <button className={styles.btnProxima} onClick={proxima}>
              {indice + 1 < total ? "Próxima questão →" : "Ver resultado 🏆"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
