import Link from "next/link"

export default function NotFound() {
    return (
        <main className="h-screen w-full flex p-6 font-inter">
            <div className="m-auto flex flex-col text-center justify-center items-center gap-5">
                <img src="/error.svg" className="size-[150px]" />
                <p className="text-3xl font-bold">Oh.</p>
                <p className="text-sm font-medium">The page you were looking for may have been deleted or moved.</p>
                <Link href="/" className="py-3 px-5 font-bold bg-[#39393C] rounded-full hover:bg-[#434346] transition-colors duration-150">Back to Home</Link>
            </div>
        </main>
    );
}
