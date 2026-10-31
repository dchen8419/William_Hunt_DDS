import './App.css';
import About from './components/about/About';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Procedures from './components/procedures/Procedures';


function App() {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <Banner />
        <About />
        <Procedures />
      </main>
      <Footer />
    </div>
  );
}

export default App;
