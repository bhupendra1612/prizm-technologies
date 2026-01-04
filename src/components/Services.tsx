"use client";

import { useState } from "react";
import {
  Globe,
  Smartphone,
  RefreshCw,
  Code,
  Palette,
  Search,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import ScrollReveal, { StaggerReveal } from "./ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    shortTitle: "Web Dev",
    description:
      "Custom, responsive websites built with Next.js and modern technologies. Fast, SEO-optimized, and designed to convert visitors into customers.",
    features: ["Next.js & React", "Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"],
    gradient: "from-primary to-blue-400",
    shadowColor: "shadow-primary/20",
    bgPattern: "bg-blue-500",
    stats: { value: "150+", label: "Websites Built" },
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android. Intuitive UX, smooth performance, and seamless integration.",
    features: ["iOS & Android", "React Native", "Native Performance", "App Store Ready", "Push Notifications"],
    gradient: "from-accent to-emerald-400",
    shadowColor: "shadow-accent/20",
    bgPattern: "bg-emerald-500",
    stats: { value: "50+", label: "Apps Delivered" },
  },
  {
    icon: RefreshCw,
    title: "WordPress Migration",
    shortTitle: "WP Migration",
    description:
      "Transform your WordPress site into a fully customizable, high-performance coded website. Keep your content, upgrade your tech.",
    features: ["Content Migration", "Custom Code", "85% Faster", "Full Control", "Modern Stack"],
    gradient: "from-secondary to-purple-400",
    shadowColor: "shadow-secondary/20",
    bgPattern: "bg-purple-500",
    stats: { value: "85%", label: "Speed Boost" },
  },
  {
    icon: Code,
    title: "Custom Development",
    shortTitle: "Custom Dev",
    description:
      "Tailored software solutions for your unique business needs. APIs, integrations, and complex web applications.",
    features: ["Custom APIs", "Third-party Integration", "Scalable Solutions", "Clean Code", "Documentation"],
    gradient: "from-cyan-500 to-blue-500",
    shadowColor: "shadow-cyan-500/20",
    bgPattern: "bg-cyan-500",
    stats: { value: "100%", label: "Custom Built" },
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    description:
      "Beautiful, user-centered designs that enhance engagement and drive conversions. Modern aesthetics meet functionality.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Figma"],
    gradient: "from-pink-500 to-rose-400",
    shadowColor: "shadow-pink-500/20",
    bgPattern: "bg-pink-500",
    stats: { value: "98%", label: "Client Satisfaction" },
  },
  {
    icon: Search,
    title: "SEO Optimization",
    shortTitle: "SEO",
    description:
      "Boost your search rankings and drive organic traffic. Technical SEO, content optimization, and performance improvements.",
    features: ["Technical SEO", "Content Strategy", "Core Web Vitals", "Analytics", "Keyword Research"],
    gradient: "from-orange-500 to-amber-400",
    shadowColor: "shadow-orange-500/20",
    bgPattern: "bg-orange-500",
    stats: { value: "200%", label: "Traffic Growth" },
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-2 mb-6">
            Digital Solutions That{" "}
            <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            We offer comprehensive digital services to help your business thrive
            in the modern digital landscape.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerReveal
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={100}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ${hoveredIndex === index
                ? `shadow-2xl ${service.shadowColor} scale-[1.02]`
                : "shadow-lg hover:shadow-xl"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />

              {/* Card content */}
              <div className="p-8">
                {/* Icon and Stats row */}
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <service.icon className="text-white" size={28} />
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>

                  {/* Stats badge */}
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.stats.value}
                    </div>
                    <div className="text-xs text-foreground/60">{service.stats.label}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-dark mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-foreground/70"
                    >
                      <CheckCircle
                        size={16}
                        className={`flex-shrink-0 bg-gradient-to-r ${service.gradient} bg-clip-text`}
                        style={{ color: idx % 2 === 0 ? '#2563EB' : '#22C55E' }}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="/contact"
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/btn`}
                >
                  <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    Learn More
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-primary group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Hover background effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
              />

              {/* Corner decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 opacity-50 group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </StaggerReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={300} className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-6 border border-gray-100">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-dark">Need a custom solution?</p>
              <p className="text-foreground/60 text-sm">
                Let&apos;s discuss your project requirements
              </p>
            </div>
            <a
              href="/contact"
              className="bg-gradient-primary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2 group"
            >
              Get Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
