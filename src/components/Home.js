import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../../../public/stylesheet/spellcalc.css";

import { Link, Outlet } from "react-router-dom";

import Logo from "../components/Logo/Logo"

const Home = () => {
  return (
    <div>
      <nav className="navDiv">
        <Link to="/">
          <button className="navButton">Close Tab</button>
        </Link>

        <Link to="/Spells/CrAn">
          <button className="navButton">Spontaneous Spell Calculator</button>
        </Link>

        <Link to="/TwilightCalc">
          <button className="navButton">Twilight Calculator</button>
        </Link>

        <Link to="/ExperimentationCalc">
          <button className="navButton">Experimentation Calculator</button>
        </Link>

        <Link to="/AgeCalc">
          <button className="navButton">Age Calculator</button>
        </Link>
      </nav>
      <Outlet />

      <Logo/>
    </div>
  );
};

export default Home;
