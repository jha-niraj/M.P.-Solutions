import Link from "next/link";
import { Pill, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black rounded-tl-3xl rounded-tr-3xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center">
                            <Pill className="h-10 w-10 text-white" />
                            <span className="ml-2 text-2xl font-bold text-white">M.P. Solutions</span>
                        </Link>
                        <p className="text-sm text-purple-200 dark:text-gray-300">
                            Streamlining medicine inventory management for pharmacies and healthcare providers.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            {
                                [Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                    <a key={index} href="#" className="text-purple-200 hover:text-white transition-colors duration-300">
                                        <span className="sr-only">Social Media</span>
                                        <Icon className="h-6 w-6" />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {
                                ["Home", "About Us", "Explore", "Services", "Contact"].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase().replace(" ", "-")}`}
                                            className="text-purple-200 hover:text-white transition-colors duration-300"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-2 text-purple-200">
                            <li className="flex items-center">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span>123 Pharmacy Street, Medicine City, MC 12345</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2" />
                                <span>(123) 456-7890</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2" />
                                <span>info@meditrack.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="mt-12 border-t border-purple-500 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-purple-200 dark:text-gray-300">© 2025 M.P. Solutions. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <Button className="bg-white text-purple-700 hover:bg-purple-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                            Subscribe to Newsletter
                        </Button>
                    </div>
                </div> */}
                <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"> <p className="text-base text-gray-300">© 2025 M.P. Solutions. All rights reserved.</p> <div className="flex space-x-6 mt-4 md:mt-0"> { [Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => ( <a key={index} href="#" className="text-gray-100 hover:text-gray-300"> <span className="sr-only">Social Media</span> <Icon className="h-6 w-6" /> </a> )) } </div> </div>
            </div>
        </footer>
    )
}