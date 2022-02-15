import { createEffect, createSignal } from "solid-js";
import TorusAnimationComponent from "./torusAnimation";

const TYPING_TEXT_DESKTOP = ["great code.", "graphic design.", "piano.", "solving problems."];
const TYPING_TEXT_MOBILE = ["piano.", "design.", "coding.", "photo." ];

export default function Header() {

    const [chosenTextIndex, setChosenTextIndex] = createSignal(0);
    const [chosenText, setChosenText] = createSignal(TYPING_TEXT_DESKTOP[chosenTextIndex()]);
    const [currentTypedText, setCurrentTypedText] = createSignal("");

    createEffect(()=>{
        const chosenTextLength = chosenText().length;
        let timeout;
        if (chosenTextLength === currentTypedText()?.length) {

            timeout = setTimeout(() => {
                setCurrentTypedText("");
                if (chosenTextIndex() + 1 < TYPING_TEXT_DESKTOP.length) {
                    setChosenTextIndex(chosenTextIndex()+1);
                    // thanks to the timeout the chosenTextIndex is correctly set here so we don't have to iterate
                    setChosenText(TYPING_TEXT_DESKTOP[chosenTextIndex()]);
                } else {
                    setChosenTextIndex(0);
                    setChosenText(TYPING_TEXT_DESKTOP[0]);
                }
            }, 1000)
        } else {
            clearTimeout(timeout);
        }
    })

    createEffect(() => {
        setInterval(() => setCurrentTypedText(`${currentTypedText()}${chosenText()?.charAt(Math.min(chosenText()?.length+1, currentTypedText()?.length))}`), 120);
    })

    return (
        <div class="text-white relative h-screen">
            <header class="relative z-10 text-3xl w-full text-center p-4 flex gap-2 items-center justify-center">
                <div class="w-10 h-3 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
                <span>Robin <b>MARILLIA</b></span>
            </header>
            <div class="absolute top-0 bottom-0 w-full h-screen">
                <div>
                    <TorusAnimationComponent/>    
                </div>                
                <div class="absolute top-0 bottom-0 w-full flex items-center justify-center">
                    <div>
                        <p class="text-4xl drop-shadow">I am a french full-stack engineer<br/> who loves 
                            <span class=" text-4xl font-extrabold text-white">
                                <span>{currentTypedText()}</span>
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
