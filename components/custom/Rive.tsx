import { useRive } from 'rive-react';

function AnimateRobot() {
  const params = {
    src: '/robot.riv',
    autoplay: true,
  };
  const { RiveComponent, rive } = useRive(params);

  return (
    <RiveComponent
        className='relative h-[75vh] w-[95em] m-auto'
      onMouseEnter={() => rive && rive.play()}
    //   onMouseLeave={() => rive && rive.play()}
    //   onMouseLeave={() => rive && rive.pause()}
      onMouseLeave={() => rive && rive.stop()}
    />
  );
}

export default AnimateRobot;