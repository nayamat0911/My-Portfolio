import './App.css';
import './Styles/All_layout.css';
import '../src/Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assest/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
// import Home_pages from './Pages/Home_pages';
import Side_bar from './components/Side_bar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Protfolio from './components/Protfolio';





function App() {
  return (
    <div className="App">
      <div className="Side_bar">
        <Side_bar />
      </div>
      <div className="main_content">

          <div className="hero_section ">
            
            <NavBar/>
            <div className="content">
                <Switch>
                  <Route path></Route>
                </Switch>
            </div>
          <Home />
          
          
          </div>
          <div className="About_section ">
            <About />
          </div>
          <div className="Services_section ">
            <Services/>
          </div>
          <div className="Portfolio_section ">
            <Protfolio/>
          </div>
          <div className="Contact_section ">
            <Contact/>
          </div>
          <div className="Footer_section ">
            <Footer/>
          </div>
      

      </div>
      
     
    </div>
  );
}

export default App;
