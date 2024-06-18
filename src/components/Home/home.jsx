import React from "react";
import '../../css/home.css'
import NavBar from "./homeComponents/navBar";
import { HistoryChart } from "./homeComponents/sideBarComponents";
import { ProfileChart } from "./homeComponents/profileChart";
import Logo from "../../img/logo/Logo-White-sf.png";
import PromptChart from "./homeComponents/promptChart";
const Home = ()=>{
    return(
        <div class="container-Home">
            
        <div class="navBar"><NavBar/></div>
        
        <div class="sideBar">

            <div class="history-chart">
                <h1>History</h1>
                <HistoryChart/>
            </div>
        
            <div class="profile-chart"><ProfileChart/></div>
        
        </div>
        <div class="chatArea">
            <div class="prompt-chart">
            <div class="prompt-field">
                <PromptChart/>
                
            </div>
            </div>
            <div class="chats-chart">            
                <img src={Logo} alt="" className="logoChat"/>
                <h1 className="initialMassage">¿Cómo puedo ayudarte hoy?</h1>
            </div>
        </div>
        </div>
    )
};

export default Home;