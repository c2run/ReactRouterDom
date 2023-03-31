import {Contact} from "./Contact";
import {Home} from "./Home";
import {LoginPage} from "./LoginPage";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home />}>
    <Route exact path="/contact" element={<Contact />}></Route>
    <Route exact path="/LoginPage" element={<LoginPage />}></Route>
    </Route>
    </Routes>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/loginpage">LoginPage</Link>
        </li>
      </ul>
    </div>

    </Router>

    </div>
  )
}
export default App;

