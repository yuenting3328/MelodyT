import React  from 'react';
import './App.css';
//import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import NavBar from './assets/components/NavBar/navbar.js';
import Work from './assets/pages/Work/work.js';
import AnimCursor from './assets/components/AnimCursor/animCursor.js';
import Footer from './assets/components/Footer/footer.js';
import About from './assets/pages/About/about.js';
import Fun from './assets/pages/Fun/fun.js';
import HA from './assets/pages/HA/ha.js';
import Muji from "./assets/pages/Muji/muji.js";
import WINGS from "./assets/pages/Wings/wings.js";
import EMPF from "./assets/pages/eMPF/empf.js";
import Motic from "./assets/pages/Motic/motic.js";
import ScrollToTop from './assets/components/ScrollToTop/scrollTo.js';
import Seal from "./assets/pages/Seal/seal.js";
import Experience from "./assets/pages/Experience/experience.js";
import Installation from "./assets/pages/Installation/installation.js";
import ScrollButton from "./assets/components/ScrollBtn/scrollBtn.js";
import { Fragment } from 'react';

function App() {
  return (
    
    <Router>
      <AnimCursor />
      <Fragment>
    <div className="App">
    <ScrollButton/>
    <ScrollToTop/>
   
    {/* <NavBar /> */}
    <div className='content'>
      <Switch>
        <Route exact path="/" > 
         <Work />
        </Route>
        <Route path="/about"> 
         <About />
        </Route>
        <Route path="/fun"> 
         <Fun />
        </Route>
        <Route path="/wings"> 
         <WINGS />
        </Route>
        <Route path="/muji"> 
         <Muji />
        </Route>
        <Route path="/motic"> 
         <Motic />
        </Route>
        <Route path="/empf"> 
         <EMPF />
        </Route>
        <Route path="/ha"> 
         <HA />
        </Route>
        <Route path="/seal"> 
         <Seal />
        </Route>
        <Route path="/experience"> 
         <Experience />
        </Route>
        <Route path="/installation"> 
         <Installation />
        </Route>
      </Switch>
    </div>
    <Footer /> 
    </div>
    </Fragment>
    </Router>
  );
}

// function App() {
//   return (
    
//     <Router>
//       <AnimCursor />
//       <Fragment>
//     <div className="App">
//     <ScrollButton/>
//     <ScrollToTop/>
   
//     {/* <NavBar /> */}
//     <div className='content'>
//       <Switch>
//         <Route exact path="/" > 
//          <Work />
//         </Route>
//         <Route path="/about"> 
//          <About />
//         </Route>
//         <Route path="/fun"> 
//          <Fun />
//         </Route>
//         <Route path="/wings"> 
//          <WINGS />
//         </Route>
//         <Route path="/muji"> 
//          <Muji />
//         </Route>
//         <Route path="/motic"> 
//          <Motic />
//         </Route>
//         <Route path="/empf"> 
//          <EMPF />
//         </Route>
//         <Route path="/ha"> 
//          <HA />
//         </Route>
//         <Route path="/seal"> 
//          <Seal />
//         </Route>
//         <Route path="/experience"> 
//          <Experience />
//         </Route>
//         <Route path="/installation"> 
//          <Installation />
//         </Route>
//       </Switch>
//     </div>
//     <Footer /> 
//     </div>
//     </Fragment>
//     </Router>
//   );
// }

export default App;
