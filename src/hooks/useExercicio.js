import { useState, useCallback } from "react";
import { exercicios } from "../data/exercicios";

export function useExercicio() {
  const [indice, setIndice] = useState(0);
  const [selecionada, setSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [historico, setHistorico] = useState([]);
  const [finalizado, setFinalizado] = useState(false);

  const exercicioAtual = exercicios[indice];
  const total = exercicios.length;
  const respondida = selecionada !== null;
  const acertou = selecionada === exercicioAtual?.correta;

  const responder = useCallback(
    (opcao) => {
      if (respondida) return;
      setSelecionada(opcao);
      const correto = opcao === exercicioAtual.correta;
      if (correto) setPontuacao((p) => p + 1);
      setHistorico((h) => [...h, { id: exercicioAtual.id, correto }]);
    },
    [respondida, exercicioAtual]
  );

  const proxima = useCallback(() => {
    if (indice + 1 >= total) {
      setFinalizado(true);
    } else {
      setIndice((i) => i + 1);
      setSelecionada(null);
    }
  }, [indice, total]);

  const reiniciar = useCallback(() => {
    setIndice(0);
    setSelecionada(null);
    setPontuacao(0);
    setHistorico([]);
    setFinalizado(false);
  }, []);

  return {
    exercicioAtual,
    indice,
    total,
    selecionada,
    respondida,
    acertou,
    pontuacao,
    historico,
    finalizado,
    responder,
    proxima,
    reiniciar,
  };
}
