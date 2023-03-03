import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
