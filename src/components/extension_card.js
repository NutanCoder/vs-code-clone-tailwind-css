import React from 'react'

function ExtensionCard(props) {
  const extension = props.extension;
  return (
    <div className='w-30 below-lg-w-50 extension-card'>
      <div className="flex gap-8">
        <div>
          <img src={extension.imageurl} alt={extension.title} />
        </div>
        <div className="flex-grow">
          <div className=" flex flex-column gap-4">
            <h4>{extension.title}</h4>
            <p> {extension.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtensionCard;