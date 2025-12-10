import Link from "next/link";
import Image from "next/image";

export type BoxSectionProps = {
    text: string;
    href: string;
};

export default function BoxSection({ text, href }: BoxSectionProps) {
    return(
        <Link
        href={href}
        className="bg-[#333337] border-b flex cursor-pointer hover:bg-[#39393D] transition-colors duration-150 flex-row justify-between text-[1em] items-center border-b-[#212125] last:border-none last:rounded-b-xl first:rounded-t-xl p-[16px]"
        >
         {text}
         <Image
           src="/link.svg"
           alt=""
           width={16}
           height={16}
           className="mr-1"
        />
        </Link>
    );
}