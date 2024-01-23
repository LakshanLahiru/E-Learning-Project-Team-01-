import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import './logIcon.css';

function LogIcon() {
  const [name, setName] = useState("Sign In");

  const getFirstLetterIcon = () => {
    if (name.trim() !== "") {
      return name.charAt(0).toUpperCase();
    }
    return <FaUserCircle />; // Use FaUserCircle as the default icon when there is no input name
  };

  // Callback function to update the name
  const updateName = (newName) => {
    setName(newName);
  };

  // Make the updateName function accessible from outside
  LogIcon.updateName = updateName;

  return (
    <div className="headerl-container">
      <div className="iconl">{getFirstLetterIcon()}</div>
      <h3>{name}</h3>
    </div>
  );
}

export default LogIcon;

