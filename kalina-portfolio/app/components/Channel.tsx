"use client"

import Link from "next/link";
import { useEffect, useRef } from "react";
type LinkChannel = {
  channelType: "link";
  channelName: string;
  href: string;
};

type PopupChannel = {
  channelType: "popup";
  channelName: string;
  onClick: () => void;
};

type CustomChannel = {
  channelType: "custom";
  channelName: string;
  render: () => React.ReactNode;
};

type ChannelProps = LinkChannel | PopupChannel | CustomChannel;



export default function  Channel (props: ChannelProps){
    const baseClass = "w-60 bg-gray-400  hover:bg-gray-500 hover:animate-shake hover:pointer rounded-xl font-[Continuum] text-center text-white p-8 m-auto"
    const hoverRef = useRef<HTMLAudioElement | null>(null);
    const selectRef = useRef<HTMLAudioElement | null>(null);

    useEffect (()=>{
      hoverRef.current = new Audio('/sounds/hover.mp3');
      selectRef.current = new Audio('sounds/select.mp3')
    })

    const playSound = (audio: HTMLAudioElement | null) => {
      if(audio){
        audio.currentTime = 0;
        audio.play().catch(err => console.log("audio play has failed", err));
      }
  };

    if (props.channelType === "link"){
        return(
            <Link href={props.href} 
            onMouseEnter={()=>playSound(hoverRef.current)} 
            onClick={()=>playSound(selectRef.current)}>
                <div className={baseClass}>
                    <h1>{props.channelName}</h1>
                </div>
            </Link>
        )
    }

    if (props.channelType === "popup"){
        return(
            <div className={baseClass}
            onMouseEnter={()=>playSound(hoverRef.current)}
            onClick={props.onClick}
            role="button"
            tabIndex={0}
          >
                <h1>{props.channelName}</h1>
            </div>
        )
    }

    if(props.channelType === "custom"){
        return props.render();
    }
    return null;
}