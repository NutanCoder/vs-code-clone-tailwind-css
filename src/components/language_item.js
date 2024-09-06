import React from "react";

function LanguageItem(props) {
  const language = props.language;
  return (
    <div className="flex items-center w-1/2 md:w-1/3">
      <img src={language.image} alt={language.name} className="w-12 h-18" />
      <span>{language.name}</span>
    </div>
  );
}

export default LanguageItem;
