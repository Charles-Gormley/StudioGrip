// components/Star.jsx
const Star = () => {
    // Random size from 1 to 3
    const size = Math.ceil(Math.random() * 3);
    // Random position within the viewport
    const posX = Math.floor(Math.random() * 100);
    const posY = Math.floor(Math.random() * 100);
    // Random animation duration between 5 and 10 seconds to vary the star movement speed
    const animationDuration = Math.random() * (10 - 5) + 5;
    // Twinkle effect with random delays
    const twinkleDelay = Math.random() * 5;
  
    return (
      <div
        className={`absolute bg-yellow-100 rounded-full opacity-50`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${posY}vh`,
          left: `${posX}vw`,
          animation: `move ${animationDuration}s linear infinite, twinkle 1s infinite alternate`,
          animationDelay: `.5s, ${twinkleDelay}s`
        }}
      />
    );
  };
  
  export default Star;
  