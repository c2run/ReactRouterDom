import {Contact, dataFetcher} from "./Contact";
import {Home} from "./Home";
import {LoginPage} from "./LoginPage";
import { BrowserRouter as Router, Route, Link, Outlet, Routes, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route index element={<Home />} />
      <Route path="/contact" loader={dataFetcher} element={<Contact />} />
      <Route path="/loginpage" element={<LoginPage />} />
      </Route>
      )
    );
  return (
  <div className="App">
  <RouterProvider router={router} />
  </div>);
 }

const Root = () => {
  return(
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/loginpage">LoginPage</Link>
        <Outlet />
      </div>
    </>
  );
}


export default App;

