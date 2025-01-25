import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuredMedicines } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function MedicineDetails({ id }: { id: string }) {
    const medicine = featuredMedicines.find((m) => m.id === Number.parseInt(id))

    if (!medicine) {
        notFound()
    }

    return (
        <div className="container px-4 py-12 md:py-24">
            <Card>
                <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="relative aspect-square">
                            <Image
                                src={medicine.image || "/placeholder.svg"}
                                alt={medicine.name}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold">{medicine.name}</h1>
                                <p className="text-2xl font-bold text-primary">${medicine.price.toFixed(2)}</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="font-semibold">Description</h2>
                                <p className="text-gray-500 dark:text-gray-400">{medicine.description}</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="font-semibold">Quantity Available</h2>
                                <p className="text-gray-500 dark:text-gray-400">{medicine.quantity} units in stock</p>
                            </div>
                            <Button size="lg" className="w-full">
                                Contact for Purchase
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}