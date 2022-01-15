import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/Layout';
import Protected from './pages/Protected';
import RequireAuth from './components/RequireAuth';
import BackEndTest from './pages/BackEndTest';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <Routes>
      <Route element ={<Layout />}>
        <Route path = "/register" element = {<Register />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/hackstreetboys" element = {<AboutUs />} />
        <Route element = {<RequireAuth />}>
        <Route path = "/" element = {<Home />} />
        <Route path = "/backend" element = {<BackEndTest />} />
          <Route path = "/protected" element = {<Protected />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
