import React from "react";
import './StarWars.css';

const Character = props => {
    console.log("From character", props);
  return (
    <div className="character">
        {props.name.name}
    </div>
  );
};

export default Character;
