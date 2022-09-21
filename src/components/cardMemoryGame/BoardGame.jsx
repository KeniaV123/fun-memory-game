import React from 'react'
import { useParams } from 'react-router-dom'
import { CardMemoryGame } from './CardMemoryGame'

export const BoardGame = () => {
  const {categoryId} = useParams();
  console.log({categoryId})

  return (
    <div>
      {/* <h2 style={{ marginTop: '100px' }}>{ categoryId }</h2> */}
      <div className="container">
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame /> 
        <CardMemoryGame />  
      </div>
    </div>
  )
}
