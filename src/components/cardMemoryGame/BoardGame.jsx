import React from "react";
import { useParams } from "react-router-dom";
import { generateArray } from "../BoardImages/BoardImagesOrder";
import { CardMemoryGame } from "./CardMemoryGame";

export const BoardGame = () => {
  const { categoryId } = useParams();
  //console.log({categoryId})
  const imagesArray = generateArray("dog");

  return (
    <div>
      {/* <h2 style={{ marginTop: '100px' }}>{ categoryId }</h2> */}
      <div className="container">
        {imagesArray.map((image) =>
          image.map((imagePath, index) => (
            <CardMemoryGame key={index} imagePath={imagePath} />
          ))
        )}

        {/* <CardMemoryGame /> 
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
        <CardMemoryGame />   */}
      </div>
    </div>
  );
};
