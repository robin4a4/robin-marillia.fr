import {Tag} from './utils'
import { For } from 'solid-js';
import {COMPANIES_CONTENT} from "../utils/consts"

export default function Experience({company}) {
    const content = COMPANIES_CONTENT[company]
    return (
        <div class="flex w-full gap-4 items-start mb-8">
            <div class="bg-neutral-900 p-4 rounded-md">
                <img src={content.logo} class="w-32 h-auto"/>
            </div>
            <div class="text-white">
                <h3 class="text-xl font-bold mb-2">{content.title}</h3>
                <p>
                    {content.text}
                </p>
                <div class="flex items-center gap-2 mt-2">
                    <For each={content.technologies}>{
                        (techno, i) => <Tag techno={techno}/>
                        }
                    </For>
                </div>
            </div>
        </div>
    )
}