
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Gyms from './pages/Gyms';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academias" element={<Gyms />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/servicos/:id" element={<ServiceDetail />} />
            <Route path="/laudos" element={<ServiceDetail />} /> {/* Reusing detail with specific logic if needed */}
            <Route path="/projetos" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            {/* Fallback for specific service routes */}
            <Route path="/laudos/:id" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
