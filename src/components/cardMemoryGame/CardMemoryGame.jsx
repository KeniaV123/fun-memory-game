import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { dogImages } from "../../helpers/dogImages";
import { generateArray } from "../BoardImages/BoardImagesOrder";

export const CardMemoryGame = ({ imagePath }) => {
  console.log(imagePath);
  const [flip, setFlip] = useState(false);

  // console.log('.......................................................')
  // console.log(generateArray());

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
      <div className="card" onClick={() => setFlip(!flip)}></div>
      <div className="card" onClick={() => setFlip(!flip)}>
        <img src={dogImages(`./${imagePath}`)} alt="prueba" />
      </div>
    </ReactCardFlip>
  );
};
