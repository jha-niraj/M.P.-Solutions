import { prisma } from "@/lib/prisma";

async function main() {
    await prisma.medicine.createMany({
        data: [
            { name: "CEFMOR 200 DT", composition: "Cefixime 200 mg", description: "Antibiotic used to treat infections", quantity: 100, price: 120.5 },
            { name: "CEFMOR 100 DRY", composition: "Cefixime Oral Suspension IP 100 mg", description: "Oral suspension antibiotic", quantity: 150, price: 90.0 },
            { name: "GLANCID GEL SUSP", composition: "Oxetacaine 10 mg + Aluminium Hydroxide 0.291 gm + Magnesium Hydroxide 98 mg", description: "Antacid suspension", quantity: 80, price: 60.0 },
            { name: "G LAC", composition: "Pre and Probiotic Capsules", description: "For gut health and digestion", quantity: 200, price: 85.0 },
            { name: "GLOBIDERM - K", composition: "Ketoconazole 2% + Gentamicin Sulphate 0.1%", description: "Antifungal and antibacterial cream", quantity: 120, price: 150.0 },
            { name: "GLYFOL", composition: "Folic Acid 5 mg + Methylcobalamin 1500 mcg + Pyridoxine HCL 10 mg", description: "Vitamin supplement", quantity: 300, price: 50.0 },
            { name: "LANCE P", composition: "Aceclofenac 100 mg + Paracetamol 325 mg", description: "Pain reliever", quantity: 180, price: 70.0 },
            { name: "LANCE S", composition: "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg", description: "Pain reliever and anti-inflammatory", quantity: 120, price: 85.0 },
            { name: "LANCE MR", composition: "Etoricoxib 60 mg + Thiocolchicoside 4 mg", description: "Muscle relaxant", quantity: 90, price: 140.0 },
            { name: "LANSER D TAB", composition: "Serratiopeptidase 10mg + Diclofenac 50mg", description: "Anti-inflammatory pain reliever", quantity: 140, price: 75.0 },
            { name: "MONTEMOR L", composition: "Montelukast 10 mg + Levocetirizine 5 mg", description: "Antihistamine for allergies", quantity: 200, price: 95.0 },
            { name: "MOXIMOR-C 625", composition: "Amoxycillin Trihydrate 500 mg + Clavulanic Acid 125 mg", description: "Antibiotic", quantity: 150, price: 180.0 },
            { name: "NEMOR-PLUS TAB", composition: "Nimesulide 100 mg + Paracetamol 325 mg", description: "Pain reliever", quantity: 160, price: 60.0 },
            { name: "G PAIN DROP", composition: "Simethicone, Dil oil, Fennel, Oil Drops", description: "For infant colic and gas relief", quantity: 90, price: 40.0 },
            { name: "PARAMOR M FORTE SYP", composition: "Mefenamic Acid 100mg + Paracetamol 250 mg", description: "Pain and fever relief", quantity: 110, price: 55.0 },
            { name: "RABLAN DSR", composition: "Rabeprazole Sodium 20 mg + Domperidone 30 mg", description: "Acid reflux treatment", quantity: 180, price: 105.0 },
            { name: "RABLAN L", composition: "Rabeprazole Sodium 20 mg + Levosulpride 75 mg", description: "Gastric acid reducer", quantity: 140, price: 110.0 },
            { name: "RADICOF LS SYRUP", composition: "Levosalbutamol 1 mg + Ambroxol HCL 30 mg + Guaiphenesin 50 mg", description: "Cough syrup", quantity: 130, price: 75.0 },
            { name: "RADICOLD FORTE SYP", composition: "Paracetamol 250 mg + Phenylephrine 5 mg + Cetirizine 2.5 mg", description: "Cold and fever relief", quantity: 120, price: 70.0 },
            { name: "RADICOLD SYP", composition: "Paracetamol 125 mg + Phenylephrine 2.5 mg + Chlorpheniramine 1 mg", description: "Cold syrup", quantity: 100, price: 65.0 },
            { name: "RADICYP L", composition: "Cyproheptadine Hydrochloride + Tricholine Citrate", description: "Appetite stimulant", quantity: 150, price: 85.0 },
            { name: "RADICOLD N", composition: "Paracetamol 500 mg + Phenylephrine 10 mg + Chlorpheniramine 2 mg", description: "Cold and flu relief", quantity: 140, price: 90.0 },
            { name: "RADIFEN GEL", composition: "Diclofenac Sodium 1% + Linseed oil 3% + Menthol 5%", description: "Pain relief gel", quantity: 180, price: 125.0 },
            { name: "RADIGEST 500 INJ", composition: "Hydroxyprogesterone 500 mg /2ml", description: "Hormonal injection", quantity: 50, price: 300.0 },
            { name: "RADILAN 40 SR TAB", composition: "Isoxsuprine 40 mg", description: "Vasodilator", quantity: 130, price: 100.0 },
            { name: "ARGIMOR SACHET", composition: "L-Arginine 3 gm & Lycopene 2500 mcg", description: "Nutritional supplement", quantity: 160, price: 75.0 },
            { name: "CALMOR TAB", composition: "Calcium Carbonate 500 mg + Calcitrol 0.25 mcg + Zinc 7.5 mg", description: "Calcium supplement", quantity: 140, price: 95.0 },
            { name: "PROTINIS POWDER", composition: "Protein supplement with vitamins", description: "Nutritional supplement powder", quantity: 200, price: 150.0 },
            { name: "PROTINIS SYP", composition: "Protein Hydrolysate + Vitamins", description: "Liquid protein supplement", quantity: 170, price: 120.0 },
            { name: "RADIFIT CAP", composition: "Lycopene + Amino acids + Vitamins", description: "Health supplement", quantity: 130, price: 110.0 }
        ]
    });

    console.log("✅ Medicine data inserted successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
