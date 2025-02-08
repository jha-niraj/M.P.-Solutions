import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: NextRequest) {
    try {
        const { id, quantity, price } = await req.json();

        if (!id || quantity < 0 || price < 0) {
            return NextResponse.json({ error: "Invalid data provided." }, { status: 400 });
        }

        const updatedMedicine = await prisma.medicine.update({
            where: { id },
            data: { quantity, price },
        });

        return NextResponse.json(updatedMedicine);
    } catch (error) {
        console.log("Error Occurred: " + error);
        return NextResponse.json({ error: "Failed to update medicine." }, { status: 500 });
    }
}