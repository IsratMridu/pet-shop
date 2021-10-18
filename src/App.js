
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Context/AuthProvider';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
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
          <PrivateRoute exact path="/profile">

           <Profile></Profile>
          </PrivateRoute>
          <Route exact path="/register">

            <Register></Register>
          </Route>
          <PrivateRoute exact path="/details/:idNumber">

            <Details></Details>
          </PrivateRoute>
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
