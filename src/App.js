import Main from './HomePage/Main';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SheoharMain from './sheohar/SheoharMain';
import Login from './Profile/Login';
import Sinup from './Profile/Sinup';
import ForgotPassword from './Profile/ForgotPassword';
import EmailVeraction from './Profile/EmailVeraction';
import Regestation from './Profile/Regestation';
import ProfilePage from './AfterLogin/ProfilePage';
import PasswordChange from './Profile/PasswordChange';

function App() {
  return (
    <>
    
    <BrowserRouter basename='/Fitness-clint'>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/bihar/sheohar' element={<SheoharMain/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/sinup' element={<Sinup/>}></Route>
        <Route path='/forgot-pass' element={<ForgotPassword/>}></Route>
        <Route path='/emailverify' element={<EmailVeraction/>}></Route>
        <Route path='/registation' element={<Regestation/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/resetpassword' element={<PasswordChange/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;