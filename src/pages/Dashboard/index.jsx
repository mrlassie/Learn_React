import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/icons/girl-animation.json';

const HelloReact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='dashboard'>
      <Lottie className='lottie' options={defaultOptions} animationData={animationData} height={400} width={400} />
      <h1>Hello React</h1>
    </div>
  );
};

export default HelloReact;
