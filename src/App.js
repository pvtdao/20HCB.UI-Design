import Header from './components/Header/Header';
import SubHeader from './components/Header/SubHeader';
import Introduce from './components/Introduce';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { Container } from 'reactstrap';
import NewPost from './components/Post/NewPost';
import TopCategory from './components/Post/TopCategory';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <SubHeader />
      <Header />
      <Introduce />
      <NewPost />
      <TopCategory />
      <Footer />
    </div>
  );
}

export default App;
