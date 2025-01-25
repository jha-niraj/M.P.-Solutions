import MedicineDetails from "../_components/medicinedetails"

export default async function MedicinePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <section>
            <MedicineDetails id={id} />
        </section>
    )
}

