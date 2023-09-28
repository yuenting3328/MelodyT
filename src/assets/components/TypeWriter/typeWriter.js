import React, { useState, useEffect } from 'react';
import "./typeWriter.css"

const Typewriter = ({ strings, delay, infinite }) => {
  const [currentStrings, setCurrentStrings] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex <= strings.length) {
      timeout = setTimeout(() => {
        setCurrentStrings(prevStrings => prevStrings + strings[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) { // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentStrings('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, strings]);

  return <span>{currentStrings}</span>;
};

export default Typewriter;