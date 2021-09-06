import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
import DetailsPage from './views/DetailsPage/DetailsPage';
import AddPage from './views/AddPage/AddPage';
import NotFoundPage from './views/NotFoundPage/NotFoundPage';

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
