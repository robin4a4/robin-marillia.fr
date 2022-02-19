import { children } from "solid-js";

export default function Title(props) {
    const c = children(() => props.children);

    return (
        <div class="mb-16 sticky top-0 pt-8 bg-black">
            <h2 class="text-4xl font-extrabold text-white relative z-10">
                {c}
            </h2>
            <div class="absolute bottom-0 left-0 -mb-4 right-0 w-32 h-3 z-0 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
        </div>
    )
}


export function Tag({text}) {
    return (
        <div class="px-2 py-1 rounded-full font-bold uppercase tracking-wide text-xs bg-neutral-900">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">{text}</span>
        </div>
    )
}