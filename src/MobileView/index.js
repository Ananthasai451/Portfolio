import { useState } from 'react';
import Experience from '../Components/Experience';
import Projects from '../Components/Projects';
import { informationPage } from '../DesktopView';
import Navbar from '../DesktopView/Navbar';
import ProfileDetails from '../DesktopView/ProfileDetails';
import './index.css';
import MobileSkills from '../Components/MobileSkills';

function MobileView() {
    const [currentInformation, setCurrentInformation] = useState(informationPage.ABOUT)
  return (
      <div className="mobile-view">
                    <Navbar currentInfromation={currentInformation} setCurrentInformation={setCurrentInformation} />
      <div className='information-wrapper'>
      {(() => {
        switch (currentInformation) {
          case informationPage.ABOUT:
            return <ProfileDetails />
          case informationPage.EXPERIENCE:
            return <Experience />
          case informationPage.PROJECTS:
            return <Projects />
          case informationPage.SKILLS:
            return <MobileSkills />
          default:
            return <ProfileDetails /> 
        }
        })()}
          </div>
    </div>
  );
}

export default MobileView;
