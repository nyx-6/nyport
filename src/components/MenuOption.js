import React from "react";
import "../styles/MenuOption.css";


function MenuOption(props) {
    return (
        <a
            href={props.section}
            className={props.selectedOption === props.option? "main_red" : props.fontMenuMode}
            onClick={() => props.clickOnMenuOption(props.option)}
            option={props.option}>
            {props.text}
        </a>
    )
}

export default MenuOption;