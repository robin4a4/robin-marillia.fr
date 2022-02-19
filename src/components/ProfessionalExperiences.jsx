import Title from "./utils"
import {COMPANIES} from "../utils/consts"
import Experience from "./Experience"

export default function ProfessionalExperiences() {
    return (
        <div class="w-1/2 m-auto">
            <Title>Professional experiences</Title>
            <For each={Object.values(COMPANIES)}>{
                (company, i) => <Experience company={company} />
            }
            </For>
        </div>
    )
}