import Image from "next/image"
import NavBar from "../components/Navbar"
import BottomBar from "../components/BottomBar"
export default function AboutMe(){
    return(
        <>
        <div className="pointer-events-none fixed inset-0 z-50 scanlines" />
        <NavBar/>
        <div className="h-[150vh] bg-zinc-50 font-sans relative">
        <div className="justify-center mt-4 pl-20 flex flex-row items-center">
        <h1 className="text-4xl">All about mii!</h1>
        <Image
        src="/KalinaMiiLeap.png"
        height={150}
        width={150}
        alt="A mii who resembles kalina, leaping!"
       
        />
        </div>
        <div className="m-3 flex flex-row items-center justify-center gap-4">
            <Image
            src="/Kalina+sister.JPEG"
            height={200}
            width={200}
            alt="Kalina and her awesome sister"
            className="rounded-2xl"/>
            <div className="bg-gray-200 rounded-2xl p-4 w-xl">
                <p>I fell in love with making websites and highschool, and wanted to do something that
                    combined my analytical and creative side. My coding journey consisted of mainly HTML, CSS, and some
                    light javascript. Since then, I've had the honor of creating a startups first business analytics dashboard, winning a hackathon, 
                    and leading a front-end development team. Be sure to checkout my other pages to learn more about my experiences and projects!
                </p>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
            <div className="bg-gray-200 rounded-2xl p-4 w-xl">
                <p>
                    Some fun facts about me :D <br/>
                    I love emulation! I love retro videos games! I love the wii (bet you couldn't tell..)
                    I'd do K-POP dance covers, nerd alert 🚨🚨<br/>
                    My dream is to backpack Europe someday with my sister <br/>
                    I love the beach but I'm actually not a huge fan of long walks on the beach. Maybe like a medium sized walk. <br/>
                    I have a lovely cat named Willow. She is my world. 
                </p>
            </div>
            <Image
            src="/Willow.JPEG"
            height={200}
            width={200}
            alt="A tuxedo cat, being super adorable."
            className="rounded-2xl"
            />
            </div>
        </div>
        </>

    )
}