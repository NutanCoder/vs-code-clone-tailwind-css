import React from 'react'

function LanguageItem(props) {
  const language = props.language;
  return (
    <div className='w-33 below-lg-w-50 flex item-center lang-item gap-4'>
      <img src={language.image} alt={language.name} className='lang-img' />
      <span>{language.name}</span>
    </div>
  )
}

export default LanguageItem