import "./styles.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
 function App() {
  return (
    <Router>
    <div className="App">   
    <Navbar/>
    <Switch>
      <Route exact path="/" component ={Home}/>
      <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/users/add" component={AddUser}/>
       <Route exact path="/users/edit/:id" components={EditUser}/>
       <Route exact path="/users/user/:id" components={User}/>
       <Route component={NotFound}/>
       </Switch>
    </div>
    </Router>
  );
}
export default App;
