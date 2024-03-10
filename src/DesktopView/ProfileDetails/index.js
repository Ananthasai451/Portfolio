import PhoneNumberModal from '../../Components/PhoneNumberModal';
import { githubIconClick, gmailIconClick, linkedinIconClick, phoneIconClick, resumeDownloadClick } from '../../Utils/Contact';
import './index.css';
import { useEffect, useState } from 'react';

function ProfileDetails() {
    const [currentProfession, setCurrentProfession] = useState(0)
    const [isPhoneNumberModalOpen, setIsPhoneNumberModalOpen] = useState(false)
    const professions = ['Frontend Developer', 'Senior React Developer']
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProfession((currentProfessionPrev) => (currentProfessionPrev + 1) % (professions?.length))
        }, 6000)
        return () => clearInterval(interval)
    })
    const openPhoneNumberModal = () => {
        setIsPhoneNumberModalOpen(() => true)
    }
        const closePhoneNumberModal = () => {
        setIsPhoneNumberModalOpen(() => false)
    }
  return (
      <div className="profile">
          {isPhoneNumberModalOpen && <PhoneNumberModal closeModal={closePhoneNumberModal}/>}
          <div className='image-background'>
              <img src='./Resources/profilepic.png' alt="hioo" className='image'/>
          </div>
          <div className='profile-details'>
              <div className='profile-name'>Anantha Sai A</div>
              <div className='profession' key={currentProfession}>{professions[currentProfession]}</div>
              <div className='contact'>
                  <img className='contact-icon' src='./Resources/Contact/phone-icon.svg' alt="ph" onClick={() => phoneIconClick(openPhoneNumberModal)}/>
                  <img className='contact-icon' src='./Resources/Contact/gmail-icon.svg' alt="mail" onClick={() => gmailIconClick()} />
                  <img className='contact-icon' src='./Resources/Contact/linkedin-icon.svg' alt="linkedin" onClick={() => linkedinIconClick()}/>
                  <img className='contact-icon' src='./Resources/Contact/github-icon.svg' alt="git" onClick={() => githubIconClick()} />
                  </div>
              <button className='download-cv-button' onClick={() => resumeDownloadClick()}>Download CV</button>
          </div>
    </div>
  );
}

export default ProfileDetails;
