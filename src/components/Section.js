import React from "react";
import "../styles/Section.css";

function App(props) {

    return (
        <section className="Section" id={props.id}>
            {props.children}
        </section>
    );
  }
  
  export default App;