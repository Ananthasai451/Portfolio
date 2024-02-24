import { useState } from 'react';
import './App.css';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

function App() {

    const appViews = {
        'DESKTOP' :'DESKTOP_VIEW',
        'MOBILE' : 'MOBILE_VIEW'
    }
  const [currentView,] = useState(window?.innerWidth >= window?.innerHeight ? appViews?.DESKTOP: appViews?.MOBILE)
  return (
    <div className="App">
      {currentView === appViews?.DESKTOP && <DesktopView />}
      {currentView === appViews?.MOBILE && <MobileView />}
    </div>
  );
}

export default App;
