import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Typewriter = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setDisplayText(texts[currentTextIndex].substring(0, currentIndex));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 300);

    if (currentIndex > texts[currentTextIndex].length) {
      clearInterval(interval);
      setCurrentIndex(0);
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [texts, currentTextIndex, currentIndex, isPaused]);

  return (
    <div className="typewriter-container">
      <span className="typewriter-text">{displayText}</span>
    </div>
  );
};

Typewriter.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Typewriter;
