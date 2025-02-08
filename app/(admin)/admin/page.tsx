"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import Link from "next/link";

type Medicine = {
    name: string;
    composition: string;
    description: string;
    quantity: number;
    price: number;
};

export default function SuperAdminPage() {
    const [authorized, setAuthorized] = useState(false);
    const [formData, setFormData] = useState<Medicine>({
        name: "",
        composition: "",
        description: "",
        quantity: 0,
        price: 0.0,
    });

    const router = useRouter();

    useEffect(() => {
        const password = prompt("Enter Admin Password:");
        if (password !== "mpsolutions") {
            alert("Incorrect password! Redirecting...");
            router.push("/");
        } else {
            setAuthorized(true);
        }
    }, [router]);

    if (!authorized) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "quantity" ? parseInt(value) || 0 : name === "price" ? parseFloat(value) || 0.0 : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.composition || !formData.description || formData.quantity <= 0 || formData.price <= 0) {
            toast.error("Please fill out all fields correctly!");
            return;
        }

        try {
            const response = await fetch("/api/medicines", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Medicine added successfully!");
                setFormData({ name: "", composition: "", description: "", quantity: 0, price: 0.0 });
            } else {
                toast.error("Failed to add medicine!");
            }
        } catch (error) {
            console.log("Error Occurred: " + error);
            toast.error("Server error. Try again!");
        }
    };

    return (
        <div className="min-h-screen py-20 flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-7xl bg-white p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-1">Admin Panel</h2>
                <div className="flex items-center justify-between">
                    <p className="text-lg text-gray-600 mb-3 w-[70%]">
                        Welcome to the Admin Panel! Here, you can manage the inventory of medicines. Use the form below to add new medicines, or navigate to the section to view and manage all existing medicines.
                    </p>
                    <Link
                        href="/admin/allmedicines"
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-center"
                    >
                        View All Medicines
                    </Link>
                </div>
            </div>
            <Card className="w-full max-w-2xl shadow-lg p-6 bg-white">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">🩺 Add New Medicine</h1>
                <p className="text-gray-600 mb-6">Fill out the form below to add a new medicine to the inventory.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Medicine Name" required />
                    <Input name="composition" value={formData.composition} onChange={handleChange} placeholder="Composition" required />
                    <Textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
                    <Input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
                    <Input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2">Submit Medicine</Button>
                </form>
            </Card>
        </div>
    );
}
