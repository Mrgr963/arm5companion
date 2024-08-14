import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";

import TwilightCalc from "./TwilightCalc/TwilightCalc";
import ExperimentationCalc from "./ExperimentationCalc/ExperimentationCalc";
import AgeCalc from "./AgeCalc/AgeCalc";

import CrAn from "./Spells/An/CrAn";
import InAn from "./Spells/An/InAn";
import MuAn from "./Spells/An/MuAn";
import PeAn from "./Spells/An/PeAn";
import ReAn from "./Spells/An/ReAn";

import CrAq from "./Spells/Aq/CrAq";
import InAq from "./Spells/Aq/InAq";
import MuAq from "./Spells/Aq/MuAq";
import PeAq from "./Spells/Aq/PeAq";
import ReAq from "./Spells/Aq/ReAq";

import CrAu from "./Spells/Au/CrAu";
import InAu from "./Spells/Au/InAu";
import MuAu from "./Spells/Au/MuAu";
import PeAu from "./Spells/Au/PeAu";
import ReAu from "./Spells/Au/ReAu";

import CrCo from "./Spells/Co/CrCo";
import InCo from "./Spells/Co/InCo";
import MuCo from "./Spells/Co/MuCo";
import PeCo from "./Spells/Co/PeCo";
import ReCo from "./Spells/Co/ReCo";

import CrHe from "./Spells/He/CrHe";
import InHe from "./Spells/He/InHe";
import MuHe from "./Spells/He/MuHe";
import PeHe from "./Spells/He/PeHe";
import ReHe from "./Spells/He/ReHe";

import CrIg from "./Spells/Ig/CrIg";
import InIg from "./Spells/Ig/InIg";
import MuIg from "./Spells/Ig/MuIg";
import PeIg from "./Spells/Ig/PeIg";
import ReIg from "./Spells/Ig/ReIg";

import CrIm from "./Spells/Im/CrIm";
import InIm from "./Spells/Im/InIm";
import MuIm from "./Spells/Im/MuIm";
import PeIm from "./Spells/Im/PeIm";
import ReIm from "./Spells/Im/ReIm";

import CrMe from "./Spells/Me/CrMe";
import InMe from "./Spells/Me/InMe";
import MuMe from "./Spells/Me/MuMe";
import PeMe from "./Spells/Me/PeMe";
import ReMe from "./Spells/Me/ReMe";

import CrTe from "./Spells/Te/CrTe";
import InTe from "./Spells/Te/InTe";
import MuTe from "./Spells/Te/MuTe";
import PeTe from "./Spells/Te/PeTe";
import ReTe from "./Spells/Te/ReTe";

import CrVi from "./Spells/Vi/CrVi";
import InVi from "./Spells/Vi/InVi";
import MuVi from "./Spells/Vi/MuVi";
import PeVi from "./Spells/Vi/PeVi";
import ReVi from "./Spells/Vi/ReVi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/TwilightCalc",
        element: <TwilightCalc />,
      },
      {
        path: "/ExperimentationCalc",
        element: <ExperimentationCalc />,
      },
      {
        path: "/AgeCalc",
        element: <AgeCalc />,
      },
      {
        path: "/Spells/CrAn",
        element: <CrAn />,
      },
      {
        path: "/Spells/InAn",
        element: <InAn />,
      },
      {
        path: "/Spells/MuAn",
        element: <MuAn />,
      },
      {
        path: "/Spells/PeAn",
        element: <PeAn />,
      },
      {
        path: "/Spells/ReAn",
        element: <ReAn />,
      },
      {
        path: "/Spells/CrAq",
        element: <CrAq />,
      },
      {
        path: "/Spells/InAq",
        element: <InAq />,
      },
      {
        path: "/Spells/MuAq",
        element: <MuAq />,
      },
      {
        path: "/Spells/PeAq",
        element: <PeAq />,
      },
      {
        path: "/Spells/ReAq",
        element: <ReAq />,
      },
      {
        path: "/Spells/CrAu",
        element: <CrAu />,
      },
      {
        path: "/Spells/InAu",
        element: <InAu />,
      },
      {
        path: "/Spells/MuAu",
        element: <MuAu />,
      },
      {
        path: "/Spells/PeAu",
        element: <PeAu />,
      },
      {
        path: "/Spells/CrCo",
        element: <CrCo />,
      },
      {
        path: "/Spells/InCo",
        element: <InCo />,
      },
      {
        path: "/Spells/MuCo",
        element: <MuCo />,
      },
      {
        path: "/Spells/PeCo",
        element: <PeCo />,
      },
      {
        path: "/Spells/ReCo",
        element: <ReCo />,
      },
      {
        path: "/Spells/CrHe",
        element: <CrHe />,
      },
      {
        path: "/Spells/InHe",
        element: <InHe />,
      },
      {
        path: "/Spells/MuHe",
        element: <MuHe />,
      },
      {
        path: "/Spells/PeHe",
        element: <PeHe />,
      },
      {
        path: "/Spells/ReHe",
        element: <ReHe />,
      },
      {
        path: "/Spells/CrIg",
        element: <CrIg />,
      },
      {
        path: "/Spells/InIg",
        element: <InIg />,
      },
      {
        path: "/Spells/MuIg",
        element: <MuIg />,
      },
      {
        path: "/Spells/PeIg",
        element: <PeIg />,
      },
      {
        path: "/Spells/ReIg",
        element: <ReIg />,
      },
      {
        path: "/Spells/ReAu",
        element: <ReAu />,
      },
      {
        path: "/Spells/CrIm",
        element: <CrIm />,
      },
      {
        path: "/Spells/InIm",
        element: <InIm />,
      },
      {
        path: "/Spells/MuIm",
        element: <MuIm />,
      },
      {
        path: "/Spells/PeIm",
        element: <PeIm />,
      },
      {
        path: "/Spells/ReIm",
        element: <ReIm />,
      },
      {
        path: "/Spells/CrMe",
        element: <CrMe />,
      },
      {
        path: "/Spells/InMe",
        element: <InMe />,
      },
      {
        path: "/Spells/MuMe",
        element: <MuMe />,
      },
      {
        path: "/Spells/PeMe",
        element: <PeMe />,
      },
      {
        path: "/Spells/ReMe",
        element: <ReMe />,
      },
      {
        path: "/Spells/CrTe",
        element: <CrTe />,
      },
      {
        path: "/Spells/InTe",
        element: <InTe />,
      },
      {
        path: "/Spells/MuTe",
        element: <MuTe />,
      },
      {
        path: "/Spells/PeTe",
        element: <PeTe />,
      },
      {
        path: "/Spells/ReTe",
        element: <ReTe />,
      },
      {
        path: "/Spells/CrVi",
        element: <CrVi />,
      },
      {
        path: "/Spells/InVi",
        element: <InVi />,
      },
      {
        path: "/Spells/MuVi",
        element: <MuVi />,
      },
      {
        path: "/Spells/PeVi",
        element: <PeVi />,
      },
      {
        path: "/Spells/ReVi",
        element: <ReVi />,
      },
    ],
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};
export default Main;
