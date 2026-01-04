"use client";

import Image from "next/image";
import {
    Globe,
    Smartphone,
    Search,
    RefreshCw,
    ShoppingCart,
    Target,
    Zap,
    Heart,
    Shield,
    Users,
    Award,
    Clock,
    CheckCircle,
    ArrowRight,
    Sparkles,
    Code,
    MessageSquare,
    Star,
    Lightbulb,
    Rocket,
    HeadphonesIcon
} from "lucide-react";
import ScrollReveal, { StaggerReveal } from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Services data
const services = [
    {
        icon: Globe,
        title: "Custom Website Development",
        description: "High-performance websites built with Next.js and Tailwind CSS for speed and scalability.",
        gradient: "from-primary to-blue-400",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform apps for Android & iOS that deliver exceptional user experiences.",
        gradient: "from-accent to-emerald-400",
    },
    {
        icon: Search,
        title: "SEO & Website Optimization",
        description: "Boost your search rankings and drive organic traffic with technical SEO expertise.",
        gradient: "from-secondary to-purple-400",
    },
    {
        icon: RefreshCw,
        title: "WordPress to Custom Code",
        description: "Migrate from WordPress to blazing-fast custom coded solutions with full control.",
        gradient: "from-orange-500 to-amber-400",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Development",
        description: "Feature-rich online stores with secure payments, inventory management, and analytics.",
        gradient: "from-pink-500 to-rose-400",
    },
];

// Why choose us
const whyChooseUs = [
    {
        icon: Target,
        title: "Results-Driven Approach",
        description: "We focus on delivering measurable outcomes that directly impact your business growth and ROI.",
    },
    {
        icon: Zap,
        title: "Fast Turnaround",
        description: "Quick delivery without compromising quality. We respect your time and deadlines.",
    },
    {
        icon: Shield,
        title: "Transparent Communication",
        description: "Regular updates, clear timelines, and honest feedback throughout your project journey.",
    },
    {
        icon: Heart,
        title: "Dedicated Support",
        description: "We're not just developers; we're your long-term digital partners committed to your success.",
    },
];

// Process steps
const processSteps = [
    {
        icon: MessageSquare,
        number: "01",
        title: "Discovery",
        description: "We understand your business, goals, and requirements through detailed discussions.",
    },
    {
        icon: Lightbulb,
        number: "02",
        title: "Planning & Design",
        description: "Creating wireframes, designs, and a detailed roadmap tailored to your needs.",
    },
    {
        icon: Code,
        number: "03",
        title: "Development",
        description: "Building your solution with modern technologies and regular progress updates.",
    },
    {
        icon: Rocket,
        number: "04",
        title: "Launch",
        description: "Thorough testing, optimization, and smooth deployment of your project.",
    },
    {
        icon: HeadphonesIcon,
        number: "05",
        title: "Support",
        description: "Ongoing maintenance, updates, and support to keep your project running smoothly.",
    },
];

// Technologies
const technologies = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Supabase", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "Figma", category: "Design" },
    { name: "Vercel", category: "Hosting" },
    { name: "AWS", category: "Cloud" },
];

// Values
const values = [
    {
        icon: Star,
        title: "Excellence",
        description: "We deliver nothing but the best quality in every project we undertake.",
        gradient: "from-primary to-blue-400",
    },
    {
        icon: Users,
        title: "Client-First",
        description: "Your success is our priority. We treat every project as our own.",
        gradient: "from-accent to-emerald-400",
    },
    {
        icon: Zap,
        title: "Innovation",
        description: "We stay ahead with the latest technologies and industry best practices.",
        gradient: "from-secondary to-purple-400",
    },
    {
        icon: Shield,
        title: "Integrity",
        description: "Honest communication, transparent pricing, and ethical business practices.",
        gradient: "from-orange-500 to-amber-400",
    },
];

