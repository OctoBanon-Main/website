'use client';

import { toast as sonnerToast } from 'sonner';
import Image from 'next/image';

interface AdwToastProps {
    id: string | number;
    message: string;
}

export function showAdwToast(message: string) {
    sonnerToast.dismiss();

    return sonnerToast.custom((id) => (
        <AdwToast id={id} message={message} />
    ), {
        duration: 2000,
        position: 'bottom-center',
    });
}

function AdwToast({ id, message }: AdwToastProps) {
    return (
        <div className="flex items-center justify-between min-w-[300px] bg-black text-white px-6 py-4 rounded-full border border-white/10 gap-4 pointer-events-auto shadow-none">
            <span className="text-sm font-medium leading-none select-none">
                {message}
            </span>

            <button
                className="shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity outline-none cursor-pointer"
                onClick={() => sonnerToast.dismiss(id)}
            >
                <Image
                    src="/close.svg"
                    alt="Close"
                    width={16}
                    height={16}
                    className="invert brightness-0"
                />
            </button>
        </div>
    );
}