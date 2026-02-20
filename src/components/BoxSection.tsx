"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export type BoxSectionProps = {
    text: string;
    description?: string;
    href?: string;
    copyable?: boolean;
};

export default function BoxSection({ text, description, href, copyable }: BoxSectionProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const className = "bg-[#333337] flex cursor-pointer hover:bg-[#39393D] transition-colors duration-150 flex-row justify-between text-[1em] items-center p-[16px] gap-3";

    const content = (
        <>
            <div className="flex flex-col min-w-0 max-w-[70%]">
                <span className="truncate">{text}</span>
                {description && (
                    <span className="text-neutral-400 text-xs truncate">{description}</span>
                )}
            </div>

            {copyable && (
                <Image
                    src="/copy.svg"
                    alt="copy"
                    width={16}
                    height={16}
                    className="mr-1 shrink-0 transition-opacity duration-150"
                />
            )}

            {href && (
                <Image src="/link.svg" alt="" width={16} height={16} className="mr-1 shrink-0" />
            )}
        </>
    );

    if (href) return <Link href={href} className={className}>{content}</Link>;
    if (copyable) return <div onClick={handleCopy} className={className}>{content}</div>;
    return <div className={className}>{content}</div>;
}