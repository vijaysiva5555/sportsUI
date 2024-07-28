import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import { GlobalVariable } from './store/GlobalSuperAdmin';
import { useEffect } from 'react';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Clients from './pages/clients/Clients';

function App() {

  return (
    <div className="app">
      <GlobalVariable>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/login' element={<Login />} />
              <Route path='/user' element={<Home />}>
                <Route path='/user/clients' element={<Clients />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalVariable>
    </div>
  );
}

export default App;
