import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Check, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        inquiryType: 'greeting',
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to submit');

            toast({
                title: "Thanks for reaching out! We'll get back to you soon."
            });
            setFormData({ inquiryType: 'greeting', name: '', email: '', message: '' });
        } catch (error) {
            toast({
                title: "Failed to send message. Please try again.",
            });
            console.log("Error occurred while sending: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold tracking-tight">
                                Let&apos;s Start a Conversation
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Transform your digital presence with our expert services in web development,
                                design, and video editing.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <RadioGroup
                                defaultValue="greeting"
                                className="flex gap-4"
                                onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="greeting" id="greeting" />
                                    <Label htmlFor="greeting" className="cursor-pointer">
                                        Friendly Hello
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="quote" id="quote" />
                                    <Label htmlFor="quote" className="cursor-pointer">
                                        Project Inquiry
                                    </Label>
                                </div>
                            </RadioGroup>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="mt-1"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="mt-1"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="mt-1 h-20"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                className="flex items-center justify-center w-full px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
                                disabled={isLoading}
                            >
                                {
                                    isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Check className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )
                                }
                            </button>
                        </form>
                    </div>
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl" />
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 400 400"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" className="text-gray-200 dark:text-gray-700" />
                            <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="2" className="text-blue-500/30" />
                            <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="2" className="text-purple-500/30" />
                            <g className="text-gray-600 dark:text-gray-300">
                                {/* Shelf */}
                                <rect x="100" y="140" width="200" height="10" rx="2" fill="currentColor" opacity="0.3" />
                                <rect x="100" y="220" width="200" height="10" rx="2" fill="currentColor" opacity="0.3" />
                                <rect x="100" y="300" width="200" height="10" rx="2" fill="currentColor" opacity="0.3" />

                                {/* Medicine Bottles */}
                                <rect x="120" y="100" width="30" height="40" rx="4" fill="currentColor" opacity="0.2" />
                                <rect x="160" y="100" width="30" height="40" rx="4" fill="currentColor" opacity="0.2" />
                                <rect x="200" y="100" width="30" height="40" rx="4" fill="currentColor" opacity="0.2" />

                                <rect x="130" y="180" width="30" height="40" rx="4" fill="currentColor" opacity="0.2" />
                                <rect x="170" y="180" width="30" height="40" rx="4" fill="currentColor" opacity="0.2" />
                                <rect x="210" y="180" width="30" height="40" rx="4" fill="currentColor" opacity="0.2" />

                                <rect x="140" y="260" width="30" height="40" rx="4" fill="currentColor" opacity="0.2" />
                                <rect x="180" y="260" width="30" height="40" rx="4" fill="currentColor" opacity="0.2" />
                                <rect x="220" y="260" width="30" height="40" rx="4" fill="currentColor" opacity="0.2" />

                                {/* Pills */}
                                <circle cx="280" cy="120" r="15" fill="currentColor" opacity="0.1" />
                                <circle cx="310" cy="120" r="15" fill="currentColor" opacity="0.1" />

                                <circle cx="290" cy="200" r="15" fill="currentColor" opacity="0.1" />
                                <circle cx="320" cy="200" r="15" fill="currentColor" opacity="0.1" />

                                <circle cx="300" cy="280" r="15" fill="currentColor" opacity="0.1" />
                                <circle cx="330" cy="280" r="15" fill="currentColor" opacity="0.1" />

                                {/* Medical Cross */}
                                <path d="M70 180 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 z" fill="currentColor" opacity="0.3" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;