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

const CrAn = () => {
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
          <Link to="/Spells/CrAn">
            <button className="tecButton">
              <div>
                <img src={TCr} width="50px" />
                <h2>Creo</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/InAn">
            <button className="tecButton">
              <div>
                <img src={TIn} width="50px" />
                <h2>Intellego</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/MuAn">
            <button className="tecButton">
              <div>
                <img src={TMu} width="50px" />
                <h2>Muto</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/PeAn">
            <button className="tecButton">
              <div>
                <img src={TPe} width="50px" />
                <h2>Perdo</h2>
              </div>
            </button>
          </Link>

          <Link to="/Spells/ReAn">
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
        <b>Página: 164</b>
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
              <b>LVL 1: </b> Dar um bônus de +1 em rolagens de Recuperação para
              um animal.
            </p>
            <p>
              <b>LVL 2: </b> Dar um bônus de +3 em rolagens de Recuperação para
              um animal.
            </p>
            <p>
              <b>LVL3: </b> Dar um bônus de +6 em rolagens de Recuperação para
              um animal.
            </p>
            <p>
              <b>LVL 4: </b> Dar um bônus de +9 em rolagens de Recuperação para
              um animal.
            </p>
            <p>
              Criar um produto animal, como teia de aranha ou lã (note que um
              Indivíduo é um único pelo, uma única pele, ou uma única presa).
            </p>
            <p>Crie um inseto ou outra criatura similar</p>
            <p>
              Dar um bônus de +12 em rolagens de Recuperação para um animal.
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
            <p>Criar o corpo de um animal.</p>
            <p>Criar um pássaro, réptil, peixe ou anfíbio</p>
            <p>
              Dar um bônus de +15 em rolagens de Recuperação para um animal.
            </p>
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
            <p>Dar um bônus de +18 em rolagens de Recuperação pra um animal.</p>
            <p>Criar um mamífero</p>
            <p>
              Fazer um animal atingir a maturidade al ongo de um único dia ou
              noite. Este amadurecimento acelerado só funciona enquanto a magia
              estiver ativa e uma maturação completa requer Duração Sol,
              portanto deve ser conjurada no começo do dia ou da noite.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(20)}>
              LVL 20
            </button>
          </td>
          <td className="effectTxt">
            <p>Curar um Ferimento Médio.</p>Dar um bônus de +18 em rolagens de
            Recuperação pra um animal.<p></p>
            <p>Fazer um animal atingir a maturidade ao longo de duas horas.</p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(25)}>
              LVL 25
            </button>
          </td>
          <td className="effectTxt">
            <p>Impedir o avanço de uma doença</p>
            <p>Curar um Ferimento Grave</p>
            <p>Recuperar um dos sentidos</p>
            <p>Restaurar um membro perdido</p>
            <p>
              Curar uma doença, cancelar seus efeitos (a mão ser que seja um
              Ritual Mágico de Duração: Momentânea isto é o equivalente de
              impedir o progresso da doença).
            </p>
            <p>
              Fazer um animal atingir a maturidade ao longo de dez diâmetros (20
              minutos).
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(30)}>
              LVL 30
            </button>
          </td>
          <td className="effectTxt">
            <p>Curar um Ferimento Incapacitante</p>
            <p>
              Aumentar uma das Características de um animal em 1 ponto, até o
              valor médio para aquele animal, no máximo.
            </p>
            <p>Fazer um animal atingir a maturidade ao longo de um Diâmetro.</p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(35)}>
              LVL 35
            </button>
          </td>
          <td className="effectTxt">
            <p>Curar todos os ferimentos.</p>
            <p>
              Aumentar uma das Características de um animal em 1 ponto, até no
              máximo um ponto acima do valor médio para aquele animal.
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
              Aumentar uma das Características de um animal em 1 ponto, até no
              máximo dois pontos acima do valor médio para aquele animal.
            </p>
            <p>Fazer um animal atingir a maturidade em apenas um momento.</p>
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
              Aumentar uma das Características de um animal em 1 ponto, até no
              máximo três pontos acima do valor médio para aquele animal.
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
              Criar uma besta mágica. Estas magias exigem um requisito Vim, para
              o poder místico do animal e geralmente têm outros requisitos, para
              os poderes da criatura.
            </p>
            <p>
              Aumentar uma das Características de um animal em 1 ponto, até no
              máximo quatro pontos acima do valor médio para aquele animal.
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
              Aumentar uma das Características de um animal em 1 ponto, até no
              máximo cinco pontos acima do valor médio para aquele animal.Este é
              o máximo que pode ser atingido por Creo;mais do que isso foge do
              normal possível para o animal.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button className="effectButton" onClick={() => SetEffectMod(75)}>
              LVL 75
            </button>
          </td>
          <td className="effectTxt">
            <p>Trazer um animal de volta à vida.</p>
          </td>
        </tr>
      </div>
      {/*FIMCONTAINER EFEITOS*/}

      {/*INÍCIO CONTAINER GUIDELINES*/}
      <div className="guideTxt">
        <h1 className="guideTitle">Guidelines - Creo Animal</h1>
        <div className="guideContent">
          <p className="guideContenttxt">
            A maioria das magias Animal não podem ser usadas com{" "}
            <b>Alcance: Pessoal</b> e por isso o nível final será maior do que
            os valores de referência.
          </p>
          <p className="guideContenttxt">
            Quando estiver criando animais mágicos, a Potência Mística da
            criatura não pode ultrapassar o nível da magia e é necessário
            incluir requisitos para poderes especiais (Ignem, por exemplo, caso
            o animal possa cuspir fogo, ou Rego e Mentem caso possa ler mentes).
            É sempre necessário incluir um requisito Vim para a natureza mágicas
            da besta.
          </p>
          <p className="guideContenttxt">
            Para criar produtos animais trabalhados (como couro, peças de carne
            ou tecido) adicione uma magnitude ao nível necessário para cariar
            uma quantidade equivalente de massa não trabalhada. Para criar
            produtos animais trabalhados e processados, como uma jaqueta de
            couro ou uma túnica de lã, adicione duas magnitudes ao nível
            necessário para criar uma quantidade equivalente de massa não
            processada.
          </p>
          <p className="guideContenttxt">
            Para influenciar o comportamento de animais criados, um requisito
            Rego é necessário e o requisito adiciona uma magnitude ao efeito.
            Para outras situações, faça o que parecer mais apropriado.
          </p>
          <p className="guideContenttxt">
            <b>
              Falhas Críticas em Creo Animal geralmente produzem o animal
              errado, ou um animal enraivecido.
            </b>
          </p>
        </div>
      </div>
      {/*FIM CONTAINER GUIDELINES*/}
    </div>
  );
};

export default CrAn;
