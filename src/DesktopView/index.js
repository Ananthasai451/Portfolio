import Information from './Information';
import ProfileDetails from './ProfileDetails';
import './index.css';


    export const informationPage = {
        'ABOUT': 'ABOUT',
        'EXPERIENCE': 'EXPERIENECE',
        'PROJECTS': 'PROJECTS',
        'SKILLS': 'SKILLS'
    }
function DesktopView() {
  return (
      <div className="desktop-view">
          <ProfileDetails />
          <Information />
    </div>
  );
}

export default DesktopView;
