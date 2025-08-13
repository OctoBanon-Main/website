import Link from "next/link";

type Props = {
    text: string;
    icon: string;
    isActive?: boolean;
    href: string;
};

function Section({ icon, href, text, isActive = false }: Props) {
    return (
        <Link
            href={href}
            className={`flex items-center rounded-md text-sm font-medium flex-col md:flex-row h-[43px] md:h-[35px] w-[100px] md:w-[145px] justify-center transition-colors duration-200 hover:bg-[#3A3A3A] select-none cursor-pointer gap-1 md:gap-2 ${isActive ? "bg-[#3A3A3A]" : ""}`}
        >
            <img src={icon} className="mt-[3px] md:mt-[-1px]" alt={text} />
            {text}
        </Link>
    );
}

export default function NavBar() {
    return (
        <header className="fixed lg:relative bottom-0 left-0 right-0 lg:bg-background bg-background  py-[10px] z-50">
            <ul className="flex flex-row gap-2 mx-auto justify-center">
                <Section text="Home" icon={"/home.svg"} isActive href="/" />
                <Section text="Status" icon={"/status.svg"} href="https://status.octobanon.com/status/services" />
                <Section text="Sources" icon={"/git.svg"} href="https://github.com/OctoBanon-Main/website" />
            </ul>
        </header>
    );
}
