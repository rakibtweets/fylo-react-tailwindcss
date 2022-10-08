import './App.css';
import Access from './components/Access/Access';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Productive from './components/Productive/Productive';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Features />
      <Productive />
      <Testimonials />
      <Access />
    </>
  );
}

export default App;
