import { useState } from 'react';

const ClickButton = () => {
  // regle numéro 1: On ne mettra jamais un hook dans une condition
  /**
   * if(machin){
   * const [count, setCount] = useState(0);
   * }===> A BANNIR
   */
  // regle numéro 2: Les hooks seront déclarés tout en haut du component. L'ordre est important (dans certains cas)
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      className="p-4 m-4 text-white bg-blue-500"
      onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

export default ClickButton;
