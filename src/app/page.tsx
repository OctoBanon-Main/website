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
            className="bg-[#333337] border-b flex cursor-pointer hover:bg-[#39393D] transition-colors duration-150 flex-row justify-between items-center border-b-[#212125] last:border-none last:rounded-b-xl first:rounded-t-xl p-[16px]"
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
                <h1 className="font-bold text-sm">About me</h1>
                <p className="text-neutral-300 text-sm">
                    Hi! I&apos;m Maksim — a 19-year-old developer and system administrator from{" "}
                    <Link href="/yaycha.gif">Russia</Link>. Currently focusing on Rust (already comfortable with the basics) and Kotlin (actively learning).
                </p>
                <h1 className="mt-3 font-bold text-sm">Socials</h1>
                <p className="text-neutral-400 text-sm">Here are all my social networks</p>
                <ul className="list-none mt-1.5">
                    <BoxSection href="https://x.com/OctoBanon" text="X" />
                    <BoxSection href="https://mastodon.ml/@octobanon" text="Mastodon (RU)" />
                    <BoxSection href="https://github.com/OctoBanon-Main" text="GitHub" />
                    <BoxSection href="https://steamcommunity.com/id/octobanon" text="Steam" />
                    <BoxSection href="https://t.me/octobanon_place" text="Telegram Channel (RU)" />
                </ul>
                <h1 className="mt-3 font-bold text-sm">Contacts</h1>
                <p className="text-neutral-400 text-sm">Here are several ways to reach me out</p>
                <ul className="list-none mt-1.5">
                    <BoxSection href="mailto:me@octobanon.com" text="E-Mail" />
                    <BoxSection href="https://t.me/OctoBanon" text="Telegram" />
                    <BoxSection href="https://matrix.to/#/@me:octobanon.com" text="Matrix" />
                    <BoxSection href="https://discord.com/users/839947810735521792" text="Discord" />
                </ul>
                <h1 className="mt-3 font-bold text-sm">Friends websites</h1>
                <p className="text-neutral-400 text-sm">
                    <Link href="/fof.gif">:3</Link>
                </p>
                <ul className="list-none mt-1.5">
                    <BoxSection href="https://kostyazero.com/" text="kostya_zero" />
                    <BoxSection href="https://houl.floof.gay/" text="Houl" />
                    <BoxSection href="https://honakac.github.io/" text="HonakAC" />
                    <BoxSection href="https://patrickstar8753.github.io/" text="cat8753" />
                    <BoxSection href="https://shadowcj.rf.gd/" text="ShadowCj" />
                    <BoxSection href="https://tolya1337.ru/" text="Tolya Gosuslugi" />
                </ul>
                <h1 className="mt-3 text-sm">
                    Made by kostya_zero
                </h1>
                <p className="text-neutral-400 text-sm">
                    Original idea by OctoBanon <br /> Used fonts: Adwaita Sans <br /> Inspired by GTK and Adwaita style
                </p>
            </main>
        </>
    );
}
