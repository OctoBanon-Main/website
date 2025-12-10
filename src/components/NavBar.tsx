import NavItem from "./NavItem";
import { NAV_LINKS } from "@/data/navLinks";

export default function NavBar() {
    return (
        <header className="fixed lg:relative bottom-0 left-0 right-0 lg:bg-background bg-background py-[10px] z-50 navbar-shadow lg:shadow-none">
            <ul className="flex flex-row gap-1 mx-auto justify-center">
                {NAV_LINKS.map((item) => (
                    <NavItem
                        key={item.href}
                        text={item.text}
                        icon={item.icon}
                        href={item.href}
                        isActive={item.isActive}
                    />
                ))}
            </ul>
        </header>
    );
}