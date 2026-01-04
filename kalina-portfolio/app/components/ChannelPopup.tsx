

import { motion, AnimatePresence } from "framer-motion";
import GlossyButton from "./GlossyButton";
import { useEffect } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

type ChannelPopupProps = {
  project: {
    name: string;
    image: string;
    link?: string;
    description: string;
  };
  onClose: () => void;
  onNext: ()=>void;
  onPrev: () => void;
};

export default function ChannelPopup({ project, onClose, onNext, onPrev }: ChannelPopupProps) {
    
    const handleGoToNewTab = (href: string) => {
        if (!href) return;
        window.open(href, '_blank');
    };

    useEffect(()=>{
      const handleKeyDown = (e: KeyboardEvent)=>{
        if (e.key === "ArrowLeft") onPrev();
        if (e.key === "ArrowRight") onNext();
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return ()=> window.removeEventListener("keydown", handleKeyDown);
    },[onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
    <motion.div 
    key={project.name}
    className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <motion.div className="bg-gray-100 rounded-xl p-3 relative w-[80vw] shadow-lg"
      initial={{scale:0.8, rotateY:-180}}
      animate={{scale:1, rotateY:0}}
      exit={{scale:0.8, rotateY:-180, opacity:0}}
      >
        
        <ArrowLeft
        className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 hover:w-6 transition-all"
        onClick={onPrev}/>
      <ArrowRight
      className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 hover:w-6  transition-all"
      onClick={onNext}/>
        {project.link ? (
          <a href={project.link} target="_blank" className="block mb-4">
            <img src={project.image} alt={project.name} className="rounded-lg w-full" />
          </a>
        ) : (
          <img src={project.image} alt={project.name} className="rounded-lg w-full mb-4" />
        )}
        <motion.div className="flex flex-row justify-around gap-1 mt-4">
            <GlossyButton onClick={onClose}>Close</GlossyButton>
            <GlossyButton
            onClick={() => {
                if (project.link) handleGoToNewTab(project.link);
            }}>Start</GlossyButton>
        </motion.div>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
}
