import "./app.css"
import React from "react";
import { BrowserRouter as Routes, Switch, Route, useNavigate ,Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Creator from "./pages/Project";
import Headroom from "react-headroom";
import Kita from "./pages/About";
import Mikhael from "./pages/utils/mikhael";
import Zalu from "./pages/utils/zaluansyah";
import Bori from "./pages/utils/bori";
import Yohanes from "./pages/utils/yohanes";
import Wahyu from "./pages/utils/wahyu";
// import Particle from "./utils/particles";


const App = () => {
  return (
    <main>
      {/* <Particle/> */}
    <Routes>
      <Headroom>
        <Navbar/>
      </Headroom>
      <Switch>
        <Route path="/" pages= {Home} exact>
          <Home/>
        </Route>
        <Route path="/Project" pages= {Creator} exact>
          <Creator/>
        </Route>
        <Route path="/About" pages= {Kita} exact>
          <Kita/>
        </Route>
        <Route path="/Mikhael" pages= {Mikhael} exact>
          <Mikhael/>
        </Route>
        <Route path="/Zaluansyah" pages= {Zalu} exact>
          <Zalu/>
        </Route>
        <Route path="/Buhori" pages= {Bori} exact>
          <Bori/>
        </Route>
        <Route path="/Yohanes" pages= {Yohanes} exact>
          <Yohanes/>
        </Route>
        <Route path="/Wahyu" pages= {Wahyu} exact>
          <Wahyu/>
        </Route>
        {/* <Route path="/Zaluansyah" pages= {amang} exact>
          <amang/>
        </Route>
        <Route path="/WahyuAgus" pages= {Mikhael} exact>
          <Mikhael/>
        </Route>
        <Route path="/Yohanes" pages= {Mikhael} exact>
          <Mikhael/>
        </Route>
        <Route path="/Buhori" pages= {Mikhael} exact>
          <Mikhael/>
        </Route> */}
      </Switch>
    </Routes>
  </main>

  )
}

export default App;
