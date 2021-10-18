
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import NotFound from './components/NotFound/NotFound';
import Banner from './components/shared/Banner/Banner';
import MenuBar from './components/shared/MenuBar/MenuBar';

function App() {
  return (
    <div className="App">
     
      <Router>
      <MenuBar></MenuBar>
     
        <Switch>
          <Route exact path="/">

            <Banner></Banner>
          </Route>
          <Route exact path="/home">

            <Banner></Banner>
          </Route>
          <Route exact path="/details/:idNumber">

            <Details></Details>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
