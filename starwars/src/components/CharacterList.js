 import React from 'react';
 import Character from './Character';

 const CharacterList = props => {
    return <div className="character-list">{props.characterProps.map(c => <Character name={c} key={c.created} />)}</div>;
  };
  

export default CharacterList;