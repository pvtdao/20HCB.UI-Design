import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Category from './components/Categorry';
import Detail from './components/Detail';
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
        <Route path='/detail/:newsSlug' element={<Detail />} />
        <Route path='/category/:categorySlug' element={<Category />} />
      </Routes>

      {location.pathname === '/register' || location.pathname === '/login' ? (
        ''
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;
