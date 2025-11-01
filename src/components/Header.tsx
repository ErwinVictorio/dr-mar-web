
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
    const menuItems = [
        { label: "Home", href: "#" },
        { label: "About Dr. Mar Co", href: "#About" },
        { label: "Contacts", href: "#ContactSection" },
        { label: "Services", href: "#Services" },
    ];

    return (
        <header className="w-full bg-[#009CFF] text-white shadow-md p-3
         sticky top-0 z-50 

        transition-all duration-300
        ">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
                {/* Left: Name */}
                <h1 className="text-lg md:text-xl font-semibold">
                    Dr. MAR CO, MD
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6 text-sm">
                    {menuItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className={`${item.label === "Home"
                                    ? "font-bold underline underline-offset-4"
                                    : "hover:opacity-90"
                                } transition`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="w-6 h-6 text-white" />
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#009CFF] text-white p-6">
                            <nav className="flex flex-col space-y-4 mt-8 text-lg">
                                {menuItems.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className={`${item.label === "Home" ? "font-bold underline underline-offset-4" : ""
                                            } transition`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
