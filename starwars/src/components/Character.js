import React from "react";
import CharacterFilms from './CharacterFilms';
import './StarWars.css';

class Character extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            films: props.name.films
        };
    
    };

    
   
 
render(){
    return (
        <div className="character">
            <h1>Name: {this.props.name.name}</h1> 
            <p>Gender: {this.props.name.gender}</p>
            <p>birth_year: {this.props.name.birth_year}</p>
            <p>height: {this.props.name.height} |  mass:  {this.props.name.mass}</p>
            <h3>films:</h3>
            <ul className="films-list">
                 {this.state.films.map( f => <CharacterFilms film={f} key={f} />)}
            </ul>
        </div>
    );
};
}


export default Character;
