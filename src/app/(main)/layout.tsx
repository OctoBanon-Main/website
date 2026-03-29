import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main className="max-w-[950px] p-4 lg:p-0 mb-16 lg:mb-10 w-full mx-auto">
                {children}
                <Toaster />
                <Footer />
            </main>
        </>
    );
}