import Image from "next/image";
import Link from "next/link";

type Props = {
    text: string;
    icon: string;
    href: string;
    isActive?: boolean;
};

export default function NavItem({ icon, href, text, isActive = false }: Props) {
    return (
        <Link
            href={href}
            className={`
                flex items-center rounded-md text-sm font-bold
                flex-col md:flex-row h-[43px] md:h-[35px]
                w-[100px] md:w-[145px] justify-center gap-1 md:gap-2
                transition-colors duration-200 select-none cursor-pointer
                hover:bg-[#39393C]
                ${isActive ? "bg-[#39393C]" : ""}
            `}
        >
            <Image
                src={icon}
                alt={text}
                width={18}
                height={18}
                className="mt-[3px] md:mt-[-1px]"
            />
            {text}
        </Link>
    );
}