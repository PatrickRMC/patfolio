import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Games from './Pages/Games';
import Home from './Pages/Home';
import Navigation from './Pages/Navigation'
import CV from './Pages/CV';
import Footer from './Pages/Footer';
import FadeIn from 'react-fade-in';


function App() {

  return (
    <FadeIn className="text-center bg-contain bg-gradient-to-r from-coolblack to-coolblack">
      <div className="shadow-2xl p-5">
        <h1 className="font-mono text-coolyellow text-5xl md:text-6xl lg:text-9xl align-top">Patrick</h1>
        <Navigation/>
      </div>
      
      <BrowserRouter basename="/">      
        <Switch>
          
        <Route exact path="/">
          <Home/>
          <Games/>
        </Route>
      
        <Route to path="/cv">
          <CV/>
        </Route>
        
        </Switch> 
      
      </BrowserRouter>
      <Footer/>
      </FadeIn>
      
  );
}

export default App;
