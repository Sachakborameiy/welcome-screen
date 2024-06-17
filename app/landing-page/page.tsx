"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import AnimateRobot from '@/components/custom/Rive';
import { url } from 'inspector';
// import Background from "../../public/ai-01.jpg";
const WelcomePage: React.FC = () => {
    function requestFullScreen() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } 
        // else {
        //     document.documentElement.exitFullscreen();
        // }
        // else if (document.documentElement?.webkitRequestFullscreen) {
        //   document.documentElement.webkitRequestFullscreen();
        // } else if (document.documentElement.mozRequestFullScreen) {
        //   document.documentElement.mozRequestFullScreen();
        // }
    }

    window.onmousedown = () => {
        requestFullScreen()
    }

    window.onkeydown = (evt) => {
        if (evt.key == "Enter") {
            requestFullScreen();
        } 
        // console.log(evt);
    }
    return (
        <div className='relative max-w-[100%] bg-top-0 w-[100%] bg-cover'
        style={{
            // backgroundImage: `url('/background.jpg')`,
            backgroundImage: `url('/ai-01.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}

        // style={{ backgroundImage: `url("/public/background.jpg")` }}
        // style={{ backgroundImage: `url(${require("/public/background.jpg")})` }}
        >
            <div className="w-[2160px] h-[3840px] flex flex-col custom-gradient">
                <div className='relative'>
                    <AnimateRobot />
                </div>

                {/* Footer */}
                {/* 001A3D */}
                <footer className="bg-[#d9dbdf] h-[50vh] flex items-center justify-center">
                    <div className="p-0">
                        {/* Your content here */}
                        <div className="flex items-center justify-center mt-[-15em] w-[120em] ">
                            <div className=''>
                                <Image
                                    src="/Logo-Acleda.png"
                                    alt='welcome screen'
                                    layout=''
                                    objectFit='contain'
                                    quality={100}
                                    width={600}
                                    height={600}
                                    className='rounded-sm'
                                />
                            </div>

                            <div className='w-full p-4'>
                                <div className=''>
                                    <div className='w-full flex flex-row ml-4'>
                                        <div className='uppercase text-black font-extrabold text-[5.5em]'>Acleda </div>
                                        <div className='ml-4 text-[#f1a239] font-extrabold capitalize text-[5.5em]'>mobile</div>
                                    </div>
                                    <div className='flex mt-4 ml-4 '>

                                        <div className='bg-white p-10 rounded-lg w-[45em] app-wave-google shadow-4xl'>
                                            <div className='flex '>
                                                <Image
                                                    src="/apple.png"
                                                    alt='welcome screen'
                                                    layout='' // Set layout to responsive
                                                    objectFit='contain' // Adjust object fit as per your requirement
                                                    quality={100}
                                                    width={190}
                                                    height={190}
                                                    className='rounded-md'
                                                />
                                                <span className=''><span className="uppercase font-bold text-black pl-2 text-[3.5em]">get it on <br /></span><span className='font-bold text-black pl-2 text-[3em]'>Google Play</span></span>
                                            </div>
                                        </div>

                                        <div className='bg-black p-10 rounded-lg ml-10 w-[45em] app-wave-apple shadow shadow-4xl'>
                                            <div className=' flex ml-2'>
                                                <Image
                                                    src="/google-play.svg"
                                                    alt='welcome screen'
                                                    layout='' // Set layout to responsive
                                                    objectFit='contain' // Adjust object fit as per your requirement
                                                    quality={100}
                                                    width={180}
                                                    height={180}
                                                    className='rounded-md'
                                                />
                                                <span className='ml-4'><span className="uppercase font-bold text-white pl-2 text-[3.5em]">download <br/> on the<br /></span><span className='font-bold text-white pl-2 text-[3em]'>App Store</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default WelcomePage;

