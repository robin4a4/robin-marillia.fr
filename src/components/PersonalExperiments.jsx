import Title from "./general";
import { personalExperiencesImages } from "../utils/consts";
import ImageModal from "./ImageModal";

export default function PersonalExperiments() {
  return (
    <div class="px-4 md:px-0 md:w-1/2 md:m-auto">
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
    </div>
  );
}
