import Link from "next/link";
import AboutMe from "@/components/AboutMe";
import ListSection from "@/components/ListSection";

import { SOCIALS, RU_SOCIALS, CONTACTS, FRIENDS } from "@/data/links";

export default function Home() {
  return (
    <>
      <AboutMe />

      <ListSection
        title="Socials (Global)"
        description="Social networks focused on the English-speaking audience"
        items={SOCIALS}
      />

      <ListSection
        title="Socials (RU)"
        description="Social networks focused on the Russian-speaking audience"
        items={RU_SOCIALS}
      />

      <ListSection
        title="Contacts"
        description="Here are several ways to reach me out"
        items={CONTACTS}
      />

      <ListSection
          title="Friends websites"
          description={<Link href="/fof.gif">:3</Link>}
          items={FRIENDS}
      />
    </>
  );
}