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
import { news } from './fakeData/news';
import { category } from './fakeData/category';
import Account from './components/Account';
import MyPost from './components/MyPost';
import PendingPost from './components/PendingPost';
import MyInfor from './components/MyInfor';
import CreatePost from './components/CreatePost';
import { allPost } from './fakeData/allPost';

function App() {
  const location = useLocation();

  const newsData = news;

  React.useEffect(() => {
    localStorage.setItem('all_post', JSON.stringify(allPost));
  }, []);

  return (
    <div className='App'>
      {location.pathname === '/register' ||
      location.pathname === '/login' ||
      location.pathname.includes('account') ? (
        ''
      ) : (
        <>
          <SubHeader />
          <Header />
        </>
      )}

      <Routes>
        <Route path='/' element={<HomePage news={newsData} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail/:newsSlug' element={<Detail />} />
        <Route
          path='/category/:categorySlug'
          element={<Category category={category} />}
        />
        <Route path='/account' element={<Account />}>
          <Route path='my-posts' element={<MyPost />} />
          <Route path='pending-posts' element={<PendingPost />} />
          <Route path='my-infor' element={<MyInfor />} />
          <Route path='new-post' element={<CreatePost />} />
        </Route>
      </Routes>

      {location.pathname === '/register' ||
      location.pathname === '/login' ||
      location.pathname.includes('account') ? (
        ''
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;
