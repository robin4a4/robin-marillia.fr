import { createSignal } from "solid-js";

const TYPING_TEXT_DESKTOP = ["great code.", "graphic design.", "creating user interfaces.", "piano.", "solving problems."];
const TYPING_TEXT_MOBILE = ["piano.", "design.", "coding.", "photo." ];

export default function Header() {

    const [typingText, setTypingText] = createSignal(TYPING_TEXT_DESKTOP[0]);


    return (
        <div class="text-white relative h-screen">
            <header class="text-3xl w-full text-center p-4 flex gap-2 items-center justify-center">
                <div class="w-10 h-3 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
                <span>Robin <b>MARILLIA</b></span>
            </header>
            <div class="absolute top-0 bottom-0 w-full h-screen">
                <video src="../assets/laptop-animation.mp4" muted  autoplay type='video/mp4'></video>
                <div class="absolute top-0 bottom-0 w-full flex items-center justify-center">
                    <div>
                        <p class="text-4xl">I am a french full-stack engineer<br/> who loves 
                        <span class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                            <span>{typingText}</span>
                            <span class="text-4xl font-extrabold bg-clip-text bg-gradient-to-br from-yellow-400 to-pink-500 motion-safe:animate-pulse-fast">|</span>
                        </span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mt-10 motion-safe:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div> 
        </div>
    ) 
}