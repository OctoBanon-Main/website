import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main className="max-w-[950px] p-4 lg:p-0 mb-16 lg:mb-10 w-full mx-auto">
                {children}
                <Footer />
            </main>
        </>
    );
}