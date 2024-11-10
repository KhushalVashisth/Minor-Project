import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import SearchBar from './components/searchbar';
import AppointmentScheduler from './components/AppointmentScheduler';
import ReviewForm from './components/ReviewForm';
import lawyersData from './data/lawyerdata'; // Import lawyers data

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const lawyerFound = lawyersData.find(lawyer => lawyer.name.toLowerCase().includes(term.toLowerCase()));
    setSelectedLawyer(lawyerFound);
  };

  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Features />
      <Services />
      <Pricing />
      <Partners />
      <Testimonials />
      <Contact />
      <SearchBar onSearch={handleSearch} />
      
      {/* Only render AppointmentScheduler and ReviewForm if a lawyer is found */}
      {selectedLawyer && (
        <>
          <AppointmentScheduler lawyer={selectedLawyer} />
          <ReviewForm lawyer={selectedLawyer} />
        </>
      )}
    </div>
  );
};

export default App;
