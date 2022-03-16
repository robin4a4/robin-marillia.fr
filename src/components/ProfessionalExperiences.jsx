import { For } from "solid-js";
import {Title, Container} from "./genericComponents";
import { COMPANIES } from "../utils/consts";
import Experience from "./Experience";

export default function ProfessionalExperiences() {
  return (
    <Container>
      <Title>Professional experiences</Title>
      <For each={Object.values(COMPANIES)}>
        {(company) => <Experience company={company} />}
      </For>
    </Container>
  );
}
