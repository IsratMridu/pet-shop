
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Context/AuthProvider';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Banner from './components/shared/Banner/Banner';
import MenuBar from './components/shared/MenuBar/MenuBar';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
       
      <MenuBar></MenuBar>
     
        <Switch>
          <Route exact path="/">

            <Banner></Banner>
          </Route>
          <Route exact path="/home">

            <Banner></Banner>
          </Route>
          <Route exact path="/login">

            <Login></Login>
          </Route>
          <Route exact path="/register">

            <Register></Register>
          </Route>
          <Route exact path="/details/:idNumber">

            <Details></Details>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
       
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
