import React, { useState } from "react";
import FrequentText from "./FrequentText";

const Button = (props) => {
  const [text, setText] = useState(false);
  const [sign, setSign] = useState("+");
  const showText = () => {
    setText(!text);
    setSign("x");
  };
  return (
    <div className="button_align">
      <button className="faq_button" onClick={showText}>
        <div>
          <span>What is Netflix?</span>
        </div>
        <div>
          <span>{sign}</span>
        </div>
      </button>
      <FrequentText text={text} setText={setText} />

      <button className="faq_button" onClick={showText}>
        <div>
          <span>How much does Netflix cost?</span>
        </div>
        <div>
          <span>{sign}</span>
        </div>
      </button>
      <FrequentText text={text} setText={setText} />
    </div>
  );
};

export default Button;
