import React from "react";

const Character = props => {
    console.log("From character", props);
  return (
    <div>
        {props.name.name}
    </div>
  );
};

export default Character;
