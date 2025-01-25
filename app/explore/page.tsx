"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { featuredMedicines } from "@/lib/data"

export default function ExplorePage() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredMedicines = featuredMedicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <div className="container px-4 py-12 md:py-24">
            <div className="grid gap-12">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Medicines</h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                        Search our extensive catalog of medicines
                    </p>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                        placeholder="Search medicines..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredMedicines.map((medicine) => (
                        <Link key={medicine.id} href={`/medicine/${medicine.id}`}>
                            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="aspect-square relative">
                                    <Image src={medicine.image || "/placeholder.svg"} alt={medicine.name} fill className="object-cover" />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-bold">{medicine.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">${medicine.price.toFixed(2)}</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <Button variant="ghost" className="w-full">
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                    {filteredMedicines.length === 0 && (
                        <p className="col-span-full text-center text-gray-500">No medicines found matching your search.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

