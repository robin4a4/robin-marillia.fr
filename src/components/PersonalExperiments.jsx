import {Title, Container} from "./genericComponents";
import { personalExperiencesImages } from "../utils/consts";
import ImageModal from "./ImageModal";

export default function PersonalExperiments() {
  return (
    <Container>
      <Title>Personal experiments</Title>
      <div class="flex flex-wrap gap-2">
        <For each={personalExperiencesImages}>
          {(experience) => (
            <ImageModal
              image={experience.image}
              description={experience.description}
              date={experience.date}
            />
          )}
        </For>
      </div>
    </Container>
  );
}
