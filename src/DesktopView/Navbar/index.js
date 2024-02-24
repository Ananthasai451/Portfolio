import { informationPage } from '..';
import './index.css';

function Navbar({currentInfromation, setCurrentInformation}) {
    const changeInformationTab = (information) => {
        if (currentInfromation !== information)
        {
            setCurrentInformation(() => information)
            }
    }
  return (
      <div className="navbar">
          <div className={`icon-wrapper${currentInfromation === informationPage.ABOUT? ' active-wrapper': ''}`} onClick={() => changeInformationTab(informationPage.ABOUT)}>
              <img className='navbar-icon' src='./Resources/Navbar/about.svg' alt='me' />
          </div>
          <div className={`icon-wrapper${currentInfromation === informationPage.EXPERIENCE? ' active-wrapper': ''}`} onClick={() => changeInformationTab(informationPage.EXPERIENCE)}>
              <img className='navbar-icon' src='./Resources/Navbar/experience.svg' alt='exp' />
          </div>
          <div className={`icon-wrapper${currentInfromation === informationPage.SKILLS? ' active-wrapper': ''}`} onClick={() => changeInformationTab(informationPage.SKILLS)}>
              <img className='navbar-icon' src='./Resources/Navbar/skills.svg' alt='skill' />
          </div>
          <div className={`icon-wrapper${currentInfromation === informationPage.PROJECTS? ' active-wrapper': ''}`} onClick={() => changeInformationTab(informationPage.PROJECTS)}>
              <img className='navbar-icon' src='./Resources/Navbar/projects.svg' alt='proj' />
          </div>
    </div>
  );
}

export default Navbar;
