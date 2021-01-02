import React from "react";
import "../styles/NavigationBar.css";

import MenuOption from "../components/MenuOption";

function NavigationBar(props) {
    return (

        <nav className={props.menuMode} id="menu">
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
                {/* <MenuOption
                    section="#Technologies"
                    clickOnMenuOption={props.clickOnMenuOption}
                    option="technos"
                    selectedOption={props.selectedOption}
                    text="Technologies"
                    menuMode={props.menuMode}
                    fontMenuMode={props.fontMenuMode}
                /> */}
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
    )
}

export default NavigationBar;