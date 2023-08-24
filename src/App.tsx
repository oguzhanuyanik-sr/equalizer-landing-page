import { BrowserRouter } from 'react-router-dom';
import FirstSection from './components/FirstSection';
import AppSection from './components/AppSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <FirstSection />
      <AppSection />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
