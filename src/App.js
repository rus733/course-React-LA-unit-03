import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Footer from './Footer';
import Error from './Error';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const navLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Category', link: '/cat' },
];
const categoryLinks = [
  { title: 'Ноутбуки', link: '/notebook' },
  { title: 'Мониторы', link: '/monitor' },
  { title: 'Мобильные телефоны', link: '/cellphone' },
];

function App() {
  document.title = 'unit_03_mpa';
  return (
    <>
      <Router>
        <Header data={navLinks} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/cat" element={<Category data={categoryLinks} />} />
          <Route path="/cat/:catDescr" element={<CategoryDescription />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
