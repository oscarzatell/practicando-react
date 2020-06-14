import React from "react";

export default function Saludar(props) {
  const saludar = () => {
    console.log("Hola Oscar");
  };

  return (
    <div>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
}
