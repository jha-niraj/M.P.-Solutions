export const featuredMedicines = [
    {
        id: 1,
        name: "Paracetamol 500mg",
        description: "Pain reliever and fever reducer",
        price: 9.99,
        quantity: 100,
        image: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 2,
        name: "Amoxicillin 250mg",
        description: "Antibiotic for bacterial infections",
        price: 19.99,
        quantity: 50,
        image: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 3,
        name: "Omeprazole 20mg",
        description: "Reduces stomach acid production",
        price: 14.99,
        quantity: 75,
        image: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 4,
        name: "Ibuprofen 400mg",
        description: "Anti-inflammatory pain reliever",
        price: 12.99,
        quantity: 60,
        image: "/placeholder.svg?height=400&width=400",
    },
]

export type Medicine = (typeof featuredMedicines)[0]

