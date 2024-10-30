import React, { useState, useEffect } from 'react';
import { Lottie } from 'lottie-react';

const MyAnimationComponent = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    import('./sih/Animation_2.json')
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading animation:', error));
  }, []);

  return (
    <div>
      {animationData ? <Lottie animationData={animationData} loop={true} /> : <p>Loading...</p>}
    </div>
  );
};

export default MyAnimationComponent;
