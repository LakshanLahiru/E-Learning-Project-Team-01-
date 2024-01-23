import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Switch,Routes } from 'react-router-dom';
import NevBar from "./Components/nevbar/NevBar";

import Home from "./Components/Home/Home";
import Contact from './Components/Contact/Contact' ;
import Web from  './Components/Courses/Web/web_design';

import Footer from "./Components/Footer/Footer";
import { About } from './Components/About/About';
import Login from './Components/Login/Login';
import Video from './Components/Courses/video/video_design';

function App() {
  return (
    <>
      <Router>
      <NevBar />
      
    
        <Switch>
         
          {/*<Route path='/Contact'><Contact/></Route>*/}
          <Route path='/' exact component={Home} />
          <Route exact path='/contact' component={Contact} /> 
          <Route exact path='/web' component={Web} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/video' component={Video} />
          
        </Switch>
        
        {<Footer />}
      </Router>
      
      
        
        
          {/*<Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />*/}
        
      
    </>
  );
}

export default App;
