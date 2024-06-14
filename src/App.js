import './styles/App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import Upcoming from './components/Upcoming';
import Footer from './components/Footer';
// import Europe from './components/Europe';
// import Asia from './components/Asia';
// import Africa from './components/Africa';
// import America from './components/America';
// import Ocenia from './components/Ocenia';
// import Modal from './components/Modal';
import AllCountries from './components/AllCountries';

function App() {
  return (
    <div className='container'>
      <header>
        <Navbar />
        <Carousel />
      </header>
      <main>
        <Hero />
        {/* <Modal>
          <Africa />
          <America />
          <Asia />
          <Europe />
          <Ocenia />
        </Modal> */}
        <AllCountries />
        <Upcoming />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;