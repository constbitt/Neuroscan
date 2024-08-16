import React, { useRef } from 'react';
import Header from './Header/Header';
import AboveMain from './AboveMain/AboveMain';
import SectorMain from './SectorMain/SectorMain';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Footer from './Footer/Footer';
import FileUploader from './FileUploader/FileUploader';

function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const sectorMainRef = useRef(null);

  const scrollToSection1 = () => {
    section1Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection2 = () => {
    section2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection3 = () => {
    section3Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection4 = () => {
    section4Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection5 = () => {
    section5Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSectorMainClick = () => {
    sectorMainRef.current.handleClic();
  };

  return (
    <div className="App">
      <Header 
        scrollToSection1={scrollToSection1} 
        scrollToSection2={scrollToSection2} 
        scrollToSection3={scrollToSection3} 
        scrollToSection4={scrollToSection4}
        scrollToSection5={scrollToSection5}
        handleSectorMainClick={handleSectorMainClick}  // Add this line
      />
      <SectorMain ref={sectorMainRef} />
      <Section1 ref={section1Ref} handleSectorMainClick={handleSectorMainClick} />
      <Section2 ref={section2Ref} />
      <Section3 ref={section3Ref} />
      <Section4 ref={section4Ref} />
      <Section5 ref={section5Ref} handleSectorMainClick={handleSectorMainClick} />
      <Footer />
    </div>
  );
}

export default App;
