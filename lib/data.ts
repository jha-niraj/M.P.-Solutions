export const featuredMedicines = [
    {
        id: 1,
        name: "Paracetamol 500mg",
        description: "Pain reliever and fever reducer",
        price: 150,
        quantity: 100,
        image: "/placeholder.svg?height=400&width=400",
        category: "painkillers"
    },
    {
        id: 2,
        name: "Amoxicillin 250mg",
        description: "Antibiotic for bacterial infections",
        price: 450,
        quantity: 50,
        image: "/placeholder.svg?height=400&width=400",
        category: "antibiotics"
    },
    {
        id: 3,
        name: "Omeprazole 20mg",
        description: "Reduces stomach acid production",
        price: 350,
        quantity: 75,
        image: "/placeholder.svg?height=400&width=400",
        category: "gastrointestinal"
    },
    {
        id: 4,
        name: "Ibuprofen 400mg",
        description: "Anti-inflammatory pain reliever",
        price: 250,
        quantity: 60,
        image: "/placeholder.svg?height=400&width=400",
        category: "painkillers"
    },
    {
        id: 5,
        name: "Cetirizine 10mg",
        description: "Antihistamine for allergy relief",
        price: 200,
        quantity: 30,
        image: "/placeholder.svg?height=400&width=400",
        category: "allergy"
    },
    {
        id: 6,
        name: "Metformin 500mg",
        description: "Oral diabetes medicine",
        price: 550,
        quantity: 90,
        image: "/placeholder.svg?height=400&width=400",
        category: "diabetes"
    },
    {
        id: 7,
        name: "Vitamin D3 1000IU",
        description: "Supports bone health and immune function",
        price: 650,
        quantity: 120,
        image: "/placeholder.svg?height=400&width=400",
        category: "vitamins"
    },
    {
        id: 8,
        name: "Atorvastatin 20mg",
        description: "Lowers cholesterol and triglycerides",
        price: 750,
        quantity: 30,
        image: "/placeholder.svg?height=400&width=400",
        category: "cardiovascular"
    }
]

export type Medicine = (typeof featuredMedicines)[0]