"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))

        alert("Message sent successfully! We'll get back to you soon.")
        setIsSubmitting(false)
        e.currentTarget.reset()
    }

    return (
        <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
                <Input placeholder="Name" required disabled={isSubmitting} />
            </div>
            <div className="grid gap-2">
                <Input type="email" placeholder="Email" required disabled={isSubmitting} />
            </div>
            <div className="grid gap-2">
                <Input type="tel" placeholder="Phone Number" required disabled={isSubmitting} />
            </div>
            <div className="grid gap-2">
                <Textarea placeholder="Your message" required disabled={isSubmitting} className="min-h-[150px]" />
            </div>
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    )
}

