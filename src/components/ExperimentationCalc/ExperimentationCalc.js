import "../../../../public/stylesheet/spellcalc.css";

import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const ExperimentationCalc = () => {
  let [dangerLvl, setDangerLvl] = useState(0);
  let [percepLvl, setPercepLvl] = useState(0);
  let [r1, setR1] = useState(0);
  let [r2, setR2] = useState(0);
  let [r3, setR3] = useState(0);
  let [r4, setR4] = useState(0);
  let [r5, setR5] = useState(0);

  let falhaCritica = "";

  let r1txt = "r1txt";
  let r2txt = "r2txt";
  let r3txt = "r3txt";
  let r4txt = "r4txt";
  let r5txt = "r5txt";

  function rolld10() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }

  function rtd() {
    setR1(Number(rolld10()));
    setR2(Number(rolld10()) + dangerLvl - percepLvl);
    setR3(Number(rolld10()));
    setR4(Number(rolld10()) + dangerLvl);
    setR5(Number(rolld10()) + dangerLvl);
  }

  if (r1 <= 4) {
    r1txt = "Nenhum resultado extraordinário";
  }
  if (r1 == 5 || r1 == 6) {
    r1txt = "Efeito Colateral";
  }
  if (r1 == 7) {
    r1txt = "Nenhum Benefício";
  }
  if (r1 == 8) {
    r1txt = "Fracasso completo!";
  }
  if (r1 == 9) {
    r1txt = "Evento Especial/Aventura!";
  }
  if (r1 == 10) {
    r1txt = "Descoberta!!";
  }
  if (r1 == 11) {
    r1txt = "Efeito Modificado";
  }
  if (r1 == 12) {
    r1txt = "Role mais duas vezes!";
  }

  if (r2 <= 0) {
    r2txt =
      "Você percebe o desastre antes que ele aconteça. A estação ainda está perdida, veja “Fracasso completo.”";
  }
  if (r2 == 1 || r2 == 2) {
    r2txt = "Sua criação é destruida!";
  }
  if (r2 == 3 || r2 == 4) {
    r2txt =
      "Sua criação é destruída, assim como outro item de valor em seu laboratório.";
  }
  if (r2 == 5 || r2 == 6) {
    r2txt =
      "Explosão! Seu equipamento de laboratório está destruído. Role um Dado Simples para cada objeto de valor em seu laboratório. Um resultado de 0 indica que objeto foi destruído. Você sofre uma quantidade de dano igual ao resultado de um Dado Simples + o Nível da Magia formulaica ou Encantamento no qual estava trabalhando.";
  }
  if (r2 == 7 || r2 == 8) {
    r2txt =
      "Seu experimento fracassa de tal maneira que o concílio inteiro está ameaçado, seja por um incêndio, a conjuração de uma grande ameaça, ou qualquer outra calamidade que o narrador possa inventar.";
  }
  if (r2 == 9 || r2 == 10) {
    r2txt =
      "Você acumula um número de Pontos de Distorção igual à quantidade de zeros rolados no Teste de Falha Crítica. Faça uma rolagem para evitar o Crepúsculo Mágico, caso acumule dois ou mais pontos.";
  }
  if (r2 > 10) {
    r2txt = "Role mais duas vezes nesta tabela.";
  }

  if (r3 <= 0) {
    r3txt =
      "Você percebe o desastre antes que ele aconteça. A estação ainda está perdida, veja “Fracasso completo.”";
  }
  if (r3 == 1) {
    r3txt =
      "Sua Insígnia Mística é multiplicada enormemente, tornando-se um aspecto importante do efeito.";
  }
  if (r3 == 2 || r3 == 3) {
    r3txt =
      "O efeito tem algum pequeno defeito. Uma magia que lhe permite comunicar com animais, por exem-plo, pode fazer com que você apresente os sons do animal por algum tempo após seu término.";
  }
  if (r3 == 4 || r3 == 5) {
    r3txt =
      "A magia tem um pequeno efeito colateral. Uma magia para controlar um animal pode fazer com que cresça grama sob as patas da criatura.";
  }
  if (r3 == 6) {
    r3txt =
      "A magia tem um pequeno efeito benéfico. Um vento pode ter aroma agradável, por exemplo, mantendo os insetos afastados.";
  }
  if (r3 == 7) {
    r3txt =
      "A magia tem um grande defeito. Uma magia de cura que inflige dor, por exemplo.";
  }
  if (r3 == 8) {
    r3txt =
      "A magia tem um grande efeito colateral. Uma magia para controlar plantas pode atrair todos os pássaros a cem passos do magus, por exemplo.";
  }
  if (r3 == 9) {
    r3txt =
      "A magia tem um grande efeito benéfico. Uma magia que o transforma em um lobo, por exemplo, pode permitir que se comunique com todos os animais enquanto na forma de lobo.";
  }
  if (r3 == 10) {
    r3txt =
      "A magia tem um defeito crítico. Uma magia de invisibilidade pode fazê-lo brilhar, por exemplo.";
  }

  if (r4 <= 4) {
    r4txt = "Você recebe 15 Pontos de Experiência em Teoria Mágica.";
  }
  if (r4 == 5 || r4 == 6) {
    r4txt =
      "Você recebe 15 Pontos de Experiência em alguma Habilidade relacionada ao experimento.";
  }
  if (r4 == 7 || r4 == 8) {
    r4txt =
      "Você recebe 3 Pontos de Experiência em uma das Artes usadas no experimento.";
  }
  if (r4 == 9) {
    r4txt =
      "Você recebe quantidade de Pontos de Experiência suficiente para subir um Nível em uma das Artes usadas no experimento (ou 3 Pontos de Experiência, o que for maior).";
  }
  if (r4 >= 10) {
    r4txt =
      "Role mais duas vezes nesta tabela, ignorando e re-rolando caso obtenha este resultado novamente.";
  }

  if (r5 <= 3) {
    r5txt =
      "A magia ou efeito tem seu Alcance, Duração, Alvo ou potência diminuída.";
  }
  if (r5 == 4 || r5 == 5 || r5 == 6) {
    r5txt =
      "A magia ou efeito tem seu Alcance, Duração, Alvo ou potência aumentada.";
  }
  if (r5 == 7 || r5 == 8) {
    r5txt =
      "O uso da magia ou efeito é restringido. Pode não funcionar em certas situações, como quando está chovendo, por exemplo.";
  }
  if (r5 == 9 || r5 == 10) {
    r5txt =
      "O efeito mágico em si é modificado. Uma magia formulaica como a Maldição de Circe (página 185) transforma o alvo em um bode, ao invés de um porco.";
  }
  if (r5 >= 11) {
    r5txt =
      "O efeito mágico é completamente alterado, com exceção da Técnica e Forma. O Nível se mantém similar.";
  }

  return (
    <div>
      <div className="ageDiv">
        <label>
          <h1>Percepção:</h1>
        </label>
        <br />
        <input
          type="number"
          name="idade"
          id="inputIdade"
          onChange={(event) => setPercepLvl(Number(event.target.value))}
        />
      </div>

      <div className="dangerLvl">
        <h1>Selecione seu nível de risco:</h1>
        <button onClick={() => setDangerLvl(1)} className="expButton">
          1: Arriscado
        </button>
        <button onClick={() => setDangerLvl(2)} className="expButton">
          2: Brutal
        </button>
        <button onClick={() => setDangerLvl(3)} className="expButton">
          3: Fatal
        </button>

        <br />
        <br />

        <button onClick={() => rtd()} className="rollExpButton">
          Rolar Experimentação
        </button>
      </div>

      <div className="expResContainer">
        <h4>Resultado [{r1}]:</h4>
        <p> {r1txt}</p>
      </div>

      <div className="expResContainer">
        <br />
        <h4>Desastre [{r2}]:</h4>
        <p>{r2txt}</p>
      </div>

      <div className="expResContainer">
        <br />
        <h4>Efeito Colateral [{r3}]:</h4>
        <p>{r3txt}</p>
      </div>

      <div className="expResContainer">
        <br />
        <h4>Descoberta [{r4}]:</h4>
        <p>{r4txt}</p>
      </div>

      <div className="expResContainer">
        <br />
        <h4>Efeito Modificado [{r5}]:</h4>
        <p>{r5txt}</p>
        <br />
      </div>
    </div>
  );
};

export default ExperimentationCalc;
