
import { Layout } from './Components-portfolio/layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Components-portfolio/home';
import { About } from './Components-portfolio/about';
import { Services } from './Components-portfolio/services';
import { Projects } from './Components-portfolio/projects';
import { Contact } from './Components-portfolio/contact';
import { Skills } from './Components-portfolio/skills';
import './Components-portfolio/portfolio.css';
import React from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
