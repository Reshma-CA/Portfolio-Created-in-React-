import React from 'react'

const SkilllList = ({src,skill}) => {
  return (
    <span>
    <img src={src} alt="Check Mark icon" />
    <p>{skill}</p>
    </span>
  )
}

export default SkilllList