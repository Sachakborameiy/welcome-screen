"use client";
// import RiveAnimation from '@/components/custom/page';
import Image from 'next/image';
import React, { useEffect } from 'react';

const WelcomePage: React.FC = () => {
    useEffect(() => {
        // const initializeRiveAnimation = () => {
        //     new rive.Rive({
        //         src: '/robot.riv',
        //         canvas: document.getElementById('canvas'),
        //         autoplay: true,
        //         layout: new rive.Layout({fit: 'contain', alignment: 'center'})
        //     });
        // };

        // Function to request fullscreen mode
        const requestFullScreen = () => {
            const element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) { /* Firefox */
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) { /* IE/Edge */
                element.msRequestFullscreen();
            }
        };

        // if (document.readyState === 'complete') {
        //     initializeRiveAnimation();
        //     requestFullScreen(); // Request fullscreen mode when the page is loaded
        // } else {
        //     document.addEventListener('DOMContentLoaded', () => {
        //         initializeRiveAnimation();
        //         requestFullScreen(); // Request fullscreen mode when the DOM is fully loaded
        //     });
        // }

        // return () => {
        //     document.removeEventListener('DOMContentLoaded', initializeRiveAnimation);
        // };
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col custom-gradient" style={{ backgroundColor: "linear-gradient(90deg, rgba(39,233,243,1) 0%, rgba(120,120,222,1) 51%, rgba(0,212,255,1) 100%)" }}>
            {/* Top Row */}
            <div className="flex-grow w-full h-full">
                {/* <Image
            src="/robot.riv"
            alt='welcome screen'    
            layout='fill'
            objectFit='scale-down'
            // objectFit='contain'
            // objectFit='scale-down'
            quality={100}
        /> */}

                <canvas id="canvas"></canvas>

                {/* <RiveAnimation/> */}

            </div>

            {/* Footer */}
            <div className="bg-[#1B3351] h-80 pl-10 px-10">
                <div className="container py-10 px-72 w-full bg-green-600 m-auto grid grid-cols-4 gap-4">
                    {/* Place your logos here */}
                    <div className="flex bg-yellow-700 w-full">
                        {/* <div className='relative pl-0 bg-orange-600 w-full'>
                            <Image
                                src="/acledalogo.png"
                                alt='welcome screen'
                                layout=''
                                objectFit=''
                                // objectFit='contain'
                                // objectFit='scale-down'
                                quality={100}
                                width={150}
                                height={150}
                                className='rounded-md bg-white'
                            />
                        </div>
                        <div className='w-full bg-red-500'>
                            <span className='uppercase w-full pl-4 text-white font-medium text-2xl'>Acleda </span>
                            <span className="uppercase w-full pl-4 text-[#8DE0E3] font-medium text-2xl">Mobile</span>
                        </div> */}
                    </div>
                    {/* Add more logos as needed */}

                    
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;

