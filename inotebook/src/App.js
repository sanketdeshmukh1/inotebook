import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    {/* <Alert message="this is alertbox123"/> */}
    <div className="container">
    <Switch>
     <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path="/about">
      <About/>
      </Route>
      <Route exact path="/login">
     <Login/>
      </Route>
      <Route exact path="/signup">
      <Signup/>
      </Route>
      </Switch>
      </div>
    </Router>
  
    {/* <Navbar/>
    <Home/>
<About/> */}


</NoteState>
   
    </>
  );
}

export default App;
