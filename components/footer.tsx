import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pill, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center">
                            <Pill className="h-8 w-8 text-primary" />
                            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">MediTrack</span>
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Streamlining medicine inventory management for pharmacies and healthcare providers.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {
                                ["Home", "About Us", "Explore", "Services", "Contact"].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase().replace(" ", "-")}`}
                                            className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li>123 Pharmacy Street</li>
                            <li>Medicine City, MC 12345</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: info@meditrack.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Newsletter
                        </h3>
                        <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                            Stay updated with our latest news and offers.
                        </p>
                        <form className="flex space-x-2">
                            <Input type="email" placeholder="Your email" className="flex-grow" />
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-gray-500 dark:text-gray-400">© 2025 MediTrack. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {
                            [Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a key={index} href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <span className="sr-only">Social Media</span>
                                    <Icon className="h-6 w-6" />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

