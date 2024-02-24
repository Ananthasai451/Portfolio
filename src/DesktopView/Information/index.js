import './index.css';
import { informationPage } from '../index';
import About from '../../Components/About';
import Experience from '../../Components/Experience';
import Projects from '../../Components/Projects';
import Skills from '../../Components/Skills';
import Navbar from '../Navbar';
import { useState } from 'react';

function Information() {
      const [currentInformation, setCurrentInformation] = useState(informationPage.ABOUT)
  return (
    <div className="information">
      <Navbar currentInfromation={currentInformation} setCurrentInformation={setCurrentInformation} />
      <div className='information-wrapper'>
      {(() => {
        switch (currentInformation) {
          case informationPage.ABOUT:
            return <About />
          case informationPage.EXPERIENCE:
            return <Experience />
          case informationPage.PROJECTS:
            return <Projects />
          case informationPage.SKILLS:
            return <Skills />
          default:
            return <About /> 
        }
        })()}
        </div>
    </div>
  );
}

export default Information;
