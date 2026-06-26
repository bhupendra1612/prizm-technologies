"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircleQuestion,
  Sparkles,
  ArrowRight,
  Zap,
  Shield,
  Clock
} from "lucide-react";
import ScrollReveal, { StaggerReveal } from "./ScrollReveal";

const faqs = [
  {
    question: "What technologies do you use for web development?",
    answer:
      "We primarily use Next.js, React, and TypeScript for frontend development, paired with Tailwind CSS for styling. For backend, we work with Node.js, Supabase, and PostgreSQL. This modern stack ensures fast, scalable, and maintainable websites.",
    icon: "💻",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Timeline varies based on project complexity. A simple landing page takes 2 days, while a full-featured web application can take 5-10 days. We provide detailed timelines during our initial consultation after understanding your requirements.",
    icon: "⏱️",
  },
  {
    question: "Do you develop mobile apps for both iOS and Android?",
    answer:
      "Yes! We develop cross-platform mobile applications using React Native, which allows us to build apps for both iOS and Android from a single codebase. This approach reduces development time and costs while maintaining native performance.",
    icon: "📱",
  },
  {
    question: "What is WordPress to code migration?",
    answer:
      "WordPress migration involves converting your existing WordPress website into a custom-coded solution using modern frameworks like Next.js. This results in faster load times, better SEO, improved security, and complete control over your website's functionality.",
    icon: "🔄",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Project costs depend on scope and complexity. We offer transparent pricing and provide detailed quotes after our discovery call. We work with businesses of all sizes and can tailor solutions to fit various budgets without compromising quality.",
    icon: "💰",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely! We offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and feature enhancements. We have flexible maintenance packages to keep your digital products running smoothly.",
    icon: "🛠️",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "While our core focus is development, we build all websites with SEO best practices in mind. We ensure proper meta tags, fast loading speeds, mobile responsiveness, and clean code structure that search engines love.",
    icon: "🔍",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile methodology: Discovery → Planning & Design → Development → Testing → Launch → Support. You'll have regular updates, access to staging environments, and opportunities for feedback throughout the entire process.",
    icon: "🚀",
  },
];

const highlights = [
  { icon: Zap, text: "Quick Response", color: "from-primary to-blue-400" },
  { icon: Shield, text: "Secure Process", color: "from-accent to-emerald-400" },
  { icon: Clock, text: "24/7 Support", color: "from-secondary to-purple-400" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background via-white to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-10 w-4 h-4 bg-primary rounded-full animate-bounce opacity-60" style={{ animationDuration: "3s" }} />
      <div className="absolute top-48 right-20 w-3 h-3 bg-accent rounded-full animate-bounce opacity-60" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-secondary rounded-full animate-bounce opacity-60" style={{ animationDuration: "2s", animationDelay: "1s" }} />
      <div className="absolute bottom-60 right-10 w-3 h-3 bg-pink-500 rounded-full animate-bounce opacity-60" style={{ animationDuration: "2.8s", animationDelay: "0.3s" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full mb-4 animate-float">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-2 mb-6">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about our services and how we can help
            transform your digital presence.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <item.icon size={14} className="text-white" />
                </div>
                <span className="text-sm font-medium text-dark">{item.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* FAQ Items */}
        <ScrollReveal delay={200}>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${isOpen
                    ? "shadow-2xl shadow-primary/20"
                    : "shadow-lg hover:shadow-xl"
                    }`}
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  {/* Gradient background for open state */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
                      }`}
                  />

                  {/* White background for closed state */}
                  <div
                    className={`absolute inset-0 bg-white transition-opacity duration-500 ${isOpen ? "opacity-0" : "opacity-100"
                      }`}
                  />

                  {/* Content */}
                  <div className="relative">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-4">
                        {/* Emoji/Icon */}
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${isOpen
                            ? "bg-white/20"
                            : "bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20"
                            }`}
                        >
                          {faq.icon}
                        </div>
                        <span
                          className={`font-semibold pr-4 transition-colors duration-300 ${isOpen ? "text-white" : "text-dark"
                            }`}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isOpen
                          ? "bg-white/20 text-white rotate-180"
                          : "bg-gradient-to-br from-primary to-secondary text-white group-hover:scale-110"
                          }`}
                      >
                        <ChevronDown size={20} />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pl-[88px]">
                          <p className={`leading-relaxed ${isOpen ? "text-white/90" : "text-foreground/70"}`}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner gradient */}
                  <div
                    className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                      }`}
                    style={{
                      background: `radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20">
            <div className="relative bg-gradient-to-r from-dark via-dark to-secondary/30 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                    <HelpCircle className="text-white" size={32} />
                  </div>
                  <div className="text-white">
                    <h3 className="font-heading text-xl md:text-2xl font-bold">
                      Still have questions?
                    </h3>
                    <p className="text-white/70">
                      We&apos;re here to help you 24/7!
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-dark px-6 py-3 rounded-full font-medium hover:shadow-xl transition-all group"
                  >
                    Contact Us
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://wa.me/919811992002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:shadow-xl hover:shadow-accent/30 transition-all"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
