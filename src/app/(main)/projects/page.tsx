import ListSection from "@/components/ListSection";

import { PROJECTS } from "@/data/projectLinks";

export default function Projects() {
  return (
    <>
        <ListSection
            title="Projects"
            description="Placeholder"
            items={PROJECTS}
        />
    </>
  );
}