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

const InVi = () => {
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
        <b>Página: 225</b>
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
              <b>LVL 1: </b> Detectar magias de décima magnitude ou superior, ou
              Detectar a presença de vis. Como é mágica concentrada, vis não é
              difícil de detectar. Detectar a presença de uma aura mística, ou
            </p>
            <p>
              <b>LVL 2: </b>Detectar magias de oitava magnitude ou superior, ou
              Determinar a potência de uma aura mística.
            </p>
            <p>
              <b>LVL 3: </b> Detectar magias de sexta magnitude ou superior, ou
              Detectar as fronteiras entre Regiones. Se conjurado com Alvo:
              Visão confere informações suficientes para achar um caminho entre
              diferentes níveis (no caso de Regiones com mais de um nível). Caso
              contrário, a magia detecta a presença de um régio e talvez seu
              formato aproximado.
            </p>
            <p>
              <b>LVL 4: </b> Detectar magias de terceira magnitude ou superior,
              ou Determinar a quantidade de vis presente em algo, ou Discernir a
              Arte associada a uma quantidade de vis.
            </p>
            <p>Detectar qualquer magia ativa.</p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(10)}>
              LVL 10
            </button>
          </td>
          <td className="effectTxt">
            <p>Detectar traços de magias poderosas.</p>
            <p>Detectar a presença recente de magias fracas.</p>
          </td>
        </tr>
      </div>
      {/*FIMCONTAINER EFEITOS*/}

      {/*INÍCIO CONTAINER GUIDELINES*/}
      <div className="guideTxt">
        <h1 className="guideTitle">Guidelines - Intellego Vim</h1>
        <div className="guideContent">
          <p className="guideContenttxt">
            Como a magia é algo difícil de compreender, as magias que a detectam
            são ao mesmo tempo difíceis e extremamente importantes. Embora os
            demônios lidem com Vim, eles são feitos da própria essência da
            mentira. Se um demônio não deseja ser detectado, ele não o será
            (pelo menos até onde sabem os magi Herméticos) e, por essa razão,
            não há magias que localizem demônios. Itens mágicos não podem ser
            investigados com magia formulaica. A investigação exige que você
            gaste pelo menos uma estação no laboratório para descobrir os
            encantamentos imbuídos em um item (veja o capítulo Laboratório). Uma
            magia é suficiente para determinar que um item é mágico, no entanto,
            e pode dar uma ideia de seus poderes. Magias são incapazes de
            determinar como ativar ou usar objetos encantados.
          </p>{" "}
          <p className="guideContenttxt">
            Cada magnitude adicional a partir de 15 confere maior sensibilidade
            a resíduos mágicos. O nível básico de uma magia também oferece uma
            ideia da força da magia (para cada magnitude). É possível também
            adicionar uma magnitude para determinar se o efeito é Hermético, e
            um magus familiarizado com outros tipos de magia é capaz de
            identificá-los da mesma maneira. A adição de duas magnitudes fornece
            informações sobre a Técnica e Forma, ou o equivalente mais próximo
            para outros tipos de magia. Aumentos adicionais no nível produzem
            mais informações, dependendo do design da magia específica.
          </p>{" "}
          <p className="guideContenttxt">
            Magias diferentes podem ser inventadas para detectar efeitos
            Feéricos, Divinos ou Infernais. Cada magia afeta apenas um reino e
            narra- dores podem não permitir magias para detectar o Divino ou
            Infernal.
          </p>{" "}
          <p className="guideContenttxt">
            Como regra geral, os resíduos de magia declinam da seguinte forma:
            assim que a magia termina, a magnitude é reduzida pela metade. Em
            seguida, cai por um para cada duração da magia que passa. Os
            narradores devem usar isso como um guia e não uma fórmula rígida e
            podem permitir que magias de detecção de alto nível captem resíduos
            com “magnitude negativa”, caso desejem.
          </p>{" "}
          <p className="guideContenttxt">
            Objetos encantados têm uma magnitude de resíduo efetiva igual ao
            número de peões de vis usados para abrir o encantamento (ou a
            quanti- dade total de peões usados, no caso de encantamentos
            inferiores). Magnitudes de itens não Herméticos devem ser
            determinadas pelo narrador.
          </p>{" "}
          <p className="guideContenttxt">
            Uma magia para detectar itens não detecta efeitos ou criaturas e
            vice-versa. Variantes detectam objetos encantados por diferentes
            Reinos, como descrito acima.
          </p>{" "}
          <p className="guideContenttxt">
          <b>Criaturas mágicas também podem ser detectadas. Considere a Potência
            como o nível do efeito; para magi Herméticos use a arte mais alta.
            Divida a Potência ou Arte mais alta em cinco (arredondando para
            cima) para obter a magnitude efetiva do resíduo. Assim como nos
            casos anteriores, uma magia diferente é necessária e as variantes
            podem detectar Fadas e possivelmente criaturas Divinas. Demônios po-
            dem não ser detectados. Narradores podem, a seu critério, permitir
            magias que detectam criaturas associadas ao Infernal, como
            diabolistas e mortos-vivos, que não sejam demônios efetivamente.</b>
          </p>{" "}
          <p className="guideContenttxt">
            Vis bruto é detectado como mágico sob qualquer detecção mágica. O
            nível da magia de detecção é irrelevante, assim como o domínio do
            poder que foi projetado para detectar. No entanto, somente magias
            especialmente projetadas produzirão qualquer informação além do fato
            de que se trata de vis bruto.
          </p>{" "}
          <p className="guideContenttxt">
          <b>Falhas Críticas InVi normalmente produzem informações falsas.</b>
          </p>{" "}
        </div>
      </div>
      {/*FIM CONTAINER GUIDELINES*/}
    </div>
  );
};

export default InVi;
