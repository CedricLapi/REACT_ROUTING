import React from 'react'
import { useParams } from 'react-router-dom'

const MultiParam = () => {
    const { word, color, background} = useParams();
  return (
    <div style={{background, color, padding: '1rem', marginTop: '1rem', border: 'black solid', width: '2000px'}}>The word is: {word}</div>
  )
}

export default MultiParam