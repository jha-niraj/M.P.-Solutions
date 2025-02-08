"use client"

import { useState, useEffect, useRef } from "react";
import ContactForm from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { featuredMedicines } from "@/lib/data";
import { ArrowRight, Clock, Search, Shield, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import heroSectionImage from "@/components/images/hero-section-image.jpeg";
import { motion } from "framer-motion";

const fadeInUp = {
	initial: { opacity: 0, y: -40 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 1 }
};
const fadeInLeft = {
	initial: { opacity: 0, x: -60 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 1 }
};
const fadeInRight = {
	initial: { opacity: 0, x: 60 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 1 }
};
const zoomIn = {
	initial: { opacity: 0, scale: 0.8 },
	animate: { opacity: 1, scale: 1 },
	transition: { duration: 1 }
};
const staggerChildren = {
	animate: {
		transition: {
			staggerChildren: 0.8
		}
	}
};

const medicines: string[] = [
	"Aspirin", "Ibuprofen", "Paracetamol", "Amoxicillin", "Lisinopril",
	"Metformin", "Omeprazole", "Atorvastatin", "Amlodipine", "Metoprolol"
];

export default function App() {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Searching for:', searchQuery);
	};

	return (
		<motion.div
			className="flex flex-col w-full min-h-screen"
			initial="initial"
			animate="animate"
			variants={staggerChildren}
		>
			<motion.section
				className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#F5E6D3] to-white dark:from-[#1D3557] dark:to-gray-900"
				variants={fadeInUp}
			>
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					<div className="grid gap-12 lg:grid-cols-2 items-center">
						<div className="space-y-6">
							<motion.h1
								className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white"
								variants={fadeInLeft}
							>
								Streamline Your Medicine Inventory Management
							</motion.h1>
							<motion.p
								className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300"
								variants={fadeInUp}
							>
								Fast, reliable, and easy-to-use medicine inventory platform. Manage your pharmacy inventory with ease.
							</motion.p>
							<form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
								<Input
									type="search"
									placeholder="Search medicines..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="flex-grow"
								/>
								<Button type="submit" size="icon">
									<Search className="h-4 w-4" />
									<span className="sr-only">Search</span>
								</Button>
							</form>
							<div className="flex flex-col gap-4 min-[400px]:flex-row">
								<Link href="/explore">
									<Button size="lg" className="w-full min-[400px]:w-auto">
										Explore Medicines
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
								<Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
									Learn More
								</Button>
							</div>
						</div>
						<motion.div 
							className="flex items-center justify-center"
							variants={fadeInRight}
						>
							<Image
								src={heroSectionImage}
								alt="Hero Image"
								width={600}
								height={200}
								className="h-96 rounded-lg object-cover shadow-lg hover:scale-105 transition-all duration-200"
								priority
							/>
						</motion.div>
					</div>
					<motion.div 
						className="mt-12 overflow-hidden"
						variants={zoomIn}
					>
						<Marquee medicines={medicines} />
					</motion.div>
				</div>
			</motion.section>
			<section className="py-12 bg-gradient-to-t from-[#D1D9CE] to-white dark:from-[#8E7F7F] dark:to-gray-900">
				<div className="max-w-7xl mx-auto w-full px-4 md:px-6">
					<div className="grid gap-12">
						<div className="text-center space-y-4">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Medicines</h2>
							<p className="mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
								Discover our most popular and essential medicines
							</p>
						</div>
						<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
							{
								[
									{
										name: "Pain Relief Plus",
										category: "Pain Management",
										image: "/placeholder.svg?height=400&width=400",
									},
									{
										name: "Vital Vitamins",
										category: "Supplements",
										image: "/placeholder.svg?height=400&width=400",
									},
									{
										name: "Cold & Flu Relief",
										category: "Seasonal Care",
										image: "/placeholder.svg?height=400&width=400",
									},
									{
										name: "Allergy Defense",
										category: "Allergy Relief",
										image: "/placeholder.svg?height=400&width=400",
									},
								].map((medicine, index) => (
									<Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
										<div className="aspect-square relative overflow-hidden">
											<Image
												src={medicine.image || "/placeholder.svg"}
												alt={medicine.name}
												fill
												className="object-cover transition-transform group-hover:scale-105"
											/>
										</div>
										<CardContent className="p-4 text-center bg-white dark:bg-gray-800">
											<h3 className="font-semibold text-lg mb-1">{medicine.name}</h3>
											<p className="text-sm text-gray-500 dark:text-gray-400">{medicine.category}</p>
										</CardContent>
									</Card>
								))
							}
						</div>
						<div className="text-center">
							<Button size="lg" variant="outline" asChild>
								<Link href="/explore">
									View All Medicines
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
			<section className="max-w-7xl mx-auto py-12">
				<div className="container px-4 md:px-6">
					<div className="grid gap-12">
						<div className="text-center space-y-4">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
								Experience lightning-fast access to your medicine inventory
							</h2>
							<p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
								Optimize your inventory management with our cutting-edge platform
							</p>
						</div>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							{
								[
									{
										title: "Speed",
										description: "Lightning-fast access to your inventory data",
										icon: <Zap className="h-10 w-10" />,
									},
									{
										title: "Efficiency",
										description: "Streamlined processes for better management",
										icon: <Clock className="h-10 w-10" />,
									},
									{
										title: "Reliability",
										description: "Secure and stable platform you can trust",
										icon: <Shield className="h-10 w-10" />,
									},
									{
										title: "User-Friendly",
										description: "Intuitive interface for all users",
										icon: <Users className="h-10 w-10" />,
									},
								].map((feature, index) => (
									<Card key={index} className="relative overflow-hidden">
										<CardContent className="p-6">
											<div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
												{feature.icon}
											</div>
											<h3 className="font-bold">{feature.title}</h3>
											<p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
										</CardContent>
									</Card>
								))
							}
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					<div className="grid gap-12">
						<div className="text-center space-y-4">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Discover Our Featured Medicines Today</h2>
							<p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
								Explore our carefully curated selection of essential medicines
							</p>
						</div>
						<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
							{
								featuredMedicines.map((medicine, index) => (
									<Link key={index} href={`/medicine/${medicine.id}`}>
										<Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
											<div className="aspect-square relative">
												<Image
													src={medicine.image || "/placeholder.svg"}
													alt={medicine.name}
													fill
													className="object-cover"
												/>
											</div>
											<CardContent className="p-4">
												<h3 className="font-bold">{medicine.name}</h3>
												<p className="text-sm text-gray-500 dark:text-gray-400">${medicine.price.toFixed(2)}</p>
											</CardContent>
											<CardFooter className="p-4 pt-0">
												<Button variant="ghost" className="w-full">
													View Details
												</Button>
											</CardFooter>
										</Card>
									</Link>
								))
							}
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F5E6D3] to-white dark:from-[#1D3557] dark:to-gray-900">
				<ContactForm />
			</section>
		</motion.div>
	)
}

function Marquee({ medicines }: { medicines: string[] }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		const inner = innerRef.current;
		if (!container || !inner) return;

		const totalWidth = inner.offsetWidth;
		let currentPosition = 0;

		const animate = () => {
			currentPosition += 1;
			if (currentPosition >= totalWidth / 2) {
				currentPosition = 0;
			}
			container.scrollLeft = currentPosition;
			requestAnimationFrame(animate);
		};

		const animationFrame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrame);
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative h-16 bg-gray-50 flex items-center dark:bg-gray-800 overflow-hidden"
		>
			<div
				ref={innerRef}
				className="flex whitespace-nowrap gap-4"
				style={{ minWidth: '200%' }}  // Ensure content is at least twice the container width
			>
				{[...Array(2)].map((_, index) => (
					<React.Fragment key={index}>
						{medicines.map((medicine, medicineIndex) => (
							<Badge
								key={`${index}-${medicineIndex}`}
								className="inline-block px-8 text-md font-medium"
							>
								{medicine}
							</Badge>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}