"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "react-hot-toast";

type Medicine = {
    id: string;
    name: string;
    composition: string;
    quantity: number;
    price: number;
};

export default function AdminMedicinePage() {
    const [medicines, setMedicines] = useState<Medicine[]>([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchMedicines();
    }, []);

    const fetchMedicines = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/api/allmedicines");
            setMedicines(response.data);
        } catch (error) {
            console.log("Error Occurred: " + error);
            toast.error("Failed to fetch medicines.");
        } finally {
            setLoading(false);
        }
    };

    const updateMedicine = async (id: string, quantity: number, price: number) => {
        try {
            const response = await axios.put("/api/updatemedicine", {
                id,
                quantity,
                price,
            });

            if (response.status === 200) {
                toast.success("Medicine updated successfully!");
                fetchMedicines();
            } else {
                toast.error("Failed to update medicine.");
            }
        } catch (error) {
            console.log("Error Occurred: " + error);
            toast.error("Error updating medicine.");
        }
    };

    const filteredMedicines = medicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen max-w-7xl mx-auto p-6 py-20 bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">📦 Manage Inventory</h1>
            <p className="text-gray-600 mb-6">Update medicine quantity & price below.</p>

            <Input
                type="text"
                placeholder="🔍 Search medicine..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 w-full max-w-md"
            />

            <div className="bg-white shadow-lg rounded-lg p-4 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-200">
                            <TableHead>Name</TableHead>
                            <TableHead>Composition</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Price (₹)</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {
                            filteredMedicines.map((medicine) => (
                                <TableRow key={medicine.id}>
                                    <TableCell className="font-semibold">{medicine.name}</TableCell>
                                    <TableCell>{medicine.composition}</TableCell>
                                    <TableCell>
                                        <Input
                                            type="number"
                                            value={medicine.quantity}
                                            onChange={(e) =>
                                                setMedicines((prev) =>
                                                    prev.map((m) =>
                                                        m.id === medicine.id ? { ...m, quantity: +e.target.value } : m
                                                    )
                                                )
                                            }
                                            className="w-24"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Input
                                            type="number"
                                            step="0.01"
                                            value={medicine.price}
                                            onChange={(e) =>
                                                setMedicines((prev) =>
                                                    prev.map((m) =>
                                                        m.id === medicine.id ? { ...m, price: +e.target.value } : m
                                                    )
                                                )
                                            }
                                            className="w-24"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            onClick={() => updateMedicine(medicine.id, medicine.quantity, medicine.price)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white"
                                        >
                                            Save
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                {
                    loading && (
                        <p className="text-center text-gray-600 mt-4">Loading medicines...</p>
                    )
                }
            </div>
        </div>
    );
}
