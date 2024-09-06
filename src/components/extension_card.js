import React from "react";

function ExtensionCard(props) {
  const extension = props.extension;

  return (
    <div className="bg-[#00000003] p-4 flex gap-4 border rounded-xl">
      <div>
        <img src={extension.imageurl} alt={extension.title} className="w-8" />
      </div>
      <div className="w-4/5">
        <div className="">
          <h4 className="text-base font-semibold mb-1">{extension.title}</h4>
          <p className="text-sm font-medium"> {extension.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ExtensionCard;
