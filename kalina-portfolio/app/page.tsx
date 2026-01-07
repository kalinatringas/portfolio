"use client"

import Image from 'next/image';
import Channel from './components/Channel';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/tooltip";
import { useState, useRef, useEffect } from 'react';
import ResumeModal from './components/ResumeModal';
import BottomBar from './components/BottomBar';
import ContactModal from './components/ContactMe';
import WillowAttack from './components/WillowAttack';

export default function Home() {

  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const handleGoToNewTab = (href: string) => {
  window.open(href, '_blank');
  };

  const swipeRef = useRef<HTMLAudioElement | null>(null);
  const hoverRef = useRef<HTMLAudioElement | null>(null);
  const selectRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio on client side only
  useEffect(() => {
    swipeRef.current = new Audio('/sounds/swipe.mp3');
    hoverRef.current = new Audio('/sounds/hover.mp3');
    selectRef.current = new Audio('/sounds/select.mp3');
  }, []);
  const today = new Date();
  const playSound = (audio:  HTMLAudioElement | null)=>{
    //const audio = new Audio('/sounds/toggle_002.mp3');
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(err => console.log("audio play has failed", err));
    }
  }

  return (<>

  <div className='min-h-screen bg-zinc-50 font-sans relative'>

    {/* The top row */}
    <div className="pt-6 ">
      <div className='text-center justify-center '>
        <h1 className="text-black text-5xl mb-1">Kalina's Console</h1>        
        <h1 className="text-gray-700 text-m">Developer | Cat lover | Maker of Things</h1>
      </div>
    
    {/* Right image */}
      <div className='absolute bottom-4 sm:right-8 z-40 right-4'>
        <div className=' hover:animate-shake cursor-default-normal rounded-full bg-gray-400 border-2 border-[#85d8db] p-1 transition-transform'>
        <Tooltip>
          <TooltipTrigger>
            <Image 
        src ="/KalinaCloseup.png"
        width={100}
        height={100}
        alt="picture of the awesome person you should hire"
        onClick={()=>{setShowContactModal(true);
          playSound(selectRef.current);}
        }
        onMouseEnter={()=>playSound(hoverRef.current)}
        />
          </TooltipTrigger>
          <TooltipContent>
          Contact me!
          </TooltipContent>
        </Tooltip>
        
        </div>
      </div>
      {/* A willow perhaps! */}
      
    </div>
    <div className='absolute bottom-5 left-4 z-40 sm:left-8' >
      <div className='hover:animate-shake cursor-default rounded-full bg-gray-400 border-[#85d8db] border-2 p-1 transition-transform'
      onClick={()=> playSound(selectRef.current)}
      onMouseEnter={()=> playSound(hoverRef.current)}
      >
        <Tooltip>
          <TooltipTrigger>
            <WillowAttack/>
          </TooltipTrigger>
          <TooltipContent>
            Release the willow...
          </TooltipContent>
          </Tooltip> 
      </div>
    </div>
  {/* All the Little Channels!! */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-15 place-items-center'>
      <Channel channelName= "About Me" href="/about" channelType='link'/>
      <Channel channelName='Projects' href='/projects' channelType='link' />
      <Channel channelName='Experience/Leadership' href='/experience' channelType='link'/>
      <Channel channelName='Download my Resume!' channelType='popup' 
      onClick={() => {setShowResumeModal(true); playSound(selectRef.current)
      }}/>
      <Channel channelName='Github' channelType='popup' onClick={()=>handleGoToNewTab("https://github.com/kalinatringas")}/>
      <Channel channelName='LinkedIn' channelType='popup' onClick={()=>handleGoToNewTab("https://www.linkedin.com/in/kalina-tringas/")}/>
    </div>
    <ResumeModal
      isOpen= {showResumeModal}
      onClose={()=> setShowResumeModal(false)}
    />
    <ContactModal
      isOpen = {showContactModal}
      onClose = {()=> setShowContactModal(false)}
    />
    <p className='bottom-5 z-10 text-black text-2xl -translate-1/2 left-1/2 absolute hidden sm:block'>{today.toLocaleDateString('en-US',{
        weekday: 'short',
        year: 'numeric',
        month:'numeric',
        day: 'numeric'
    })}</p>
    <BottomBar className="pointer-events-none absolute z-0 -bottom-4 w-full sm:block hidden "/>
    <p className='absolute bottom-1 left-1/2 -translate-x-1/2 text-xs'>This portfolio is a personal project inspired by Nintendo Wii's interface design. Not affiliated with or endorsed by Nintendo.</p>
  </div>
    <div className="pointer-events-none fixed inset-0 z-20 scanlines" />

  </>); 
}

        
      