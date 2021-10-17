
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/shared/Banner/Banner';
import MenuBar from './components/shared/MenuBar/MenuBar';

function App() {
  return (
    <div className="App">
     
      <Router>
      <MenuBar></MenuBar>
      <Banner></Banner>
        <Switch>
          <Route>

          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
