import ListSection from "@/components/ListSection";

import { PROJECTS } from "@/data/projectLinks";

export default function Projects() {
  return (
    <>
        <ListSection
            title="Projects"
            description="A collection of things I&apos;ve built and maintained."
            items={PROJECTS}
        />
    </>
  );
}