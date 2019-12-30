import React from "react";

const Logo = props => {
  return (
    <div>
      <a href={props.url}>
        <img src={props.image} alt="Logo Here" />
      </a>
    </div>
  );
};
export default Logo;
