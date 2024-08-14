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

const CrCo = () => {
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
          <Link to="/Spells/CrCo">
            <button className="tecButton">
              <div>
                <img src={TCr} width="50px" />
                <h2>Creo</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InCo">
            <button className="tecButton">
              <div>
                <img src={TIn} width="50px" />
                <h2>Intellego</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuCo">
            <button className="tecButton">
              <div>
                <img src={TMu} width="50px" />
                <h2>Muto</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/PeCo">
            <button className="tecButton">
              <div>
                <img src={TPe} width="50px" />
                <h2>Perdo</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/ReCo">
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
          <Link to="/Spells/CrAn">
            <button className="formButton">
              <div>
                <img src={FAn} width="50px" />
                <h2>Animal</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/CrAq">
            <button className="formButton">
              <div>
                <img src={FAq} width="50px" />
                <h2>Aquam</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/CrAu">
            <button className="formButton">
              <div>
                <img src={FAu} width="50px" />
                <h2>Auram</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/CrCo">
            <button className="formButton">
              <div>
                <img src={FCo} width="50px" />
                <h2>Corpus</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/CrHe">
            <button className="formButton">
              <div>
                <img src={FHe} width="50px" />
                <h2>Herbam</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/CrIg">
            <button className="formButton">
              <div>
                <img src={FIg} width="50px" />
                <h2>Ignem</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/CrIm">
            <button className="formButton">
              <div>
                <img src={FIm} width="50px" />
                <h2>Imaginem</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/CrMe">
            <button className="formButton">
              <div>
                <img src={FMe} width="50px" />
                <h2>Mentem</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/CrTe">
            <button className="formButton">
              <div>
                <img src={FTe} width="50px" />
                <h2>Terram</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/CrVi">
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
        <b>Página: 183</b>
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
              <b>LVL 1: </b> Conceder um bônus de Recuperação de +1 a um
              personagem.
            </p>
            <p>
              <b>LVL 2: </b> Conceder um bônus de Recuperação de +3 a um
              personagem, ou Impedir que um cadáver apodreça.
            </p>
            <p>
              <b>LVL3: </b> Conceder um bônus de Recuperação de +6 a um
              personagem, ou Impedir que todos os ferimentos de um personagem
              infeccionem ou piorem.
            </p>
            <p>
              <b>LVL 4: </b> Conceder um bônus de Recuperação de +9 a um
              personagem.
            </p>
            <p>Conceder um bônus de Recuperação de +12 a um personagem.</p>
            <p>Criar um corpo humano inteiro.</p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(10)}>
              LVL 10
            </button>
          </td>
          <td className="effectTxt">
            <p>Conceder um bônus de Recuperação de +15 a um personagem.</p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(15)}>
              LVL 15
            </button>
          </td>
          <td className="effectTxt">
            <p>Curar um Ferimento Leve.</p>
            <p>Conceder um bônus de Recuperação de +18 a um personagem.</p>
            <p>Resolver uma pequena Crise de Envelhecimento.</p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(20)}>
              LVL 20
            </button>
          </td>
          <td className="effectTxt">
            <p>Curar um Ferimento Médio.</p>
            <p>
              Curar os efeitos debilitantes de uma doença, veneno ou ferimento.
            </p>
            <p>Resolver uma Crise de Envelhecimento grave.</p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(25)}>
              LVL 25
            </button>
          </td>
          <td className="effectTxt">
            <p>Curar um Ferimento Grave.</p>
            <p>Restaurar um membro perdido.</p>
            <p>Resolver uma Crise de Envelhecimento perigosa.</p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(30)}>
              LVL 30
            </button>
          </td>
          <td className="effectTxt">
            <p>Curar um Ferimento Incapacitante.</p>
            <p>
              Aumentar uma das características físicas de um personagem em um
              ponto, até o máximo de 0.
            </p>
            <p>
              Fazer com que uma pessoa atinja a maturidade física em apenas um
              dia ou noite. Este amadurecimento acelerado só acon- tece enquanto
              a magia está ativa e para obter o efeito completo é necessário
              conjurar a magia no começo do dia ou noite. O alvo da magia não
              aprende nada enquanto está sob influência da magia. Considere que
              a maturidade física de um corpo seja o equivalente a
              aproximadamente 20 anos de idade.
            </p>
            <p>Resolver uma Crise de Envelhecimento crítica.</p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(35)}>
              LVL 35
            </button>
          </td>
          <td className="effectTxt">
            <p>Curar todos os Ferimentos.</p>
            <p>Resolver uma Crise de Envelhecimento terminal</p>
            <p>
              Aumentar uma das características físicas de um personagem em um
              ponto, até o máximo de +1.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(40)}>
              LVL 40
            </button>
          </td>
          <td className="effectTxt">
            <p>
              Aumentar uma das características físicas de um personagem em um
              ponto, até o máximo de +2.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(45)}>
              LVL 45
            </button>
          </td>
          <td className="effectTxt">
            <p>
              Aumentar uma das características físicas de um personagem em um
              ponto, até o máximo de +3.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(50)}>
              LVL 50
            </button>
          </td>
          <td className="effectTxt">
            <p>
              Aumentar uma das características físicas de um personagem em um
              ponto, até o máximo de +4.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(55)}>
              LVL 55
            </button>
          </td>
          <td className="effectTxt">
            <p>
              Aumentar uma das características físicas de um personagem em um
              ponto, até o máximo de +5. Este é o limite natural do corpo humano
              e aumentos maiores só podem ser feitos com Muto Corpus.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(70)}>
              LVL 70
            </button>
          </td>
          <td className="effectTxt">
            <p>
              Levantar os mortos, de certa maneira. (veja Semblante da Vida
              Renovada (CrCo 75))
            </p>
          </td>
        </tr>
      </div>
      {/*FIMCONTAINER EFEITOS*/}

      {/*INÍCIO CONTAINER GUIDELINES*/}
      <div className="guideTxt">
        <h1 className="guideTitle">Guidelines - Creo Corpus</h1>
        <div className="guideContent">
          <p className="guideContenttxt">
          <b>Diversas magias Creo Corpus são mais úteis como rituais. A não ser
            que a descrição da magia seja diferente, qualquer magia Creo Corpus
            que não seja um ritual de Duração: Momentânea simplesmente deixa o
            processo de cura em suspensão, e ao final da duração da magia os
            ferimentos voltam aos seus estados originais, antes da magia ser
            con- jurada. A magia Hermética é incapaz de restaurar pontos de
            Fadiga.</b>
          </p>
          <p className="guideContenttxt">
            Uma magia capaz de curar um ferimento também é capaz de curar
            ferimentos menos graves. Uma magia que cura um Ferimento Médio
            também pode ser usada para curar um Ferimento Leve, portanto. No
            entanto, uma magia que cura ferimentos não pode curar doenças e
            vice-versa.
          </p>
          <p className="guideContenttxt">
          <b>As características físicas são Força, Vigor, Destreza e Rapidez e
            elas podem ser afetadas e aprimoradas com magia Corpus.</b>
          </p>
          <p className="guideContenttxt">
          <b> Falhas Críticas CrCo muitas vezes causam novos ferimentos, ao invés
            de curá-los. Magias Creo Animal podem ser usadas como refe- rência
            para criar novas magias Creo Corpus.</b>
          </p>
        </div>
      </div>
      {/*FIM CONTAINER GUIDELINES*/}
    </div>
  );
};

export default CrCo;
