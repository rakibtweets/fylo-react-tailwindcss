import './App.css';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Productive from './components/Productive/Productive';

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Features />
      <Productive />
    </>
  );
}

export default App;
