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

const MuVi = () => {
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
          <Link to="/Spells/CrVi">
            <button className="tecButton">
              <div>
                <img src={TCr} width="50px" />
                <h2>Creo</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InVi">
            <button className="tecButton">
              <div>
                <img src={TIn} width="50px" />
                <h2>Intellego</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuVi">
            <button className="tecButton">
              <div>
                <img src={TMu} width="50px" />
                <h2>Muto</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/PeVi">
            <button className="tecButton">
              <div>
                <img src={TPe} width="50px" />
                <h2>Perdo</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/ReVi">
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
        <b>Página: 227</b>
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
              <b>GERAL: </b> Alterar superficialmente uma magia de nível menor
              ou igual a duas vezes (nível + 1 magnitude) da magia MuVi. O
              efeito primário e a magnitude da magia alvo não podem ser
              alterados, ou Alterar significativamente uma magia de nível menor
              ou igual a (nível + 1 magnitude) da magia MuVi. A Técnica e a
              Forma da magia alvo não podem ser alteradas. Uma mudança de mais
              ou menos uma magnitude é uma mudança significativa, assim como uma
              mudança de alvo, caso o alvo ainda seja possível para a magia
              original, ou Alterar completamente uma magia de nível menor ou
              igual a metade do (nível + 1 magnitude) da magia MuVi. A Técnica e
              a Forma podem ser ambos alterados, sem a necessidade de
              requisitos. A magia MuVi afeta a estrutura da magia e não as
              coisas que a magia alveja. Uma mudança de até duas magnitudes é
              uma mudança total. Qualquer mudança maior requer Creo ou Perdo
              para criar ou destruir energia mágica, de acordo com a
              necessidade.
            </p>
          </td>
        </tr>
      </div>
      {/*FIMCONTAINER EFEITOS*/}

      {/*INÍCIO CONTAINER GUIDELINES*/}
      <div className="guideTxt">
        <h1 className="guideTitle">Guidelines - Muto Vim</h1>
        <div className="guideContent">
          <p className="guideContenttxt">
            Essas magias permitem que você altere outras magias. A maioria das
            magias Muto Vim duram tanto quanto a magia que elas alteraram, com
            uma duração nominal Momentânea. Normalmente não é possível ter uma
            magia Muto Vim que dura mais do que a magia alvo. Essas magias
            meta-mágicas têm certas restrições especiais, que se aplicam a todas
            as magias Muto Vim inventadas de acordo com a Teoria Hermética. Em
            primeiro lugar, elas não podem ser conjuradas em magias espontâneas.
            Tal mágica está sendo manipulada no calor do momento e qualquer
            tentativa de alterá-la ainda mais faria com que o magus perdesse o
            controle (isso é necessário para o equilíbrio do jogo.).
          </p>
          <p className="guideContenttxt">
            Em segundo lugar, o magus deve fazer uma rolagem de Inteligência +
            Concentração, de Dificuldade 9, se estiver conjurando ambas as
            magias (isto é, a magia MuVi e a magia que está sendo afetada). Em
            caso de falha as magias não funcionam. Uma Falha Crítica se estende
            para ambas as magias (isso é um pouco mais fácil de acontecer do que
            uma Falha Crítica normal).
          </p>
          <p className="guideContenttxt">
            Se o magus desejar conjurar uma dessas magias em uma magia sendo
            conjurada por outro magus, eles devem estar cooperando – ou a magia
            MuVi deve ser conjurada de maneira acelerada. Não há outra maneira
            de acertar o timing. Além disso, seu total de Penetração para a
            magia Muto Vim deve superar o total de Penetração de outros magi
            para que a magia seja alterada, a menos que vocês estejam
            cooperando. O Alcance: Toque é suficiente para afetar suas próprias
            magias, mas Alcance: Voz (ou superior) é necessário para afetar a
            conjuração de outro magus.
          </p>
          <p className="guideContenttxt">
            Essas magias só podem ser usadas sobre magia Hermética, pois
            dependem de uma boa compreensão dos processos envolvidos. Objetos
            encantados só podem ter efeitos MuVi sobre outros efeitos imbuídos
            no mesmo objeto. Todas as magias Muto Vim requerem certo grau de
            adaptação de acordo com o caso específico e efeitos de encantamentos
            não podem ser adaptados.
          </p>
          <p className="guideContenttxt">
            Note que uma magia inventada de acordo com uma das diretrizes abaixo
            sempre mudará outra magia de uma maneira específica: não é possível
            inventar uma única magia que mude outra magia de qualquer maneira
            desejada. Veja a lista de efeitos exemplares para ter uma ideia do
            quão específicas as alterações devem ser.
          </p>
          <p className="guideContenttxt">
            Não é possível, por razões que os teóricos Herméticos não
            compreendem completamente, usar Muto Vim para afetar outra magia
            depois de ter sido conjurada.
          </p>
          <p className="guideContenttxt">
          <b>Falhas Críticas MuVi podem ter qualquer efeito concebível, pois
            alteram outras magias de formas imprevisíveis.</b>
          </p>
          <p className="guideContenttxt">
          <b>Magias MuVi, como qualquer outra magia Muto, só podem alterar seus
            alvos enquanto estiverem ativas. A duração deve ser pelo menos tão
            longa quanto a magia alvo, portanto. As magias abaixo têm Duração:
            Momentânea, mas versões com durações mais longas podem ser
            inventadas normalmente.</b>
          </p>
        </div>
      </div>
      {/*FIM CONTAINER GUIDELINES*/}
    </div>
  );
};

export default MuVi;
