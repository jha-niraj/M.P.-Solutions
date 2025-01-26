"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Pill } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

const dropdownData = [
    {
        title: "Budget Estimator",
        link: "budgetestimator",
        status: "live"
    },
    {
        title: "Nexus Invoices",
        link: "#",
        status: "coming"
    }
]

export default function Navbar() {
    const [sheetOpen, setSheetOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleProducts = (link: string, status: string) => {
        console.log(`${link}`);
        if (status === "live") {
            router.push(`${link}`);
        } else {
            toast({
                title: "Coming Soon",
                description: "We are currently working on it, it will live soon..."
            })
        }
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-black/30 backdrop-blur-md text-white'
            : 'bg-transparent text-black'
            }`}>
            <div className="max-w-4xl mx-auto flex items-center justify-between h-16">
                <Link href="/" className="flex items-center">
                    <Pill className="h-8 w-8" />
                    <span className="ml-2 text-xl font-bold">MP Solutions</span>
                </Link>
                <div className="hidden md:flex items-center space-x-16">
                    <Link href="#whyus" className="text-lg font-medium hover:scale-110 transition-all duration-300">
                        About Us
                    </Link>
                    <Link href="#projects" className="text-lg font-medium hover:scale-110 transition-all duration-300">
                        Explore
                    </Link>
                    <div
                        ref={dropdownRef}
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className="text-lg font-medium hover:scale-110 transition-all duration-300">
                            Services
                        </button>
                        {
                            isDropdownOpen && (
                                <>
                                    <div className="absolute top-full left-0 h-4 w-full" />
                                    <div className="absolute top-[calc(100%+16px)] left-0 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {
                                                dropdownData.map((data, index) => {
                                                    return (
                                                        <button
                                                            key={index}
                                                            onClick={() => handleProducts(data.link, data.status)}
                                                            className="block px-4 py-2 hover:bg-gray-100"
                                                        >
                                                            <div className="flex flex-col">
                                                                <span className="font-medium text-gray-900">{data.title}</span>
                                                            </div>
                                                        </button>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Button asChild>
                        <Link href="#contact-section">Contact Us</Link>
                    </Button>
                </div>
            </div>
            <Sheet open={sheetOpen} onOpenChange={() => setSheetOpen(false)}>
                <SheetContent>
                    <nav className="flex flex-col gap-4">
                        <Link href="#" className="text-lg hover:text-gray-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/aboutus" className="text-lg hover:text-gray-600 transition-colors">
                            About Us
                        </Link>
                        <Link href="/explore" className="text-lg hover:text-gray-600 transition-colors">
                            Explore
                        </Link>
                        <Link href="#contact-section" className="text-lg hover:text-gray-600 transition-colors">
                            Contact Us
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </nav>
    );
}