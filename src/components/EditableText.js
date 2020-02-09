import React from 'react'

function openPrompt(text, item, vendor, updateQuantity) {
  text = text === '-'? '0': text

  let newQuanity = prompt(`Enter new quantity of ${item} from ${vendor} (Note: numerical value only)`, text.match(/\d+/));

  if(isNaN(newQuanity) || newQuanity<0) alert(`${newQuanity} is not a valid quanity!!`)
  else updateQuantity(parseInt(newQuanity))
}

const EditableText = ({ text, item, vendor, updateQuantity }) => {
  return (
    <span onClick={() => openPrompt(text, item, vendor, updateQuantity)} className="editable_text">{text}</span>
  )
}

export default EditableText
