"use client"


import Link from "next/link";

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

    const hover = new Audio('/sounds/hover.mp3')
    const select = new Audio('sounds/select.mp3')
    const playSound = (audio: HTMLAudioElement) => {
    audio.currentTime = 0;
    audio.play().catch(err => console.log("audio play has failed", err));
  };

    if (props.channelType === "link"){
        return(
            <Link href={props.href} 
            onMouseEnter={()=>playSound(hover)} 
            onClick={()=>playSound(select)}>
                <div className={baseClass}>
                    <h1>{props.channelName}</h1>
                </div>
            </Link>
        )
    }

    if (props.channelType === "popup"){
        return(
            <div className={baseClass}
            onMouseEnter={()=>playSound(hover)}
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