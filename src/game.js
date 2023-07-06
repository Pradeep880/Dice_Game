import React from 'react';
import './App.css'
const Dice = ({ number }) => {
  const getImageSource = () => {
    switch (number) {
      case 1:
        return require('./dice-1.png');
      case 2:
        return require('./dice-2.png');
      case 3:
        return require('./dice-3.png');
      case 4:
        return require('./dice-4.png');
      case 5:
        return require('./dice-5.png');
      case 6:
        return require('./dice-6.png');
      default:
        return null;
    }
  };

  const imageSource = getImageSource();

  if (!imageSource) {
    return null; // or display a default image for an invalid dice number
  }

  return <img src={imageSource} alt={`Dice ${number}`} className='dice'/>;
};

export default Dice;


