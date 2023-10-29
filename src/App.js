// import logo from './logo.svg';
// import './App.css';
import './styles.css';
import Hero from './components/hero/hero';
import ThreeColumns from './components/threeColumns/threeColumns';
import Carousel from './components/carousel/carousel';
import FourthSec from './components/fourthSec/fourthSec';
import Footer from './components/footer/footer';

function App() {
  return (
    <div styles={{ width: '100%' }}>
      <div>
        <Hero />
        <ThreeColumns />
        <Carousel />
        <FourthSec/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
