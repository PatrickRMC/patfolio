import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import inkaLogo from './inkaicon.png';
import Games from './Pages/Games';
import Home from './Pages/Home';
import Navigation from './Pages/Navigation';

function App() {
  return (
    <div className="text-center bg-contain bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex justify-center break-normal">
       <h1 className="text-9xl">Patrick Projects</h1>
      </div>
      <Navigation/>
      
      <BrowserRouter>      
        <Switch>

        <Route exact path="/">
          <Home/>
        </Route>
      
        <Route to path="/games">
          <Games/>
        </Route>
        
        </Switch> 
      
      </BrowserRouter>

      </div>
  );
}

export default App;
