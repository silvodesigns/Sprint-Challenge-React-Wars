import React from "react";
import './StarWars.css';

const Character = props => {
    console.log("From character", props);
  return (
    <div className="character">
       <h1>Name: {props.name.name}</h1> 
       <p>Gender: {props.name.gender}</p>
       <p>birth_year: {props.name.birth_year}</p>
       <p>height: {props.name.height} |  mass:  {props.name.mass}</p>
    </div>
  );
};

export default Character;
