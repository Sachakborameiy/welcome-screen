"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';

const WelcomePage: React.FC = () => {

    return (
        <div className="w-screen h-screen flex flex-col custom-gradient">
            {/* style={{ backgroundColor: "linear-gradient(90deg, rgba(39,233,243,1) 0%, rgba(120,120,222,1) 51%, rgba(0,212,255,1) 100%)" }} */}
            {/* Container Row */}

            {/* <div 
                className="flex-grow w-full"
                style={{backgroundImage: "url('/background.jpg')", backgroundSize: "contain" }}
            >
                <canvas id="canvas"></canvas>
            </div> */}

            <div 
                className="flex-grow w-full rounded-full "
                style={{backgroundImage: "url('/background.jpg')", borderRadius: "50%", backgroundSize: "50% 100%", border: "none", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
            >
                {/* <canvas id="canvas"></canvas> */}
                
            </div>

            {/* Footer */}
            <div className='m-auto w-full bg-[#001A3D]'>
                <div className="relative bg-[#001A3D] h-48">
                    <div className="grid place-items-center m-auto">
                        <div className="absolute top-0">
                            <div className='flex flex-row md:flex-row '>
                                {/* left side */}
                                <div className='pt-7'>
                                    <Image
                                        src="/Logo-Acleda.png"
                                        alt='welcome screen'
                                        layout='' // Set layout to responsive
                                        objectFit='contain' // Adjust object fit as per your requirement
                                        quality={100}
                                        width={160}
                                        height={160}
                                        className='rounded-sm'
                                    />
                                </div>
                                {/* end left side */}

                                {/* right side */}
                                <div className='w-full p-4'>
                                    <div className='p-4'>

                                        <div className='w-full flex flex-row ml-4'>
                                            <div className='uppercase text-white font-bold text-3xl'>Acleda </div>
                                            <div className='ml-3 text-orange-400 font-bold capitalize text-3xl'>mobile</div>
                                        </div>
                                        <div className='flex mt-4 ml-4 '>

                                            <div className='bg-white p-2 rounded-md w-52 app-wave-google'>
                                                <div className='h-12 flex '>
                                                    <Image
                                                        src="/apple.png"
                                                        alt='welcome screen'
                                                        layout='' // Set layout to responsive
                                                        objectFit='contain' // Adjust object fit as per your requirement
                                                        quality={100}
                                                        width={40}
                                                        height={40}
                                                        className='rounded-md'
                                                    />
                                                    <span className=''><span className="uppercase font-bold text-black pl-2" style={{fontSize: "12px"}}>get it on <br /></span><span className='font-bold text-black pl-2' style={{fontSize: "16px"}}>Google Play</span></span>
                                                </div>
                                            </div>

                                            <div className='bg-black p-2 rounded-md ml-4 w-52 app-wave-apple'>
                                                <div className='h-12 flex ml-2'>
                                                    <Image
                                                        src="/google-play.svg"
                                                        alt='welcome screen'
                                                        layout='' // Set layout to responsive
                                                        objectFit='contain' // Adjust object fit as per your requirement
                                                        quality={100}
                                                        width={40}
                                                        height={40}
                                                        className='rounded-md'
                                                    />
                                                    <span className='pl-4'><span className="uppercase text-sm font-bold text-white" style={{fontSize: "12px"}}>download on the <br /></span><span className='font-bold text-lg text-white' style={{fontSize: "16px"}}>App Store</span></span>
                                                </div>
                                            </div>

                                            {/* <div className='bg-black p-2 rounded-md ml-4 w-52 app-wave-master'>
                                                <div className='h-12 flex ml-2'>
                                                    <Image
                                                        src="/master-code.svg"
                                                        alt='welcome screen'
                                                        layout='' // Set layout to responsive
                                                        objectFit='contain' // Adjust object fit as per your requirement
                                                        quality={100}
                                                        width={40}
                                                        height={40}
                                                        className='rounded-md'
                                                    />
                                                    <span className='pl-2'><span className="uppercase text-sm font-bold text-white" style={{fontSize: "12px"}}>Get it on the<br /></span><span className='font-bold text-lg text-white' style={{fontSize: "16px"}}>Master of Code</span></span>
                                                </div>

                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                                {/* end right side */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WelcomePage;

