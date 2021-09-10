import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Games from './Pages/Games';
import Home from './Pages/Home';
import Navigation from './Pages/Navigation'
import CV from './Pages/CV';

function App() {

  return (
    <div className="text-center bg-contain bg-gradient-to-r from-red-100 to-blue-300">
      <div className="shadow-2xl p-5">
        <h1 className="text-9xl align-top">Patrick</h1>
        <Navigation/>
      </div>
      
      <BrowserRouter>      
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
      
      </div>
      
  );
}

export default App;
