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

const InIm = () => {
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
          <Link to="/Spells/CrIm">
            <button className="tecButton">
              <div>
                <img src={TCr} width="50px" />
                <h2>Creo</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InIm">
            <button className="tecButton">
              <div>
                <img src={TIn} width="50px" />
                <h2>Intellego</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuIm">
            <button className="tecButton">
              <div>
                <img src={TMu} width="50px" />
                <h2>Muto</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/PeIm">
            <button className="tecButton">
              <div>
                <img src={TPe} width="50px" />
                <h2>Perdo</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/ReIm">
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
          <Link to="/Spells/InAn">
            <button className="formButton">
              <div>
                <img src={FAn} width="50px" />
                <h2>Animal</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InAq">
            <button className="formButton">
              <div>
                <img src={FAq} width="50px" />
                <h2>Aquam</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InAu">
            <button className="formButton">
              <div>
                <img src={FAu} width="50px" />
                <h2>Auram</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InCo">
            <button className="formButton">
              <div>
                <img src={FCo} width="50px" />
                <h2>Corpus</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InHe">
            <button className="formButton">
              <div>
                <img src={FHe} width="50px" />
                <h2>Herbam</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InIg">
            <button className="formButton">
              <div>
                <img src={FIg} width="50px" />
                <h2>Ignem</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InIm">
            <button className="formButton">
              <div>
                <img src={FIm} width="50px" />
                <h2>Imaginem</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InMe">
            <button className="formButton">
              <div>
                <img src={FMe} width="50px" />
                <h2>Mentem</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InTe">
            <button className="formButton">
              <div>
                <img src={FTe} width="50px" />
                <h2>Terram</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InVi">
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
        <b>Página: 206</b>
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
              <b>GERAL: </b> Discernir ilusões criadas por magias de nível menor
              ou igual ao nível da magia (Alvo: Visão).
            </p>
            <p>
              <b>LVL 1: </b> Usar um sentido à distância, ou Memorizar ou
              destacar a memória de uma imagem encontrada, ou Discernir as
              ilusões criadas pelo próprio magus.
            </p>
            <p>
              <b>LVL 2: </b> Usar dois sentidos à distância.
            </p>
            <p>
              <b>LVL 3: </b> Usar três sentidos à distância, ou Aprimoramento de
              um aspecto de um sentido (como enxergar claramente à distância, ou
              enxergar no escuro, por exemplo).
            </p>
            <p>
              <b>LVL 4: </b> Usar quatro sentidos à distância.
            </p>
            <p>Usar todos os sentidos à distância.</p>
          </td>
        </tr>
      </div>
      {/*FIMCONTAINER EFEITOS*/}

      {/*INÍCIO CONTAINER GUIDELINES*/}
      <div className="guideTxt">
        <h1 className="guideTitle">Guidelines - Intellego Imaginem</h1>
        <div className="guideContent">
          <p className="guideContenttxt">
          <b>Essas magias são menos relacionadas a ilusões, já que a detecção de
            uma imagem é feita sem qualquer interferência. O que essas magias
            fazem é aumentar os sentidos com imagens (geralmente sonoras ou
            visuais) normalmente indisponíveis.</b>
          </p>
          <p className="guideContenttxt">
            Note que enxergar ou ouvir um lugar, seja no quarto ao lado ou a cem
            quilômetros de distância, não importa se o lugar não tiver luz ou
            sons. Assim como magias CrIm, cada sentido adicional a ser percebido
            aumenta o efeito em uma magnitude.
          </p>
          <p className="guideContenttxt">
          <b>Como a maioria das magias Intellego, Falhas Críticas InIm costumam
            gerar informações falsas.</b>
          </p>
        </div>
      </div>
      {/*FIM CONTAINER GUIDELINES*/}
    </div>
  );
};

export default InIm;
