import React from "react";
import "../styles/NavigationBar.css";

import MenuOption from "../components/MenuOption";
import MenuIcon from '@material-ui/icons/Menu';
function NavigationBar(props) {
    return (
        <React.Fragment>


            <nav className={props.menuMode} id="menu">
                <div className="menu__mobile">
                    <button className={`${props.fontMenuMode} menu__mobile_button`}
                            onClick={props.clickOnMobileMenuButton}>
                        <MenuIcon style={{ fontSize: 25 }} />
                    </button>
                </div>
                <div id="options">
                    <MenuOption
                        section="#Home"
                        clickOnMenuOption={props.clickOnMenuOption}
                        option="home"
                        selectedOption={props.selectedOption}
                        text="Home"
                        menuMode={props.menuMode}
                        fontMenuMode={props.fontMenuMode}
                    />
                    <MenuOption
                        section="#About"
                        clickOnMenuOption={props.clickOnMenuOption}
                        option="about"
                        selectedOption={props.selectedOption}
                        text="About"
                        menuMode={props.menuMode}
                        fontMenuMode={props.fontMenuMode}
                    />
                    <MenuOption
                        section="#Projects"
                        clickOnMenuOption={props.clickOnMenuOption}
                        option="projects"
                        selectedOption={props.selectedOption}
                        text="Projects"
                        menuMode={props.menuMode}
                        fontMenuMode={props.fontMenuMode}
                    />
                    <MenuOption
                        section="#Contact"
                        clickOnMenuOption={props.clickOnMenuOption}
                        option="contact"
                        selectedOption={props.selectedOption}
                        text="Contact"
                        menuMode={props.menuMode}
                        fontMenuMode={props.fontMenuMode}
                    />
                </div>

            </nav>
          
        </React.Fragment>
    )
}

export default NavigationBar;