import MedicineDetails from "../_components/medicinedetails";

export default async function MedicinePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <section className="w-full px-4 py-8 md:py-20 bg-gradient-to-b from-[#F5E6D3] to-white dark:from-[#1D3557] dark:to-gray-900">
            <MedicineDetails id={id} />
        </section>
    )
}