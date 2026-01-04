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


    if (props.channelType === "link"){
        return(
            <Link href={props.href}>
                <div className={baseClass}>
                    <h1>{props.channelName}</h1>
                </div>
            </Link>
        )
    }

    if (props.channelType === "popup"){
        return(
            <div className={baseClass}
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