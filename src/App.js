import {Header} from './components/header/Header';
import {Certifications} from './components/certifications/Certifications';
import {Footer} from './components/footer/Footer';
import {WhySection} from './components/why/Why';
import {HeroBoard} from './components/hero-board/HeroBoard';
import {Events} from './components/events/Events';
import {Architecture} from './components/architecture/Architecture';
import {AboutUs} from './components/about-us/AboutUs';
import {OurServices} from './components/our-services/OurServices';
import {Team} from './components/team/Team';

function App() {
  return (
    <div className='App'>
      <Header />
      <AboutUs />
      <OurServices />
      <Architecture />
      <WhySection />
      <Certifications data={window.__SERVER_DATA__} />
      <Events data={window.__SERVER_DATA__} />
      <div className='footer__background'>
        <HeroBoard data={window.__SERVER_DATA__} />
        <Team />
        <Footer />
      </div>
    </div>
  );
}

export default App;

