import NavBar from "@/components/NavBar";
import Link from "next/link";

type SectionProps = {
    text: string;
};

function BoxSection({ text }: SectionProps) {
    return (
        <li className="bg-[#363636] border-b flex cursor-pointer hover:bg-[#3C3C3C] transition-colors duration-150 flex-row justify-between items-center border-b-[#232323] last:border-none last:rounded-b-xl first:rounded-t-xl p-[16px]">
            {text}
            <img src="/link.svg" className="mr-1" />
        </li>
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
                    <BoxSection text="X" />
                    <BoxSection text="Mastodon" />
                    <BoxSection text="GitHub" />
                    <BoxSection text="Steam" />
                </ul>
                <h1 className="mt-3 font-bold text-lg">Contacts</h1>
                <p className="text-neutral-400 text-sm">Here are several ways to reach me out</p>
                <ul className="list-none mt-1.5">
                    <BoxSection text="E-Mail" />
                    <BoxSection text="Telegram" />
                    <BoxSection text="Matrix" />
                    <BoxSection text="Discord" />
                </ul>
                <h1 className="mt-3 font-bold text-lg">Friends websites :3</h1>
                <p className="text-neutral-400 text-sm">
                    <Link href="/fof.gif">:3</Link>
                </p>
                <ul className="list-none mt-1.5">
                    <BoxSection text="kostya_zero" />
                    <BoxSection text="Houl" />
                    <BoxSection text="kiber_ogur4ik" />
                    <BoxSection text="HonakAC" />
                    <BoxSection text="cat8753" />
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
