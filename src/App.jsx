import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Exercicios from "./pages/Exercicios";
import Regras from "./pages/Regras";
import styles from "./App.module.css";

export default function App() {
  const [pagina, setPagina] = useState("home");

  function navegar(destino) {
    setPagina(destino);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={styles.app}>
      <Header pagina={pagina} onNavegar={navegar} />
      <div className={styles.conteudo}>
        {pagina === "home" && <Home onNavegar={navegar} />}
        {pagina === "exercicios" && <Exercicios onNavegar={navegar} />}
        {pagina === "regras" && <Regras />}
      </div>
    </div>
  );
}
