"use client"

import ContactForm from "@/components/contactform";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { featuredMedicines } from "@/lib/data";
import { ArrowRight, Clock, Shield, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="space-y-4">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Streamline Your Medicine Inventory Management Today
							</h1>
							<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Fast, reliable, and easy-to-use medicine inventory platform. Manage your pharmacy inventory with ease.
							</p>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
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
						<div className="flex items-center justify-center">
							<Image
								src="/placeholder.svg?height=400&width=600"
								alt="Hero Image"
								width={600}
								height={400}
								className="rounded-lg object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
				<div className="container px-4 md:px-6">
					<div className="grid gap-12">
						<div className="text-center space-y-4">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Medicines</h2>
							<p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
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
			<section className="w-full py-12 md:py-24 lg:py-32">
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
				<div className="container px-4 md:px-6">
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
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-12">
						<div className="text-center space-y-4">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
							<p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
								We&apos;re here to help you with any questions about our platform
							</p>
						</div>
						<div className="mx-auto max-w-2xl">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

