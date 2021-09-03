import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import AddPage from './pages/AddPage/AddPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/details/:id' component={DetailsPage}/>
        <Route path='/add' component={AddPage}/>
        <Route path='*' component={NotFoundPage}/>      
      </Switch>
    </Router>
  );
}

export default App;
