import Title from "./utils"
import {COMPANIES} from "../utils/consts"
import Experience from "./Experience"

export default function ProfessionalExperiences() {
    return (
        <div class="w-1/2 m-auto pt-8">
            <Title>Professional experiences</Title>
            <Experience company={COMPANIES.HELLOWATT} />
            <Experience company={COMPANIES.SRATI} />
        </div>
    )
}