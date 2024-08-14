import "../../../../public/stylesheet/spellcalc.css";

import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const TwilightCalc = () => {
  let [vigor, setVigor] = useState(0);
  let [concentração, setConcentração] = useState(0);
  let [vim, setVim] = useState(0);
  let [distortLvl, setDistortLvl] = useState(0);
  let [distortGained, setDistortGained] = useState(0);
  let [enigma, setEnigma] = useState(0);
  let [aura, setAura] = useState(0);
  let [inteligencia, setInteligencia] = useState(0);

  let [dice, setDice] = useState(0);
  let [criticalDice, setCriticalDice] = useState(0);
  let [rtd, setRtd] = useState(0);

  let [dadoCompreensao, setDadoCompreensao] = useState(0);
  let [dadoCompreensaoMestre, setDadoCompreensaoMestre] = useState(0);

  let twilightRollRes = "";
  let twilightTime = "";
  let falhaCritica = "";

  let compreensaoFalhaCritica = "";
  let compreensaoFalhaCriticaTime = "";

  let dadoCompreensaoMestreFalhaCritica = "";
  let dadoCompreensaoMestreFalhaCriticaTime = "";

  let newTwilightTime = "";
  let twilightDif =
    inteligencia +
    enigma +
    dadoCompreensao -
    (distortLvl + dadoCompreensaoMestre - enigma);

  function rolld10() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }

  function rolarCrepusculo() {
    setDice(rolld10);
    setCriticalDice(rolld10);
  }

  function rolarCompreensao() {
    setDadoCompreensao(rolld10);
    setDadoCompreensaoMestre(rolld10);
  }

  if (criticalDice == 10) {
    setRtd(Number(rolld10()));
    setCriticalDice(criticalDice + rtd);
  }
  if (criticalDice == 1) {
    falhaCritica = "Falha Crítica!!!";
  }

  if (rtd == 10) {
    setRtd(Number(rolld10()));
    setCriticalDice(criticalDice + 10);
  }

  if (
    vigor + concentração + vim + criticalDice >=
    distortLvl + distortGained + enigma + aura + dice
  ) {
    twilightRollRes =
      "Você retoma o controle de sua magia em até dois minutos (um Diâmetro), mas não há outros efeitos.";
  } else {
    twilightRollRes =
      "Você entra no Crepúsculo Mágico e pode tentar compreender a experiência. Se houver uma Falha Crítica, o magus entra no Crepúsculo e não pode tentar compreender a experiência.";
  }

  if (distortLvl == 1) {
    twilightTime =
      "Em caso de falha na rolagem, você passará 1 Diâmetro (2 minutos) no Crepúsculo.";
  }
  if (distortLvl == 2) {
    twilightTime =
      "Em caso de falha na rolagem, você passará Duas Horas no Crepúsculo.";
  }
  if (distortLvl == 3) {
    twilightTime =
      "Em caso de falha na rolagem, você passará um Sol no Crepúsculo.";
  }
  if (distortLvl == 4) {
    twilightTime =
      "Em caso de falha na rolagem, você passará um Dia (24 horas) no Crepúsculo.";
  }
  if (distortLvl == 5) {
    twilightTime =
      "Em caso de falha na rolagem, você passará uma Lua no Crepúsculo.";
  }
  if (distortLvl == 6) {
    twilightTime =
      "Em caso de falha na rolagem, você passará uma Estação no Crepúsculo.";
  }
  if (distortLvl == 7) {
    twilightTime =
      "Em caso de falha na rolagem, você passará um Ano no Crepúsculo.";
  }
  if (distortLvl == 8) {
    twilightTime =
      "Em caso de falha na rolagem, você passará um Sete Anos no Crepúsculo.";
  }
  if (distortLvl == 9) {
    twilightTime =
      "Em caso de falha na rolagem, você passará um Sete Anos mais 1 Dado Simples de Falha no Crepúsculo.";
  }
  if (distortLvl >= 10) {
    twilightTime =
      "Em caso de falha na rolagem, você passará a eternidade no Crepúsculo Final!";
  }

  if (dadoCompreensao == 1) {
    compreensaoFalhaCritica = "FALHA CRÍTICA!!";
  }

  if (dadoCompreensao == 1) {
    compreensaoFalhaCriticaTime =
      "O tempo que você passa dentro do Crepúsculo aumenta uma magnitude na tabela para cada zero, e você sofre um efeito adverso pela experiência.";
  }

  if (dadoCompreensaoMestre == 1) {
    dadoCompreensaoMestreFalhaCritica = "FALHA CRÍTICA DO MESTRE!!";
  }

  if (dadoCompreensaoMestre == 1) {
    dadoCompreensaoMestreFalhaCriticaTime =
      "Você é bem-sucedido com qualquer rolagem positiva. A Falha Crítica não tem mais nenhum efeito.";
  }

  if (twilightDif <= 1) {
    newTwilightTime = "Você passa o tempo normal no Crepúsculo";
  } else {
    newTwilightTime =
      "Subtraia " + twilightDif + " magnitudes de tempo de Crepúsculo.";
  }

  return (
    <div>
      <div className="twilightDiv">
        <h1>Rolagem VS Crepúsculo</h1>
        <h2>Insira suas Características: </h2>

        <br />

        <div className="twilightRow">
          <div className="twilightComponent">
            <label>
              <h5>Vigor:</h5>
            </label>
            <br />
            <input
              className="twilightInput"
              type="number"
              name="vigor"
              id="inputVigor"
              onChange={(event) => setVigor(Number(event.target.value))}
            />
          </div>

          <div className="twilightComponent">
            <label>
              <h5>Concentração:</h5>
            </label>
            <br />
            <input
              className="twilightInput"
              type="number"
              name="concentração"
              id="inputConcentração"
              onChange={(event) => setConcentração(Number(event.target.value))}
            />
          </div>
        </div>

        <div className="twilightRow">
          <div className="twilightComponent">
            <label>
              <h5>Bônus Vim:</h5>
            </label>
            <br />
            <input
              className="twilightInput"
              type="number"
              name="vim"
              id="inputVim"
              onChange={(event) => setVim(Number(event.target.value))}
            />
          </div>

          <div className="twilightComponent">
            <label>
              <h5>Dis. Atual:</h5>
            </label>
            <br />
            <input
              className="twilightInput"
              type="number"
              name="distortLvl"
              id="inputDistortLvl"
              onChange={(event) => setDistortLvl(Number(event.target.value))}
            />
          </div>
        </div>

        <div className="twilightRow">
          <div className="twilightComponent">
            <label>
              <h5>Dis. Acumulada:</h5>
            </label>
            <br />
            <input
              className="twilightInput"
              type="number"
              name="distortGained"
              id="inputDistortGained"
              onChange={(event) => setDistortGained(Number(event.target.value))}
            />
          </div>

          <div className="twilightComponent">
            <label>
              <h5>Sab. Enigmática:</h5>
            </label>
            <br />
            <input
              className="twilightInput"
              type="number"
              name="distortEnigma"
              id="inputEnigma"
              onChange={(event) => setEnigma(Number(event.target.value))}
            />
          </div>
        </div>

        <div className="twilightRow">
          <div className="twilightComponent">
            <label>
              <h5>Aura:</h5>
            </label>
            <br />
            <input
              className="twilightInput"
              type="number"
              name="distortAura"
              id="inputAura"
              onChange={(event) => setAura(Number(event.target.value))}
            />
          </div>

          <div className="twilightComponent">
            <label>
              <h5>Inteligência:</h5>
            </label>
            <br />
            <input
              className="twilightInput"
              type="number"
              name="inteligencia"
              id="inputInteligencia"
              onChange={(event) => setInteligencia(Number(event.target.value))}
            />
          </div>
        </div>
      </div>
      <br />

      <div className="twilightDiv">
        <button className="twilightButton" onClick={() => rolarCrepusculo()}>
          Evitar Crepúsculo
        </button>
      </div>

      <br />

      <div className="twilightDiv">
        <h1>
          Resultados
          <br />
          <br />
          Jogador: [{vigor + concentração + vim + criticalDice}]
          <br />
          VS
          <br />
          Crespúsculo: [{distortLvl + distortGained + enigma + aura + dice}]
          <br />
          <br />
          <h1>{falhaCritica}</h1>
        </h1>

        <br />

        <h5>{twilightRollRes}</h5>
        <br />
        <h5>{twilightTime}</h5>
      </div>

      <div className="twilightDiv">
        <br />
        <button className="twilightButton" onClick={() => rolarCompreensao()}>
          Compreender Crepúsculo
        </button>
        <br />
      </div>

      <div className="twilightDiv">
        <br />
        <h1 onClick={() => rolarCompreensao()}>Rolagem de Compreensão:</h1>
        <h2>Jogador: {inteligencia + enigma + dadoCompreensao}</h2>
        <h2>VS</h2>
        <h2>Compreensão: {distortLvl + dadoCompreensaoMestre}</h2>
        <br />
        <h1>{compreensaoFalhaCritica}</h1>
        <h5>{compreensaoFalhaCriticaTime}</h5>
        <h2>Dados de Falha: {1 + distortGained}</h2>

        <br />
        <h1>{dadoCompreensaoMestreFalhaCritica}</h1>
        <h5>{dadoCompreensaoMestreFalhaCriticaTime}</h5>
        <br />

        <h5>Em caso de falha, você retornará com efeitos negativos.</h5>
      </div>

      <div>
        <br />
        <h1>Em caso de sucesso na Rolagem de Compreensão:</h1>
        <br />
        <h2>Novo tempo de Crepúsculo:</h2>
        <h3>{newTwilightTime}</h3>
        <h3>Você retornará com um efeito benéfico.</h3>
      </div>
    </div>
  );
};

export default TwilightCalc;
