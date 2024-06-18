import React from 'react';
import "../../css/profile.css"
import NavBar from '../Home/homeComponents/navBar';
import Button5 from '../components_form/Buttons/button_5/button_5';

const Profile = () => {
    return (
        <div class="containerProfile">
            <div class="navBar"><NavBar/></div>
            <div class="contentArea">
                <div class="sectionsBar">
                    <Button5 text={"Cuenta"}/>
                    <Button5 text={"Seguridad"}/>
                    <Button5 text={"Informacion prsonal"}/>
                </div>
                <div class="sectionContent"></div>
            </div>
        </div>
    );
}

export default Profile;
