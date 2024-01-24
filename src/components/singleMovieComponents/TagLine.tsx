import React from 'react'
import "./singleMovComp.css"

interface tagLineProps {
    tagline: string;
}

const TagLine: React.FC<tagLineProps> = ({tagline}) => {
  return (
    <p className='tagline_text'>{tagline}</p>
  )
}

export default TagLine