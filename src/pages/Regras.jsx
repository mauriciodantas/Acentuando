import styles from "./Regras.module.css";

const regras = [
  {
    id: "oxitonas",
    titulo: "Oxítonas",
    cor: "#FF6B6B",
    icone: "🎯",
    desc: "São palavras cuja sílaba tônica é a última.",
    quando: "Acentuam-se as oxítonas terminadas em:",
    itens: [
      { regra: "A, E, O (e seus plurais)", exemplo: "sofá, café, avô, cipós" },
      { regra: "EM, ENS", exemplo: "também, armazéns, parabéns" },
    ],
    obs: "Obs: não se acentuam as oxítonas terminadas em i, u (exceto em hiatos).",
  },
  {
    id: "paroxitonas",
    titulo: "Paroxítonas",
    cor: "#4ECDC4",
    icone: "📚",
    desc: "São palavras cuja sílaba tônica é a penúltima.",
    quando: "Acentuam-se as paroxítonas terminadas em:",
    itens: [
      { regra: "L, R, N, X", exemplo: "fácil, açúcar, hífen, tórax" },
      { regra: "I, IS, UM, UNS", exemplo: "táxi, grátis, álbum, fóruns" },
      { regra: "ÃO, ÃS, OEN", exemplo: "órfão, ímãs, hífen" },
      { regra: "PS, Ã", exemplo: "bíceps, ímã" },
    ],
    obs: "Obs: as paroxítonas terminadas em vogal (a, e, o) NÃO são acentuadas.",
  },
  {
    id: "proparoxitonas",
    titulo: "Proparoxítonas",
    cor: "#45B7D1",
    icone: "⭐",
    desc: "São palavras cuja sílaba tônica é a antepenúltima.",
    quando: "Todas as proparoxítonas são acentuadas!",
    itens: [
      { regra: "Sempre acentuadas", exemplo: "música, lâmpada, pássaro" },
      { regra: "Palavras eruditas", exemplo: "único, ômega, êxodo" },
    ],
    obs: "Regra simples: se o acento cai na antepenúltima sílaba, sempre vai acento!",
  },
  {
    id: "hiatos",
    titulo: "Hiatos",
    cor: "#96CEB4",
    icone: "🔗",
    desc: "Hiato é a sequência de duas vogais em sílabas diferentes.",
    quando: "Acentuam-se I e U quando:",
    itens: [
      { regra: "Tônicos e sozinhos na sílaba", exemplo: "saída, baú, país, raízes" },
      { regra: "Seguidos de S mas sozinhos", exemplo: "jesuítas, açaís" },
    ],
    obs: "Não acentua quando o i/u são seguidos de NH ou quando há ditongo antes: feiura.",
  },
  {
    id: "circunflexo",
    titulo: "Acento Circunflexo",
    cor: "#a78bfa",
    icone: "^",
    desc: "Indica vogal tônica fechada (ê, ô) ou nasal (â, ê, î, ô, û).",
    quando: "Usa-se o circunflexo em:",
    itens: [
      { regra: "Vogal fechada tônica", exemplo: "você, avô, lêem" },
      { regra: "Oxítonas em -EM/-ENS", exemplo: "também, parabéns" },
    ],
    obs: "Pelo novo acordo ortográfico, não se usa mais trema (ü) no português brasileiro.",
  },
];

export default function Regras() {
  return (
    <main className={styles.main}>
      <div className={styles.cabecalho}>
        <h1 className={styles.titulo}>Regras de Acentuação</h1>
        <p className={styles.subtitulo}>
          Guia completo e didático das regras do português brasileiro
        </p>
      </div>

      <div className={styles.lista}>
        {regras.map((r) => (
          <div key={r.id} className={styles.cartao} style={{ "--cor": r.cor }}>
            <div className={styles.cabecalhoCartao}>
              <span className={styles.icone}>{r.icone}</span>
              <h2 className={styles.tituloCartao}>{r.titulo}</h2>
            </div>
            <p className={styles.desc}>{r.desc}</p>
            <div className={styles.quando}>{r.quando}</div>
            <ul className={styles.itens}>
              {r.itens.map((item, i) => (
                <li key={i} className={styles.item}>
                  <div className={styles.itemRegra}>{item.regra}</div>
                  <div className={styles.itemExemplo}>
                    Ex: <em>{item.exemplo}</em>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.obs}>{r.obs}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
