import React from "react";

export default function Saludar(props) {
  console.log(props.name);

  return (
    <div>
      <h3>
        Hola {props.name}, tiene {props.edad} años
      </h3>
    </div>
  );
}
