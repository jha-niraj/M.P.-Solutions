import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Pill } from "lucide-react"

export function Navbar() {
    return (
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Pill className="h-8 w-8 text-primary" />
                            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">MP Solutions</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                href="/about"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/explore"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Explore
                            </Link>
                            <Link
                                href="/services"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Services
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Button asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