// Stats
const stats = [
    { value: "60+", label: "Happy Clients", icon: Users },
    { value: "150+", label: "Projects Delivered", icon: Award },
    { value: "7+", label: "Years Experience", icon: Clock },
    { value: "98%", label: "Client Satisfaction", icon: Star },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 bg-gradient-to-b from-dark via-dark to-secondary/20 text-white overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-20 left-10 w-3 h-3 bg-primary/50 rounded-full animate-float" />
                    <div className="absolute top-40 right-20 w-2 h-2 bg-accent/50 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
                    <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-secondary/50 rounded-full animate-float" style={{ animationDelay: "1s" }} />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <Sparkles size={18} className="text-accent" />
                                <span className="text-sm font-medium">About Prizm Technologies</span>
                            </div>
                            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Your Trusted Partner in{" "}
                                <span className="text-gradient">Digital Excellence</span>
                            </h1>
                            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                                We&apos;re a boutique digital agency specializing in custom web and mobile development.
                                Based in India, we serve clients globally across USA, UK, Europe, UAE, and Australia.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all group"
                                >
                                    Start Your Project
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
                                >
                                    Explore Services
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-white relative -mt-10 z-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                                            <stat.icon className="text-primary" size={24} />
                                        </div>
                                        <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                                        <div className="text-sm text-foreground/60">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Who We Are Section */}
                <section className="py-24 bg-gradient-to-b from-white to-background relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <ScrollReveal direction="left">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-[2rem] blur-2xl" />
                                    <div className="relative bg-gradient-to-br from-dark via-dark to-secondary/30 rounded-3xl p-8 md:p-10 text-white overflow-hidden">
                                        <div className="absolute inset-0 opacity-10">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary to-secondary p-0.5">
                                                    <div className="w-full h-full rounded-[10px] overflow-hidden bg-dark flex items-center justify-center">
                                                        <Image
                                                            src="/images/Prizm Technologies Logo.png"
                                                            alt="Prizm Technologies Logo"
                                                            width={60}
                                                            height={60}
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="font-heading text-2xl font-bold">Prizm Technologies</h3>
                                                    <p className="text-white/60">prizmtechnologies.in</p>
                                                </div>
                                            </div>
                                            <p className="text-white/80 leading-relaxed mb-6">
                                                &quot;We believe every business deserves a powerful digital presence. Our mission is to
                                                transform your ideas into exceptional digital experiences that drive growth and success.&quot;
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-gradient-to-br from-accent to-emerald-400 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold">PT</span>
                                                </div>
                                                <div>
                                                    <div className="font-semibold">Prizm Technologies Team</div>
                                                    <div className="text-sm text-white/60">Founder & Lead Developer</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="right" delay={200}>
                                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                                    <Users size={18} />
                                    <span className="text-sm font-semibold">Who We Are</span>
                                </div>
                                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
                                    A Boutique Agency with{" "}
                                    <span className="text-gradient">Global Reach</span>
                                </h2>
                                <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                                    Prizm Technologies is a specialized digital agency focused on delivering premium web and mobile
                                    development solutions. As a boutique agency, we offer personalized attention and dedicated
                                    service that larger agencies simply can&apos;t match.
                                </p>
                                <p className="text-foreground/70 mb-8 leading-relaxed">
                                    Based in India, we proudly serve clients across the globe — from startups in Silicon Valley
                                    to established businesses in London, Dubai, and Sydney. Our international experience means
                                    we understand diverse markets and can deliver solutions that resonate with your target audience.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {["USA & Canada", "United Kingdom", "Europe", "UAE & Middle East", "Australia", "Global Remote"].map((region, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle size={20} className="text-accent flex-shrink-0" />
                                            <span className="text-foreground/70">{region}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* What We Do Section */}
                <section id="services" className="py-24 bg-background relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full mb-4">
                                <Code size={18} />
                                <span className="text-sm font-semibold">What We Do</span>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
                                Services That{" "}
                                <span className="text-gradient">Drive Results</span>
                            </h2>
                            <p className="text-foreground/70 text-lg">
                                We specialize in creating digital solutions that help businesses grow and succeed in the modern marketplace.
                            </p>
                        </ScrollReveal>

                        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={100}>
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="text-white" size={28} />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-dark mb-3">{service.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </StaggerReveal>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
                                <Award size={18} />
                                <span className="text-sm font-semibold">Why Choose Us</span>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
                                What Sets Us{" "}
                                <span className="text-gradient">Apart</span>
                            </h2>
                            <p className="text-foreground/70 text-lg">
                                We&apos;re not just another agency. Here&apos;s why clients choose Prizm Technologies for their digital projects.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-8">
                            {whyChooseUs.map((item, index) => (
                                <ScrollReveal key={index} delay={index * 100}>
                                    <div className="flex gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                        <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                                            <item.icon className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-xl font-bold text-dark mb-2">{item.title}</h3>
                                            <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Process Section */}
                <section className="py-24 bg-gradient-to-b from-background to-white relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
                                <Rocket size={18} />
                                <span className="text-sm font-semibold">Our Process</span>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
                                How We{" "}
                                <span className="text-gradient">Work</span>
                            </h2>
                            <p className="text-foreground/70 text-lg">
                                Our proven 5-step process ensures successful project delivery every time.
                            </p>
                        </ScrollReveal>

                        <StaggerReveal className="grid md:grid-cols-3 lg:grid-cols-5 gap-6" staggerDelay={100}>
                            {processSteps.map((step, index) => (
                                <div key={index} className="relative group">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center h-full">
                                        <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                                        <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <step.icon className="text-white" size={24} />
                                        </div>
                                        <h3 className="font-heading text-lg font-bold text-dark mb-2">{step.title}</h3>
                                        <p className="text-sm text-foreground/70">{step.description}</p>
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                            <ArrowRight size={12} className="text-primary" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </StaggerReveal>
                    </div>
                </section>

                {/* Tools & Technologies Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                                <Code size={18} />
                                <span className="text-sm font-semibold">Tech Stack</span>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
                                Tools &{" "}
                                <span className="text-gradient">Technologies</span>
                            </h2>
                            <p className="text-foreground/70 text-lg">
                                We use cutting-edge technologies to build fast, scalable, and maintainable solutions.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="flex flex-wrap justify-center gap-4">
                                {technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="group bg-gradient-to-r from-gray-50 to-white px-6 py-4 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="font-semibold text-dark group-hover:text-primary transition-colors">{tech.name}</div>
                                        <div className="text-xs text-foreground/50">{tech.category}</div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-gradient-to-b from-background to-white relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
                                <Heart size={18} />
                                <span className="text-sm font-semibold">Our Values</span>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
                                What We{" "}
                                <span className="text-gradient">Stand For</span>
                            </h2>
                            <p className="text-foreground/70 text-lg">
                                Our core values guide everything we do and how we work with our clients.
                            </p>
                        </ScrollReveal>

                        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={100}>
                            {values.map((value, index) => (
                                <div key={index} className="text-center group">
                                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                        <value.icon className="text-white" size={32} />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-dark mb-3">{value.title}</h3>
                                    <p className="text-foreground/70">{value.description}</p>
                                </div>
                            ))}
                        </StaggerReveal>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-dark via-dark to-secondary/30 text-white relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal className="text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <Sparkles size={18} className="text-accent" />
                                <span className="text-sm font-medium">Ready to Get Started?</span>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                                Let&apos;s Build Something{" "}
                                <span className="text-gradient">Amazing Together</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                                Whether you need a stunning website, a powerful mobile app, or want to migrate from WordPress —
                                we&apos;re here to help you succeed.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all group"
                                >
                                    Start Your Project
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="https://wa.me/919873667336"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#25D366]/30 transition-all"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp Us
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
