import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Home from './assets/pages/Home';
import SignUp from './assets/pages/SignUp';
import SignIn from './assets/pages/SignIn';
import Profile from './assets/pages/Profile';
import About from './assets/pages/About';
import Header from './assets/components/Header';


export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/about" element = {<About/>} />
    <Route path="/profile" element = {<Profile/>} />
    <Route path="/sign-in" element = {<SignIn/>} />
    <Route path="/sign-up" element = {<SignUp/>} />
  </Routes>
  </BrowserRouter>
}
