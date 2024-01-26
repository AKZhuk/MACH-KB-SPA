import './App.css';
import {Header} from './components/header/Header';
import {Certifications} from './components/certifications/Certifications';
import {Footer} from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
