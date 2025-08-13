import NavBar from "@/components/NavBar";
import Link from "next/link";

type SectionProps = {
    text: string;
    href: string;
};

function BoxSection({ text, href }: SectionProps) {
    return (
        <Link
            href={href}
            className="bg-[#363636] border-b flex cursor-pointer hover:bg-[#3C3C3C] transition-colors duration-150 flex-row justify-between items-center border-b-[#232323] last:border-none last:rounded-b-xl first:rounded-t-xl p-[16px]"
        >
            {text}
            <img src="/link.svg" className="mr-1" />
        </Link>
    );
}

export default function Home() {
    return (
        <>
            <NavBar />
            <main className="max-w-[950px] p-4 lg:p-0 mb-16 lg:mb-10 w-full mx-auto">
                <h1 className="font-bold text-lg">About me</h1>
                <p className="text-neutral-300 text-sm">
                    Hello, I&apos;m Maksim and I&apos;m 19 years old, developer and system administrator from{" "}
                    <Link href="/yaycha.gif">Russia</Link>. Now I’m gradually learning two languages: Rust, Kotlin.
                </p>
                <h1 className="mt-3 font-bold text-lg">Socials</h1>
                <p className="text-neutral-400 text-sm">Here are all my social networks</p>
                <ul className="list-none mt-1.5">
                    <BoxSection href="https://x.com/OctoBanon" text="X" />
                    <BoxSection href="https://mastodon.ml/@octobanon" text="Mastodon" />
                    <BoxSection href="https://github.com/OctoBanon-Main" text="GitHub" />
                    <BoxSection href="https://steamcommunity.com/id/octobanon" text="Steam" />
                </ul>
                <h1 className="mt-3 font-bold text-lg">Contacts</h1>
                <p className="text-neutral-400 text-sm">Here are several ways to reach me out</p>
                <ul className="list-none mt-1.5">
                    <BoxSection href="mailto:me@octobanon.com" text="E-Mail" />
                    <BoxSection href="https://t.me/OctoBanon" text="Telegram" />
                    <BoxSection href="https://matrix.to/#/@me:octobanon.com" text="Matrix" />
                    <BoxSection href="https://discord.com/users/839947810735521792" text="Discord" />
                </ul>
                <h1 className="mt-3 font-bold text-lg">Friends websites :3</h1>
                <p className="text-neutral-400 text-sm">
                    <Link href="/fof.gif">:3</Link>
                </p>
                <ul className="list-none mt-1.5">
                    <BoxSection href="https://kostyazero.com/" text="kostya_zero" />
                    <BoxSection href="https://houl.floof.company/" text="Houl" />
                    <BoxSection href="https://kiber-ogur4ik.space/" text="kiber_ogur4ik" />
                    <BoxSection href="https://honakac.github.io/" text="HonakAC" />
                    <BoxSection href="https://patrickstar8753.github.io/" text="cat8753" />
                </ul>
                <h1 className="mt-3 font-bold text-lg">
                    Made by <Link href="https://kostyazero.com">kostya_zero</Link>
                </h1>
                <p className="text-neutral-400 text-sm">
                    Original idea by OctoBanon. <br /> Used fonts: Inter. <br /> Inspired by GTK and Adwaita style
                </p>
            </main>
        </>
    );
}
