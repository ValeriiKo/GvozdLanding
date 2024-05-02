import React from "react";
import logo from '../images/img1.jpg';

export const Image = ({src}) => {
  return (
    <img className="mx-1" src={src} alt="Test" />
  );
};
