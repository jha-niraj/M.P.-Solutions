"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowRight } from "lucide-react"
import { featuredMedicines } from "@/lib/data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import medicineImage from "@/components/images/hero-section-image.jpeg";
import { motion } from "framer-motion"

export default function ExplorePage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("all")
    const [priceFilter, setPriceFilter] = useState("all")

    const filteredMedicines = featuredMedicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (categoryFilter === "all" || medicine.category === categoryFilter) &&
        (priceFilter === "all" ||
            (priceFilter === "0-500" && medicine.price <= 500) ||
            (priceFilter === "501-1000" && medicine.price > 500 && medicine.price <= 1000) ||
            (priceFilter === "1001+" && medicine.price > 1000))
    )

    return (
        <div className="w-full px-4 py-8 md:py-20 lg:py-28">
            <div className="max-w-7xl mx-auto grid gap-8">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore Medicines</h1>
                    <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed dark:text-gray-400">
                        Search our extensive catalog of medicines available in Nepal
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
                    <div className="relative flex-grow items-center justify-center">
                        <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                        <Input
                            placeholder="Search medicines..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <Select onValueChange={(value) => setCategoryFilter(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="painkillers">Painkillers</SelectItem>
                            <SelectItem value="antibiotics">Antibiotics</SelectItem>
                            <SelectItem value="vitamins">Vitamins</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select onValueChange={(value) => setPriceFilter(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Price Range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Prices</SelectItem>
                            <SelectItem value="0-500">Rs. 0 - 500</SelectItem>
                            <SelectItem value="501-1000">Rs. 501 - 1000</SelectItem>
                            <SelectItem value="1001+">Rs. 1001+</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        filteredMedicines.map((medicine, index: number) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                key={index}
                            >
                                <Link href={`/medicine/${medicine.id}`}>
                                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="aspect-square relative">
                                            <Image src={medicineImage} alt={medicine.name} fill className="object-cover" />
                                        </div>
                                        <CardContent className="p-3">
                                            <h3 className="font-bold text-sm">{medicine.name}</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Rs. {medicine.price.toFixed(2)}</p>
                                        </CardContent>
                                        <CardFooter className="p-3 pt-0 group">
                                            <Button variant="ghost" className="w-full text-sm group transition-all duration-300">
                                                View Details
                                                <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-2 transition-all" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))
                    }
                    {
                        filteredMedicines.length === 0 && (
                            <p className="col-span-full text-center text-gray-500">No medicines found matching your criteria.</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}