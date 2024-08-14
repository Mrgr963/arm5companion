import "../../../../public/stylesheet/spellcalc.css";

import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

import FAn from "../../../../public/imgs/FAn.png";
import FAq from "../../../../public/imgs/FAq.png";
import FAu from "../../../../public/imgs/FAu.png";
import FCo from "../../../../public/imgs/FCo.png";
import FHe from "../../../../public/imgs/FHe.png";
import FIg from "../../../../public/imgs/FIg.png";
import FIm from "../../../../public/imgs/FIm.png";
import FMe from "../../../../public/imgs/FMe.png";
import FTe from "../../../../public/imgs/FTe.png";
import FVi from "../../../../public/imgs/FVi.png";
import TCr from "../../../../public/imgs/TCr.png";
import TIn from "../../../../public/imgs/TIn.png";
import TMu from "../../../../public/imgs/TMu.png";
import TPe from "../../../../public/imgs/TPe.png";
import TRe from "../../../../public/imgs/TRe.png";

const MuIg = () => {
  let [AlcanceMod, SetAlcanceMod] = useState(0);
  let [AlcanceTxt, SetAlcanceTxt] = useState("Pessoal");

  let [DuracaoMod, SetDuracaoMod] = useState(0);
  let [DuracaoTxt, SetDuracaoTxt] = useState("Momentânea");

  let [AlvoMod, SetAlvoMod] = useState(0);
  let [AlvoTxt, SetAlvoTxt] = useState("Indivíduo-Círculo");

  let [EffectMod, SetEffectMod] = useState(1);

  const setAlcanceTotal = function (x, y) {
    SetAlcanceMod(x);
    SetAlcanceTxt(y);
  };

  const setDuracaoTotal = function (x, y) {
    SetDuracaoMod(x);
    SetDuracaoTxt(y);
  };

  const setAlvoTotal = function (x, y) {
    SetAlvoMod(x);
    SetAlvoTxt(y);
  };

  return (
    <div>
      <div className="resultContainer">
        <h3 className="txtResult">
          Nível da Magia: {AlcanceMod + DuracaoMod + AlvoMod + EffectMod} /{" "}
          {AlcanceTxt} / {DuracaoTxt} / {AlvoTxt}
        </h3>
      </div>

      {/*INÍCIO CONTAINER TÉCNICAS*/}
      <div className="tecContainer">
        <h1 className="tecTitle">Técnicas</h1>
        <div className="tecRow">
          <Link to="/Spells/CrIg">
            <button className="tecButton">
              <div>
                <img src={TCr} width="50px" />
                <h2>Creo</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InIg">
            <button className="tecButton">
              <div>
                <img src={TIn} width="50px" />
                <h2>Intellego</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuIg">
            <button className="tecButton">
              <div>
                <img src={TMu} width="50px" />
                <h2>Muto</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/PeIg">
            <button className="tecButton">
              <div>
                <img src={TPe} width="50px" />
                <h2>Perdo</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/ReIg">
            <button className="tecButton">
              <div>
                <img src={TRe} width="50px" />
                <h2>Rego</h2>
              </div>
            </button>
          </Link>
        </div>
      </div>
      {/*FIM CONTAINER TÉCNICAS*/}

      {/*INÍCIO CONTAINER FORMAS*/}
      <div className="formContainer">
        <h1 className="formTitle">Formas</h1>
        <div className="formRow">
          <Link to="/Spells/MuAn">
            <button className="formButton">
              <div>
                <img src={FAn} width="50px" />
                <h2>Animal</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuAq">
            <button className="formButton">
              <div>
                <img src={FAq} width="50px" />
                <h2>Aquam</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuAu">
            <button className="formButton">
              <div>
                <img src={FAu} width="50px" />
                <h2>Auram</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuCo">
            <button className="formButton">
              <div>
                <img src={FCo} width="50px" />
                <h2>Corpus</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuHe">
            <button className="formButton">
              <div>
                <img src={FHe} width="50px" />
                <h2>Herbam</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuIg">
            <button className="formButton">
              <div>
                <img src={FIg} width="50px" />
                <h2>Ignem</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuIm">
            <button className="formButton">
              <div>
                <img src={FIm} width="50px" />
                <h2>Imaginem</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuMe">
            <button className="formButton">
              <div>
                <img src={FMe} width="50px" />
                <h2>Mentem</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuTe">
            <button className="formButton">
              <div>
                <img src={FTe} width="50px" />
                <h2>Terram</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuVi">
            <button className="formButton">
              <div>
                <img src={FVi} width="50px" />
                <h2>Vim</h2>
              </div>
            </button>
          </Link>
        </div>
      </div>
      {/*FIM CONTAINER FORMAS*/}

      {/*INICIO PAG REF*/}
      <div>
        <b>Página: 201</b>
      </div>
      {/*FIM PAG REF*/}

      {/*INICIO CONTAINER MODS*/}
      <div className="containerMods">
        <div>
          <div>
            <b>ALCANCE:</b>
            <button
              className="modsButton"
              onClick={() => setAlcanceTotal(0, "Pessoal")}
            >
              Pessoal
            </button>
            <button
              className="modsButton"
              onClick={() => setAlcanceTotal(5, "Toque-Olhar")}
            >
              Toque/Olhar
            </button>
            <button
              className="modsButton"
              onClick={() => setAlcanceTotal(10, "Voz")}
            >
              Voz
            </button>
            <button
              className="modsButton"
              onClick={() => setAlcanceTotal(15, "Visão")}
            >
              Visão
            </button>
            <button
              className="modsButton"
              onClick={() => setAlcanceTotal(20, "Conexão Arcana")}
            >
              Conexão Arcana
            </button>
          </div>
        </div>
        <div>
          <div>
            <b>DURAÇÃO:</b>
            <button
              className="modsButton"
              onClick={() => setDuracaoTotal(0, "Momentânea")}
            >
              Momentânea
            </button>
            <button
              className="modsButton"
              onClick={() => setDuracaoTotal(5, "Concentração-Diâmetro")}
            >
              Concentração/Diâmetro
            </button>
            <button
              className="modsButton"
              onClick={() => setDuracaoTotal(10, "Sol-Círculo")}
            >
              Sol/Círculo
            </button>
            <button
              className="modsButton"
              onClick={() => setDuracaoTotal(15, "Lua")}
            >
              Lua
            </button>
            <button
              className="modsButton"
              onClick={() => setDuracaoTotal(25, "Ano")}
            >
              Ano
            </button>
          </div>
        </div>
        <div>
          <div>
            <b>ALVO:</b>
            <button
              className="modsButton"
              onClick={() => setAlvoTotal(0, "Indivíduo-Círculo")}
            >
              Indivíduo/Círculo
            </button>
            <button
              className="modsButton"
              onClick={() => setAlvoTotal(5, "Parte")}
            >
              Parte
            </button>
            <button
              className="modsButton"
              onClick={() => setAlvoTotal(10, "Grupo-Sala")}
            >
              Grupo/Sala
            </button>
            <button
              className="modsButton"
              onClick={() => setAlvoTotal(15, "Estrutura")}
            >
              Estrutura
            </button>
            <button
              className="modsButton"
              onClick={() => setAlvoTotal(20, "Divisa")}
            >
              Divisa
            </button>
          </div>
        </div>
      </div>
      {/*FIM CONTAINER MODS*/}

      {/*INICIO CONTAINER EFEITOS*/}
      <div className="effectsContainer">
        <tr>
          <th className="tableHead">Nível</th>
          <th className="tableHead">Efeito</th>
        </tr>
        <tr></tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(5)}>
              LVL 05
            </button>
          </td>
          <td className="effectTxt">
            <p>
              <b>LVL 1: </b>Transformar uma característica de um fogo, dentro da
              área afetada (fazer um fogo arder mais forte, por exemplo, ou
              produzir mais fumaça).
            </p>
            <p>
              <b>LVL 2: </b>Transformar completamente um fogo em outro tipo de
              fogo (mudar uma ou todas as suas características).
            </p>
            <p>
              <b>LVL 3: </b> Transformar um fogo de maneira pouco antinatural
              (deixar as chamas coloridas, ou com cheiro de rosas, por exemplo).
              Pode exigir requisitos.
            </p>
            <p>
              <b>LVL 4: </b>Transformar um fogo de maneira extremamente
              antinatural (chamas multicoloridas que formam imagens à medida que
              o arder do fogo emite uma música). Frequentemente exige
              requisitos.
            </p>
            <p>
              Transformar um fogo em um exemplo natural de outro elemento, com o
              requisito apropriado.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(10)}>
              LVL 10
            </button>
          </td>
          <td className="effectTxt">
            <p>
              Transformar um fogo em um exemplo antinatural de outro elemento,
              com o requisito apropriado.
            </p>
          </td>
        </tr>
      </div>
      {/*FIMCONTAINER EFEITOS*/}

      {/*INÍCIO CONTAINER GUIDELINES*/}
      <div className="guideTxt">
        <h1 className="guideTitle">Guidelines - Muto Ignem</h1>
        <div className="guideContent">
          <p>
          <b>A intensidade de um fogo também afeta a dificuldade de
            transformá-lo. Para cada cinco pontos acima de +5 de Dano causado
            por um fogo, adicione uma magnitude ao efeito.</b>
          </p>
        </div>
      </div>
      {/*FIM CONTAINER GUIDELINES*/}
    </div>
  );
};

export default MuIg;
