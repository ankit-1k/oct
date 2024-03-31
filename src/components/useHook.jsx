import { useState } from 'react';

const useHook = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return { count, increment };
};

export default useHook;
