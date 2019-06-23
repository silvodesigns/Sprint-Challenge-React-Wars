 import React from 'react';
 import Character from './Character';

 const CharacterList = props => {
    return <div>{props.characterProps.map(c => <Character name={c} key={c.id} />)}</div>;
  };
  

export default CharacterList;