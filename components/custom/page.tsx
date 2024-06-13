"use client";
import React, { useEffect } from 'react';

const RiveAnimation: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@rive-app/canvas';
    script.async = true;
    script.onload = () => {
      // autoplays the first animation in the default artboard
      new rive.Rive({
        src: '/robot.riv',
        canvas: document.getElementById('canvas'),
        autoplay: true,
        layout: new rive.Layout({ fit: 'contain', alignment: 'center' }),
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas id="canvas" />;
};

export default RiveAnimation;


