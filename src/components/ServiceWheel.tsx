"use client";

import { useState, useEffect } from "react";
import { Globe, Smartphone, Search, RefreshCw, Play, ArrowRight } from "lucide-react";

const services = [
    {
        id: 1,
        name: "Website Development",
        shortName: "Web Dev",
        color: "#2563EB",
        gradientFrom: "#2563EB",
        gradientTo: "#3B82F6",
        icon: Globe,
        stat: "150+",
        statLabel: "Websites Built",
        description: "Custom websites built with Next.js, React & modern technologies for maximum performance.",
    },
    {
        id: 2,
        name: "Mobile Apps",
        shortName: "Mobile",
        color: "#22C55E",
        gradientFrom: "#22C55E",
        gradientTo: "#4ADE80",
        icon: Smartphone,
        stat: "50+",
        statLabel: "Apps Delivered",
        description: "Cross-platform mobile apps for iOS & Android with React Native.",
    },
    {
        id: 3,
        name: "SEO Optimization",
        shortName: "SEO",
        color: "#4F46E5",
        gradientFrom: "#4F46E5",
        gradientTo: "#818CF8",
        icon: Search,
        stat: "200%",
        statLabel: "Traffic Growth",
        description: "Boost your search rankings with our proven SEO strategies.",
    },
    {
        id: 4,
        name: "WP Migration",
        shortName: "Migration",
        color: "#EC4899",
        gradientFrom: "#EC4899",
        gradientTo: "#F472B6",
        icon: RefreshCw,
        stat: "85%",
        statLabel: "Speed Boost",
        description: "Transform slow WordPress sites into blazing-fast coded websites.",
    },
];

