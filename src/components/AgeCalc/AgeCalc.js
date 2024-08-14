import "../../../../public/stylesheet/spellcalc.css";

import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const AgeCalc = () => {
  let [idade, setIdade] = useState(0);
  let [concilioStatus, setConcilioStatus] = useState(0);
  let [ritual, setRitual] = useState(0);
  let [decrepitude, setDecrepitude] = useState(0);

  let idadeMod = Math.ceil(idade / 10);
  let dadoSimples = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

  const [isCheckedRico, setIsCheckedRico] = useState(false);
  const checkHandlerRico = () => {
    setIsCheckedRico(!isCheckedRico);
  };

  const [isCheckedPobre, setIsCheckedPobre] = useState(false);
  const checkHandlerPobre = () => {
    setIsCheckedPobre(!isCheckedPobre);
  };

  let [lifeMod, setLifeMod] = useState(0);
  if (isCheckedRico == true) {
    lifeMod = lifeMod + 2;
  } else lifeMod = lifeMod;

  if (isCheckedPobre == true) {
    lifeMod = lifeMod - 2;
  } else lifeMod = lifeMod;

  let [dice, setDice] = useState(0);
  let [rtd, setRtd] = useState(0);

  function rolld10() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }

  if (dice == 10) {
    setRtd(Number(rolld10()));
    setDice(dice + rtd);
  }

  if (rtd == 10) {
    setRtd(Number(rolld10()));
    setDice(dice + 10);
  }

  let total = dice + idadeMod - lifeMod - concilioStatus - ritual;
  let resTxt = "";
  let crise = dadoSimples + idadeMod + decrepitude;
  let criseTxt = "";

  if (total <= 2) {
    resTxt = "Sem envelhecimento aparente";
  }

  if (total >= 3 && total <= 9) {
    resTxt = "Envelhecimento normal aparente";
  }

  if (total >= 10 && total <= 12) {
    resTxt = "1 Ponto de Envelhecimento em qualquer Característica";
  }

  if (total == 13) {
    resTxt =
      "Quantidade de Pontos de Envelhecimento (em qualquer Característica) para o próximo nível de Decrepitude e Crise";
  }

  if (total == 14) {
    resTxt = "1 Ponto de Envelhecimento em Rapidez";
  }

  if (total == 15) {
    resTxt = "1 Ponto de Envelhecimento em Vigor";
  }

  if (total == 16) {
    resTxt = "1 Ponto de Envelhecimento em Percepção";
  }

  if (total == 17) {
    resTxt = "1 Ponto de Envelhecimento em Presença";
  }

  if (total == 18) {
    resTxt = "1 Ponto de Envelhecimento em Força e Vigor";
  }

  if (total == 19) {
    resTxt = "1 Ponto de Envelhecimento em Destreza e Rapidez";
  }

  if (total == 20) {
    resTxt = "1 Ponto de Envelhecimento em Comunicação e Presença";
  }

  if (total == 21) {
    resTxt = "1 Ponto de Envelhecimento em Inteligência e Percepção";
  }

  if (total >= 22) {
    resTxt =
      "Quantidade de Pontos de Envelhecimento (em qualquer Característica) para o próximo nível de Decrepitude e Crise";
  }

  if (crise <= 8) {
    criseTxt = "De cama por uma semana";
  }
  if (crise >= 9 && crise <= 14) {
    criseTxt = "De cama por uma mês";
  }
  if (crise == 15) {
    criseTxt =
      "Enfermidade leve. Rolagem de Vigor, de Dificuldade 3 (ou ritual CrCo 20) para sobreviver";
  }
  if (crise == 16) {
    criseTxt =
      "Enfermidade moderada. Rolagem de Vigor, de Dificuldade 6 (ou ritual CrCo 25) para sobreviver";
  }
  if (crise == 17) {
    criseTxt =
      "Enfermidade grave. Rolagem de Vigor, de Dificuldade 9, (ou ritual CrCo 30) para sobreviver";
  }
  if (crise == 18) {
    criseTxt =
      "Enfermidade crítica. Rolagem de Vigor, de Dificuldade 12 (ou ritual CrCo 35) para sobre viver";
  }
  if (crise >= 19) {
    8;
    criseTxt = "Enfermidade terminal. Ritual CrCo 40 para sobreviver.";
  }

  return (
    <div>
      <div className="ageDiv">
        <label>
          <h1>Idade:</h1>
        </label>
        <br />
        <input
          type="number"
          name="idade"
          id="inputIdade"
          onChange={(event) => setIdade(Number(event.target.value))}
        />
      </div>

      <br />
      <div className="ageDiv">
        <label>
          <h1>Ritual de Longevidade:</h1>
        </label>
        <br />
        <input
          type="number"
          name="ritual"
          id="inputRitual"
          onChange={(event) => setRitual(Number(event.target.value))}
        />
      </div>

      <br />
      <div className="ageDiv">
        <label>
          <h1>Nível de Decrepitude:</h1>
        </label>
        <br />
        <input
          type="number"
          name="decrepitude"
          id="inputDecrepitude"
          onChange={(event) => setDecrepitude(Number(event.target.value))}
        />
      </div>

      <br />

      <div className="ageDiv">
        <label>
          <h1>Estação do Concílio:</h1>
        </label>
        <br />
        <select
          value={concilioStatus}
          onChange={(event) => setConcilioStatus(Number(event.target.value))}
        >
          <option value="0">Selecione a estação de seu concílio</option>
          <option value="1">
            Concílio Primaverano ou Invernal / Veronino e Outonal Mundanos
          </option>
          <option value="2">Concílio de Veronino ou Outonal</option>
        </select>
        <br />
        <br />
        <div>
          <input
            type="checkbox"
            id="checkbox"
            checked={isCheckedRico}
            onChange={checkHandlerRico}
          />
          <label htmlFor="checkbox">Rico?</label>
          <input
            type="checkbox"
            id="checkbox"
            checked={isCheckedPobre}
            onChange={checkHandlerPobre}
          />
          <label htmlFor="checkbox">Pobre?</label>
        </div>
      </div>

      <br />

      <div className="ageDiv">
        {" "}
        <button className="expButton" onClick={() => setDice(rolld10())}>
          Rolar!
        </button>
      </div>

      <br />

      <div className="ageDiv">
        <h1>Resultado: [{total}]</h1>
        <p>{resTxt}</p>
      </div>

      <br />
      <div className="ageDiv">
        <h1>Crise: [{crise}]</h1>
        <p>{criseTxt}</p>
      </div>
    </div>
  );
};

export default AgeCalc;
