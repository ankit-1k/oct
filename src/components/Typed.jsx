import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  useEffect(() => {
    const typed = new Typed('#typed', {
      strings: ['Hello, I am Ankit.', 'I am a programmer.', 'I am a freelancer.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span id="typed"></span>;
};

export default TypedComponent;