export default function ServiceWheel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

    // Auto-rotate when not hovered
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % services.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const handleServiceClick = (index: number) => {
        setActiveIndex(index);
    };

    const activeService = services[activeIndex];

    // Calculate positions for circular layout
    const getPosition = (index: number, total: number, radius: number) => {
        const angle = (index * 360) / total - 90; // Start from top
        const radian = (angle * Math.PI) / 180;
        return {
            x: Math.cos(radian) * radius,
            y: Math.sin(radian) * radius,
        };
    };

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
                            Our Expertise
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-2 mb-6 leading-tight">
                            Driving Digital{" "}
                            <span className="text-gradient">Growth</span> for Your Business
                        </h2>
                        <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                            We combine cutting-edge technology with creative excellence to deliver
                            solutions that transform businesses and drive measurable results.
                        </p>

                        {/* Active Service Info Card */}
                        <div
                            className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100/80 transition-all duration-500 overflow-hidden group"
                        >
                            {/* Gradient border effect */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(135deg, ${activeService.gradientFrom}20, ${activeService.gradientTo}20)`,
                                }}
                            />

                            {/* Left accent bar */}
                            <div
                                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-500"
                                style={{
                                    background: `linear-gradient(to bottom, ${activeService.gradientFrom}, ${activeService.gradientTo})`,
                                }}
                            />

                            <div className="relative flex items-start gap-4">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${activeService.gradientFrom}, ${activeService.gradientTo})`,
                                    }}
                                >
                                    <activeService.icon className="text-white" size={28} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-heading text-xl font-bold text-dark mb-2">
                                        {activeService.name}
                                    </h3>
                                    <p className="text-foreground/60 text-sm mb-4 leading-relaxed">
                                        {activeService.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="text-3xl font-bold"
                                                style={{ color: activeService.color }}
                                            >
                                                {activeService.stat}
                                            </span>
                                            <span className="text-foreground/60 text-sm">
                                                {activeService.statLabel}
                                            </span>
                                        </div>
                                        <a
                                            href="/#services"
                                            className="flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:gap-2"
                                            style={{ color: activeService.color }}
                                        >
                                            Learn More <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service Pills */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            {services.map((service, index) => (
                                <button
                                    key={service.id}
                                    onClick={() => handleServiceClick(index)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeIndex === index
                                        ? "text-white shadow-lg scale-105"
                                        : "bg-white text-foreground/70 hover:bg-gray-50 shadow-md hover:shadow-lg hover:scale-105"
                                        }`}
                                    style={{
                                        background: activeIndex === index
                                            ? `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`
                                            : undefined,
                                        boxShadow: activeIndex === index
                                            ? `0 10px 30px -5px ${service.color}40`
                                            : undefined,
                                    }}
                                >
                                    {service.shortName}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right - Interactive Wheel */}
                    <div
                        className="order-1 lg:order-2 flex justify-center"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]">
                            {/* Outer glow ring */}
                            <div
                                className="absolute inset-[-30px] rounded-full opacity-30 blur-2xl transition-all duration-700"
                                style={{
                                    background: `conic-gradient(from 0deg, ${services[0].color}, ${services[1].color}, ${services[2].color}, ${services[3].color}, ${services[0].color})`,
                                }}
                            />

                            {/* Outer decorative ring */}
                            <div className="absolute inset-[-15px] rounded-full border-2 border-dashed border-gray-200/50 animate-spin" style={{ animationDuration: "60s" }} />

                            {/* Main circle background */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-2xl" />

                            {/* Gradient ring */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420">
                                <defs>
                                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#2563EB" />
                                        <stop offset="25%" stopColor="#22C55E" />
                                        <stop offset="50%" stopColor="#4F46E5" />
                                        <stop offset="75%" stopColor="#EC4899" />
                                        <stop offset="100%" stopColor="#2563EB" />
                                    </linearGradient>
                                </defs>
                                <circle
                                    cx="210"
                                    cy="210"
                                    r="200"
                                    fill="none"
                                    stroke="url(#ringGradient)"
                                    strokeWidth="4"
                                    strokeDasharray="20 10"
                                    className="animate-spin"
                                    style={{ animationDuration: "30s", transformOrigin: "center" }}
                                />
                            </svg>

                            {/* Service nodes */}
                            {services.map((service, index) => {
                                const pos = getPosition(index, services.length, 140);
                                const isActive = activeIndex === index;
                                const isHoveredItem = hoveredSegment === index;

                                return (
                                    <div
                                        key={service.id}
                                        className="absolute transition-all duration-500 cursor-pointer"
                                        style={{
                                            left: `calc(50% + ${pos.x}px)`,
                                            top: `calc(50% + ${pos.y}px)`,
                                            transform: `translate(-50%, -50%) scale(${isActive || isHoveredItem ? 1.15 : 1})`,
                                            zIndex: isActive || isHoveredItem ? 20 : 10,
                                        }}
                                        onClick={() => handleServiceClick(index)}
                                        onMouseEnter={() => setHoveredSegment(index)}
                                        onMouseLeave={() => setHoveredSegment(null)}
                                    >
                                        {/* Glow effect */}
                                        <div
                                            className={`absolute inset-[-8px] rounded-full blur-xl transition-opacity duration-300 ${isActive || isHoveredItem ? 'opacity-60' : 'opacity-0'}`}
                                            style={{ background: service.color }}
                                        />

                                        {/* Node circle */}
                                        <div
                                            className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-xl ${isActive
                                                ? 'ring-4 ring-white ring-offset-2'
                                                : 'hover:ring-2 hover:ring-white hover:ring-offset-2'
                                                }`}
                                            style={{
                                                background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                                                boxShadow: isActive || isHoveredItem
                                                    ? `0 20px 40px -10px ${service.color}60`
                                                    : `0 10px 30px -10px ${service.color}40`,
                                            }}
                                        >
                                            <service.icon className="text-white mb-1" size={isActive ? 28 : 24} />
                                            <span className="text-white text-[10px] sm:text-xs font-semibold text-center px-1 leading-tight">
                                                {service.shortName}
                                            </span>
                                        </div>

                                        {/* Connector line to center */}
                                        <div
                                            className={`absolute w-[2px] transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-30'}`}
                                            style={{
                                                height: '60px',
                                                background: `linear-gradient(to bottom, ${service.color}, transparent)`,
                                                left: '50%',
                                                top: '100%',
                                                transform: `translateX(-50%) rotate(${-90 + index * 90}deg)`,
                                                transformOrigin: 'top center',
                                            }}
                                        />
                                    </div>
                                );
                            })}

                            {/* Center Circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 z-30">
                                {/* Center glow */}
                                <div
                                    className="absolute inset-[-10px] rounded-full blur-2xl opacity-40 transition-all duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${activeService.gradientFrom}, ${activeService.gradientTo})`,
                                    }}
                                />

                                {/* Center content */}
                                <div className="relative w-full h-full bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-gray-50 overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                                    {/* Animated background */}
                                    <div
                                        className="absolute inset-0 opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                                        style={{
                                            background: `linear-gradient(135deg, ${activeService.gradientFrom}, ${activeService.gradientTo})`,
                                        }}
                                    />

                                    <div className="relative text-center">
                                        <span className="font-heading font-bold text-lg text-dark block">
                                            Digital<span className="text-gradient">Value</span>
                                        </span>
                                        <div className="mt-2">
                                            <span
                                                className="font-bold text-3xl transition-colors duration-300"
                                                style={{ color: activeService.color }}
                                            >
                                                {activeService.stat}
                                            </span>
                                            <p className="text-foreground/60 text-xs mt-0.5">
                                                {activeService.statLabel}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Play Button */}
                                    <button
                                        className="mt-2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                                        style={{
                                            background: `linear-gradient(135deg, ${activeService.gradientFrom}, ${activeService.gradientTo})`,
                                        }}
                                    >
                                        <Play className="text-white ml-0.5" size={14} fill="white" />
                                    </button>
                                </div>
                            </div>

                            {/* Floating particles */}
                            <div className="absolute top-0 right-1/4 w-3 h-3 bg-primary rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s', animationDuration: '2s' }} />
                            <div className="absolute bottom-10 left-10 w-2 h-2 bg-accent rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
                            <div className="absolute top-1/4 right-0 w-2 h-2 bg-secondary rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s', animationDuration: '3s' }} />
                            <div className="absolute bottom-1/4 left-0 w-3 h-3 bg-pink-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s', animationDuration: '2.2s' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
