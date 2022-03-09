import { For } from "solid-js";
import Title from "./general";
import { COMPANIES } from "../utils/consts";
import Experience from "./Experience";

export default function ProfessionalExperiences() {
  return (
    <div class="px-4 md:px-0 md:w-2/3 lg:1/2 md:m-auto">
      <Title>Professional experiences</Title>
      <For each={Object.values(COMPANIES)}>
        {(company) => <Experience company={company} />}
      </For>
    </div>
  );
}
