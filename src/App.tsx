import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import Company from './pages/Company';
import TechnicalSheet from './pages/TechnicalSheet';
import Contact from './pages/Contact';
import LabSection from './pages/LabSection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/empresa" element={<Company />} />
            <Route path="/ficha-tecnica/:id" element={<TechnicalSheet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lab-section/:sectionId" element={<LabSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;