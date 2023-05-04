import React, { useState } from "react";

const Navbar = () => {
  const [language, setlanguage] = useState(false);
  const showLanguage = () => {
    setlanguage(true);
  };
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png?20190206123158"
            alt="logo"
            width="148px"
          />
        </div>

        <div className="navbar__button">
          <select name="language">
            <option value="English">English</option>
            <option value="Hindi">हिंदी</option>
          </select>
          <button className="sign_in">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
