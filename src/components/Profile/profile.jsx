import React, { useState } from 'react';
import "./profile.css";
import NavBar from '../Home/homeComponents/navBar';
import Button5 from '../components_form/Buttons/button_5/button_5';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('Informacion personal'); // Initial active section

  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <div className="containerProfile">
      <div className="navBar"><NavBar /></div>
      <div className="contentArea">
        <div className="sectionsBar">
          <Button5
            text="Informacion personal"
            isActive={activeSection === 'Informacion personal'}
            onClick={() => handleButtonClick('Informacion personal')}
          />
          <Button5
            text="Cuenta"
            isActive={activeSection === 'Cuenta'}
            onClick={() => handleButtonClick('Cuenta')}
          />
          <Button5
            text="Seguridad"
            isActive={activeSection === 'Seguridad'}
            onClick={() => handleButtonClick('Seguridad')}
          />
        </div>
        <div className="sectionContent">
          {/* Content based on the activeSection */}
          {activeSection === 'Informacion personal' && (
            <p>Your personal information content goes here.</p>
          )}
          {activeSection === 'Cuenta' && (
            <p>Your account settings content goes here.</p>
          )}
          {activeSection === 'Seguridad' && (
            <p>Your security settings content goes here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
