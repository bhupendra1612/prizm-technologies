"use client";

import {
  Zap,
  Code2,
  Smartphone,
  Shield,
  Clock,
  HeadphonesIcon,
  TrendingUp,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Custom-Built Solutions",
    description:
      "Every project is built from scratch using modern technologies like Next.js, React, and TypeScript for maximum performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    description:
      "All our websites and apps are designed mobile-first, ensuring perfect experience across all devices and screen sizes.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Optimized code, lazy loading, and modern hosting ensure your website loads in under 2 seconds every time.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with SSL, secure authentication, and regular backups to protect your data.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimized",
    description:
      "Built-in SEO best practices, meta tags, structured data, and fast loading speeds to rank higher on Google.",
  },
  {
    icon: Palette,
    title: "Stunning UI/UX Design",
    description:
      "Beautiful, intuitive designs that engage users and convert visitors into customers effectively.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect deadlines. Clear timelines, regular updates, and guaranteed delivery within agreed timeframes.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Dedicated support team available round the clock. Quick response times and reliable assistance always.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-accent font-medium">Features</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            What Makes Our Digital Agency{" "}
            <span className="text-accent">Stand Out?</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 relative card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Floating Icon */}
              <div className="absolute -top-5 right-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="text-dark" size={22} />
                </div>
              </div>

              {/* Content */}
              <div className="pt-4">
                <h3 className="font-heading text-lg font-semibold text-dark mb-3 pr-12">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-white">
              <p className="font-medium">Ready to experience the difference?</p>
              <p className="text-white/60 text-sm">
                Let&apos;s build something amazing together
              </p>
            </div>
            <a
              href="/contact"
              className="bg-accent text-dark px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-accent/30 transition-all whitespace-nowrap"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
