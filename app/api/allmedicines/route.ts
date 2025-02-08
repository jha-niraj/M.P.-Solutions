import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const medicines = await prisma.medicine.findMany({
            orderBy: {
                updatedAt: "desc"
            }
        });
        return NextResponse.json(medicines);
    } catch (error) {
        console.log("Error Occurred: " + error);
        return NextResponse.json({ error: "Failed to fetch medicines." }, { status: 500 });
    }
}
