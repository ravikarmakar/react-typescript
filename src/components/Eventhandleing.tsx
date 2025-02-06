import React from "react";

const Eventhandleing = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Enter", e.currentTarget);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Mouse Click", e.currentTarget);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h1>Eventhandleing</h1>

      <div>
        <h1>Don't Entry Your mouse here , Your mouse will not work</h1>

        <button onClick={handleClick}>Click here</button>
      </div>
    </div>
  );
};

export default Eventhandleing;
