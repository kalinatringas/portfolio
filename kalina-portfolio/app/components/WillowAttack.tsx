import { useState } from "react";

interface FlurryImage{
    id: number;
    x: number;
    y: number;
    rotation: number;
    scale: number;
    delay: number;
}

export default function WillowAttack(){
    const [image, setImage] = useState<FlurryImage[]>([]);
    
    const triggerFlurry = ()=> {
        const newImages: FlurryImage[]=[];
        const numImages = 12;
        for (let i = 0; i< numImages; i++){
            newImages.push({
                id: Date.now()+i,
                // Spread across entire viewport - from bottom left to anywhere
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotation: (Math.random() - 0.5) * 360,
                scale: 0.6 + Math.random()* 0.6,
                delay: i * 80, // More stagger
            }); 
        }
        setImage(newImages);
        setTimeout(()=>{
            setImage([]);
        }, 4000);
    };
    
    return (
        <div className="relative items-center justify-center text-center flex">
            {/* Flurry images - start from bottom left, spread everywhere */}
            {image.map((img) => (
                <div
                    key={img.id}
                    className="fixed pointer-events-none -z-10"
                    style={{
                        animation: `flurry 3.5s ease-out forwards`,
                        animationDelay: `${img.delay}ms`,
                        '--start-x': '0px',
                        '--start-y': '100vh',
                        '--end-x': `${img.x}px`,
                        '--end-y': `${-img.y}px`,
                        '--rotation': `${img.rotation}deg`,
                        '--scale': `${img.scale}`,
                    } as React.CSSProperties}
                >
                    <img
                        src="./perfectwillowlogo.png"
                        alt="flurry"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                </div>
            ))}
            
            {/* Button - stays on top */}
            <button
                onClick={triggerFlurry} 
                className="relative z-10 w-25 h-25 px-4 py-2 bg-gray-400 text-white rounded-full "
            >
                Click mii!
            </button>
            
            <style jsx>{`
                @keyframes flurry {
                    0% {
                        transform: translate(0, 0) rotate(0deg) scale(0.5);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.8;
                    }
                    60% {
                        transform: translate(calc(var(--end-x) * 0.7), calc(var(--end-y) * 0.7)) 
                                   rotate(calc(var(--rotation) * 0.5)) 
                                   scale(var(--scale));
                        opacity: 0.6;
                    }
                    100% {
                        transform: translate(var(--end-x), var(--end-y)) 
                                   rotate(var(--rotation)) 
                                   scale(calc(var(--scale) * 0.8));
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    )
}