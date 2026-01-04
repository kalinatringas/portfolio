"use client"

import Image from 'next/image';
import Channel from './components/Channel';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from 'react';
import ResumeModal from './components/ResumeModal';
import BottomBar from './components/BottomBar';
import ContactModal from './components/ContactMe';

export default function Home() {

  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const handleGoToNewTab = (href: string) => {
  window.open(href, '_blank');
  };

  return (<>

  <div className='min-h-screen bg-zinc-50 font-sans relative'>

    {/* The top row */}
    <div className="pt-6 ">
      <div className='text-center justify-center '>
        <h1 className="text-black text-5xl mb-1">Kalina's Console</h1>        
        <h1 className="text-gray-700 text-m">Developer | Cat lover | Maker of Things</h1>
      </div>
    
    {/* Right image */}
      <div className='absolute bottom-4 right-8 z-40 '>
        <div className=' hover:animate-shake cursor-default-normal rounded-2xl bg-gray-400 p-1 transition-transform'>
        <Tooltip>
          <TooltipTrigger>
            <Image 
        src ="/KalinaCloseup.png"
        width={100}
        height={100}
        alt="picture of the awesome person you should hire"
        onClick={()=>setShowContactModal(true)}
        />
          </TooltipTrigger>
          <TooltipContent>
          Contact me!
          </TooltipContent>
        </Tooltip>
        
        </div>
      </div>
    </div>
  {/* All the Little Channels!! */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-15 place-items-center'>
      <Channel channelName= "About Me" href="/about" channelType='link'/>
      <Channel channelName='Projects' href='/projects' channelType='link' />
      <Channel channelName='Experience/Leadership' href='/experience' channelType='link'/>
      <Channel channelName='Download my Resume!' channelType='popup' 
      onClick={() => {setShowResumeModal(true)
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
    <BottomBar className="pointer-events-none absolute z-0 -bottom-4 w-full"/>

  </div>
    <div className="pointer-events-none fixed inset-0 z-20 scanlines" />

  </>); 
}

        
      