import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/loginRegister/Login';
import Register from './components/loginRegister/Register';
import LandingPage from './components/screen/LandingPage/LandingPage';
import MyNotes from './components/screen/MyNotes/MyNotes';

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={ <LandingPage />} />
        <Route path="mynotes" element={<MyNotes />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
