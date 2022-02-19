import {Tag} from './general'
import { For } from 'solid-js';
import {COMPANIES_CONTENT} from "../utils/consts"

export default function Experience({company}) {
    const content = COMPANIES_CONTENT[company]
    if (!content) return null;

    return (
        <div class="flex w-full gap-4 items-start mb-16">
            <div class="bg-neutral-900 rounded">
                <div class="bg-neutral-100 p-4 rounded-md">
                    <img src={content.logo} class="min-w-[3rem] max-w-[3rem] h-auto"/>
                </div>
                <div class="flex flex-col items-center my-2 text-white gap-2">
                    {content.to &&
                    <>
                        <span class="font-bold uppercase tracking-wide text-xs">{content.to}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                        </svg>
                    </>
                    }
                    <span class="font-bold uppercase tracking-wide text-xs">{content.from}</span>
                </div>
            </div>
            <div class="text-white">
                <h3 class="text-xl font-bold mb-2">{content.title}</h3>
                <p>
                    {content.text}
                </p>
                <div class="py-2 mt-2">
                    {content.website && <a href={content.website} class="px-2 py-1 rounded-full font-bold uppercase tracking-wide text-xs bg-neutral-100 hover:bg-neutral-200 text-blue-600">Site web</a>}
                    <div class="flex items-center gap-2 mt-2">
                        <For each={content.technologies}>{
                            (techno, i) => <Tag text={techno}/>
                        }
                        </For>
                    </div>
                </div>
                {content.images &&                 
                    <div class="flex gap-2">
                        <For each={content.images}>{
                            (image, i) => <img src={image} class="flex-1 w-auto h-32 rounded-md hover:translate-y-1 duration-200 cursor-pointer"/>
                        }
                        </For>
                    </div>
                }
            </div>
        </div>
    )
}