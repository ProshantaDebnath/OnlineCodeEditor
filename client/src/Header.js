// Library Imports
import React from "react";
import DropDown from "react-dropdown";

import "./styles.css";

const Header = ({ onChangeLanguage, value, runCode, status }) => {
  const options = [
    { value: "cpp17", label: "C/C++" },
    { value: "java", label: "Java" },
    { value: "python", label: "Python 3" },
  ];
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h2>Online Code Compiler</h2>
      <p>Online IDE</p>
      <div style={{ textAlign: 'center', marginBottom: '2px' }}>
        <DropDown
          onChange={onChangeLanguage}
          className="nm"
          options={options}
          value={value}
          placeholder="Select an option"
        />
        <button
          onClick={() => runCode()}
          disabled={status === "Run" ? false : true}
          className="customButton"
        >
          {status}
        </button>
      </div>
    </div>
  );
};

export default Header;
