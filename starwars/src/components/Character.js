import React from "react";
import Character_Films from './CharacterFilms';
import './StarWars.css';

class Character extends React.Component {

    constructor(props){
        super(props);
    }
 
render(){
    return (
        <div className="character">
            <h1>Name: {props.name.name}</h1> 
            <p>Gender: {props.name.gender}</p>
            <p>birth_year: {props.name.birth_year}</p>
            <p>height: {props.name.height} |  mass:  {props.name.mass}</p>
            <Character_Films filmList={props.name.films} />
        </div>
    );
};
}


export default Character;
