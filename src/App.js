import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import SignIn from './components/SignIn';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Add/>}/>
      <Route path='/signin' element={<SignIn/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
