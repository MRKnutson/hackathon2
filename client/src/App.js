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
import EditUser from './pages/EditUser';
import CalendarView from './pages/Calendar';
import Locations from './pages/Locations';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hackstreetboys" element={<AboutUs />} />
        <Route element={<RequireAuth />}>
          <Route path="/locations" element={<Locations />} />
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/profile/edit" element={<EditUser />} />
          <Route path="/backend" element={<BackEndTest />} />
          <Route path="/protected" element={<Protected />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
