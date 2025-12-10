import NavBar from "@/components/NavBar";
import Link from "next/link";
import AboutMe from "@/components/AboutMe";
import ListSection from "@/components/ListSection";

import { SOCIALS, CONTACTS, FRIENDS } from "@/data/links";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="max-w-[950px] p-4 lg:p-0 mb-16 lg:mb-10 w-full mx-auto">
        <AboutMe />

        <ListSection
          title="Socials"
          description="Here are all my social networks"
          items={SOCIALS}
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

        <Footer />

      </main>
    </>
  );
}