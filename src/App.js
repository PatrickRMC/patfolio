import {
  BrowserRouter,
  Switch,
  HashRouter,
  Route
} from 'react-router-dom';

//Import all the pages to use
import Games from './Pages/Games';
import Home from './Pages/Home';
import Navigation from './Pages/Navigation'
import CV from './Pages/CV';
import Footer from './Pages/Footer';

import FadeIn from 'react-fade-in';

function App() {

  return (

    //Site is built up from components, so the page is multiple elements combines into one

    //FadeIn is a Javascript library
    <FadeIn className="text-center bg-contain bg-gradient-to-r from-coolblack to-coolblack">
      <div className="shadow-2xl p-5">
        <h1 className="font-mono text-coolyellow text-5xl md:text-6xl lg:text-9xl align-top">Patrick</h1>
        <Navigation/>
      </div>
      
      {
      //The HashRouter uses portion of the URL, this Routing makes it so that the page website isn't built on multiple html files but changes what's being rendered
      }
      <HashRouter basename="/">      
        <Switch> 
          
        <Route exact path="/">
          <Home/>
          <Games/>
        </Route>
        
        </Switch> 
      </HashRouter>
      <Footer/>
      </FadeIn>

      
  );
}

export default App;
