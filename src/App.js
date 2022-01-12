import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import SubHeader from './components/Header/SubHeader';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Resgiter';
import './scss/main.scss';

function App() {
  const location = useLocation();

  console.log('location: ', location);
  return (
    <div className='App'>
      {location.pathname === '/register' || location.pathname === '/login' ? (
        ''
      ) : (
        <>
          <SubHeader />
          <Header />
        </>
      )}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Routes></Routes>

      {location.pathname === '/register' || location.pathname === '/login' ? (
        ''
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;
