"use client"

import NavBar from "../components/Navbar";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { projects, Project } from './projects';
import ProjectCard from "../components/ProjectCard";

export default function Porfolio(){
    const [activeIndex, setActiveIndex] = useState(0);
    const maxIndex = projects.length -1;
    const swipe = new Audio('/sounds/swipe.mp3')
    const playSound = (audio:  HTMLAudioElement)=>{
        audio.currentTime = 0;
        audio.play().catch(err=>console.log("audio play has failed", err))
    }
    useEffect (()=>{
        const handleWheel = (e: WheelEvent)=>{
            if (scrollLocked.current) return;
            playSound(swipe);
            if(e.deltaY > 10 && activeIndex < maxIndex){
                scrollLocked.current = true;
                setActiveIndex((i)=>i+1);
            }
            if(e.deltaY < 0 && activeIndex > 0){
                scrollLocked.current = true;
                setActiveIndex((i)=> i-1);
            }
            setTimeout(()=>{
                scrollLocked.current = false;
            }, SCROLL_COOLDOWN);
        };
        window.addEventListener("wheel", handleWheel, {passive: true});
        return ()=> window.removeEventListener("wheel", handleWheel);
    },[activeIndex, maxIndex]);

    useEffect(()=>{
        const handleKey = (e:KeyboardEvent)=>{
            playSound(swipe);
            if(e.key === "ArrowDown" && activeIndex < maxIndex){
                setActiveIndex((i)=>i+1);
            }
            if(e.key === "ArrowUp" && activeIndex > 0){
                setActiveIndex((i)=> i - 1);
            }
        }
        window.addEventListener("keydown", handleKey);
        return ()=> window.removeEventListener("keydown", handleKey);
    },[activeIndex, maxIndex])
    const VERTICLE_OFFSET = 300;
    const SCROLL_COOLDOWN = 450; // this is in ms
    const scrollLocked = useRef(false);

    return(
        
        <div className="h-screen overflow-hidden bg-zinc-50 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="pointer-events-none fixed inset-0 z-50 scanlines" />

            <NavBar/>
            {projects.map((proj, indx)=>{
                const offset = indx - activeIndex;

                return(
                    <motion.div
                    key={proj.name}
                    className="absolute w-[70vw] max-w-xl rounded-2xl bg-white shadow-xl p-6"
                    animate={{
                        y: offset* VERTICLE_OFFSET,
                        scale: offset === 0? 1: 0.75,
                        opacity: offset === 0 ? 1: 0.4,
                        zIndex: 100 - Math.abs(offset),
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                    }}
                    >
                        <ProjectCard {...proj}/>

                    </motion.div>
                );

            })}
            </div>
        </div>
    )
}

// "use client"

// import NavBar from "../components/Navbar";
// import Channel from "../components/Channel";
// import { useState } from "react";
// import ChannelPopup from "../components/ChannelPopup";

// type Project = {
//     name: string;
//     image: string;
//     link?: string;
//     description: string;
// }

// export default function Porfolio(){
//     const [showModal, setShowModal] = useState(false);
//     const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//     const [currentIndex, setCurrentIndex] = useState<number>(0)

//     const projects: Project[] =[
//         {name: "Dance Assignments", image:"/dance.png", link:"https://danceassignment.netlify.app/", description:"meow" },
//         {name: "Kogna", image:"/kogna.png" ,link:"https://kogna.io/", description:"meow"}
//     ]

//     const handleShowModal = (index: number) => {
//         setShowModal(true);
//         setCurrentIndex(index);
//     }

//     const handleCloseModal = () => {
//         setShowModal(false);
//         setSelectedProject(null);
//     }

//     const handleNext = ()=>{
//         setCurrentIndex((prev)=>(prev+1)  % projects.length);
//     }
//     const handlePrev = () => {
//         setCurrentIndex((prev)=> (prev-1 + projects.length) % projects.length);
//     }

//     return(
        
//         <div className="min-h-[150vh] bg-zinc-50">
//             <div className="pointer-events-none fixed inset-0 z-50 scanlines" />

//             <NavBar/>
//             <h1 className="text-4xl pt-20 text-gray-700 text-center mb-4">My Projects</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
//             {projects.map((proj, indx)=>(
//                 <Channel
//                 key={proj.name}
//                 channelName={proj.name}
//                 channelType="popup"
//                 onClick={()=> handleShowModal(indx)}
//                 />
//             ))}
//             </div>
//             {showModal &&(

//                 <ChannelPopup
//                 project = {projects[currentIndex]}
//                 onClose={handleCloseModal}
//                 onNext={handleNext}
//                 onPrev={handlePrev}
//                 />
//             )}
//         </div>
//     )
// }