"use client";

import { useState } from "react";
import {
  MessageSquareText,
  Lightbulb,
  Code2,
  Rocket,
  HeadphonesIcon,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import ScrollReveal, { StaggerReveal } from "./ScrollReveal";

const steps = [
  {
    icon: MessageSquareText,
    number: "01",
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    description:
      "We start by understanding your business, goals, and requirements through detailed discussions and research.",
    features: ["Requirements gathering", "Market research", "Goal setting"],
    gradient: "from-blue-100 to-blue-50",
    iconGradient: "from-primary to-blue-400",
    borderColor: "border-blue-200",
    delay: 0,
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Planning & Design",
    subtitle: "Crafting the Blueprint",
    description:
      "Our team creates wireframes, designs, and a detailed project roadmap tailored to your needs.",
    features: ["Wireframing", "UI/UX design", "Project timeline"],
    gradient: "from-purple-100 to-purple-50",
    iconGradient: "from-secondary to-purple-400",
    borderColor: "border-purple-200",
    delay: 100,
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    subtitle: "Building Your Solution",
    description:
      "We build your solution using modern technologies with regular updates and feedback loops.",
    features: ["Agile development", "Code reviews", "Regular updates"],
    gradient: "from-emerald-100 to-emerald-50",
    iconGradient: "from-accent to-emerald-400",
    borderColor: "border-emerald-200",
    delay: 200,
  },
  {
    icon: Rocket,
    number: "04",
    title: "Testing & Launch",
    subtitle: "Quality Assurance",
    description:
      "Rigorous testing ensures quality before we deploy your project to production.",
    features: ["QA testing", "Performance optimization", "Deployment"],
    gradient: "from-orange-100 to-orange-50",
    iconGradient: "from-orange-500 to-amber-400",
    borderColor: "border-orange-200",
    delay: 300,
  },
  {
    icon: HeadphonesIcon,
    number: "05",
    title: "Support & Growth",
    subtitle: "Ongoing Partnership",
    description:
      "Post-launch support, maintenance, and continuous improvements to help you grow.",
    features: ["24/7 support", "Regular updates", "Growth strategies"],
    gradient: "from-pink-100 to-pink-50",
    iconGradient: "from-pink-500 to-rose-400",
    borderColor: "border-pink-200",
    delay: 400,
  },
];

export default function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white via-background to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-pink-400/40 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full mb-4 animate-float">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">Our Process</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-2 mb-6">
            How We <span className="text-gradient">Bring Ideas to Life</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Our proven 5-step development process ensures successful project delivery every time,
            from initial concept to ongoing support.
          </p>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary via-secondary via-accent via-orange-400 to-pink-400 rounded-full opacity-30" />

          {/* Animated dots on line */}
          <div className="hidden lg:block absolute top-32 left-[10%] right-[10%] h-1">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse" />
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
            <div className="absolute left-3/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: "0.8s" }} />
          </div>

          <StaggerReveal
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            staggerDelay={100}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ animationDelay: `${step.delay}ms` }}
              >
                {/* Card */}
                <div
                  className={`relative bg-gradient-to-br ${step.gradient} rounded-3xl p-6 border-2 ${step.borderColor} transition-all duration-500 h-full ${hoveredIndex === index
                    ? 'shadow-2xl -translate-y-3 scale-[1.02]'
                    : 'shadow-lg hover:shadow-xl'
                    }`}
                >
                  {/* Number Badge */}
                  <div className={`absolute -top-4 left-6 bg-gradient-to-r ${step.iconGradient} text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg`}>
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.iconGradient} rounded-2xl flex items-center justify-center mt-4 mb-5 shadow-lg transition-all duration-300 ${hoveredIndex === index ? 'scale-110 rotate-3' : ''
                      }`}
                  >
                    <step.icon className="text-white" size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold text-dark mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3">{step.subtitle}</p>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          size={14}
                          className={`flex-shrink-0`}
                          style={{ color: index === 0 ? '#2563EB' : index === 1 ? '#4F46E5' : index === 2 ? '#22C55E' : index === 3 ? '#F97316' : '#EC4899' }}
                        />
                        <span className="text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Arrow connector - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className={`w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'scale-125' : ''
                      }`}>
                      <ArrowRight size={12} className="text-foreground/40" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </StaggerReveal>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={400} className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="text-center sm:text-left">
              <h3 className="font-heading text-xl font-bold text-dark mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-foreground/60">
                Let&apos;s discuss how we can help bring your ideas to life.
              </p>
            </div>
            <a
              href="/contact"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2 group whitespace-nowrap"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
