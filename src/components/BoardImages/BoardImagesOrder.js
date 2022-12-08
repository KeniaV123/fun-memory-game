import _ from "underscore";

// TO DO: encontrar la manera de trer el nombre de los archivos de los folders dogImages, catImages
export const generateArray = (category) => {
  let categoryNumber = 1;
  //declare the array
  let arrayImages = new Array(4);

  //Loop to insert in each position another array of 4

  for (let i = 0; i < 4; i++) {
    arrayImages[i] = new Array(4);
  }

  for (let element = 0; element < arrayImages.length; element++) {
    //console.log(arrayImages[element]);
    for (let position = 0; position < arrayImages[element].length; position++) {
      if (position % 2 === 0) {
        arrayImages[element][position] = `${category}${categoryNumber}.jpg`;
      } else {
        arrayImages[element][position] = `${category}${categoryNumber++}.jpg`;
      }
    }
  }

  const result = _.shuffle(
    arrayImages.reduce((prev, current) => prev.concat(current), [])
  );

  let shuffledArray = [],
    toFour = 0;

  let subArray = [];
  for (let i = 0; i < 16; i++) {
    const element = result[i];

    subArray.push(element);
    toFour++;

    if (toFour === 4) {
      shuffledArray.push(subArray);
      subArray = [];
      toFour = 0;
    }
  }

  return shuffledArray;
};
