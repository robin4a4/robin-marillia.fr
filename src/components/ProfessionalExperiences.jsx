import { For } from "solid-js";
import Title from "./general";
import { COMPANIES } from "../utils/consts";
import Experience from "./Experience";

export default function ProfessionalExperiences() {
  return (
    <div class="w-1/2 m-auto">
      <Title>Professional experiences</Title>
      <For each={Object.values(COMPANIES)}>
        {(company) => <Experience company={company} />}
      </For>
    </div>
  );
}
