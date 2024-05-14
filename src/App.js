import React, { useState } from 'react';
import Introduction from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [highlightedSection, setHighlightedSection] = useState('');

  const handleHighlightSection = (section) => {
    setHighlightedSection(section);
    setTimeout(() => {
      setHighlightedSection('');  // Remove highlight after 3 seconds
    }, 3000);
  };

  return (
    <div>
      <Navbar onSectionClick={handleHighlightSection} />
      <Introduction highlight={highlightedSection === 'introduction'} />
      <Skills highlight={highlightedSection === 'skills'} />
      <Projects highlight={highlightedSection === 'projects'} />
      <Contact highlight={highlightedSection === 'contact'} />
    </div>
  );
}

export default App;
