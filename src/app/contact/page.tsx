"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Zap,
  ChevronDown,
  Globe,
  HeadphonesIcon,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    agreePrivacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call - Replace with actual Supabase integration
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
        agreePrivacy: false,
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center animate-fade-in">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-accent" size={40} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-dark mb-4">
          Thank You!
        </h3>
        <p className="text-foreground/70 mb-6">
          Our team will contact you within 24 hours. We&apos;re excited to learn more about your project!
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-primary font-medium hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
      <div className="mb-8">
        <h3 className="font-heading text-2xl font-bold text-dark mb-2">
          Tell Us About Your Project
        </h3>
        <p className="text-foreground/60">
          Fill out the form below and we&apos;ll get back to you shortly.
        </p>
      </div>

      <div className="space-y-6">
        {/* Row 1: Name & Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Row 2: Phone & Company */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Company / Business Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background"
              placeholder="Your Company"
            />
          </div>
        </div>

        {/* Row 3: Service Selection */}
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Select Service <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background appearance-none cursor-pointer"
            >
              <option value="">Choose a service...</option>
              <option value="website">Website Development</option>
              <option value="mobile">Mobile App Development (Android & iOS)</option>
              <option value="migration">WordPress to Custom Website Migration</option>
              <option value="other">Other / Custom Requirement</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" size={20} />
          </div>
        </div>

        {/* Row 4: Budget & Timeline */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Budget Range
            </label>
            <div className="relative">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background appearance-none cursor-pointer"
              >
                <option value="">Select budget...</option>
                <option value="below-500">Below $500</option>
                <option value="500-1500">$500 – $1,500</option>
                <option value="1500-3000">$1,500 – $3,000</option>
                <option value="3000+">$3,000+</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" size={20} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Project Timeline
            </label>
            <div className="relative">
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background appearance-none cursor-pointer"
              >
                <option value="">Select timeline...</option>
                <option value="asap">ASAP</option>
                <option value="1-month">1 Month</option>
                <option value="1-3-months">1–3 Months</option>
                <option value="flexible">Flexible</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" size={20} />
            </div>
          </div>
        </div>

        {/* Row 5: Message */}
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Message / Project Details <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background resize-none"
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
        </div>

        {/* Privacy Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="agreePrivacy"
            id="agreePrivacy"
            checked={formData.agreePrivacy}
            onChange={handleChange}
            required
            className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
          />
          <label htmlFor="agreePrivacy" className="text-sm text-foreground/70 cursor-pointer">
            I agree to the{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>{" "}
            and consent to Prizm Technologies contacting me about my inquiry.
          </label>
        </div>

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
            Something went wrong. Please try again or contact us directly.
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !formData.agreePrivacy}
          className="w-full bg-gradient-primary text-white py-4 rounded-xl font-medium hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={20} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

// Contact Info Card Component
function ContactInfoCard({
  icon: Icon,
  title,
  value,
  subValue,
  color,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  subValue?: string;
  color: "primary" | "accent" | "secondary";
}) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    secondary: "bg-secondary/10 text-secondary",
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
      <div className={`w-14 h-14 ${colorClasses[color]} rounded-xl flex items-center justify-center mb-4`}>
        <Icon size={28} />
      </div>
      <h4 className="font-semibold text-dark mb-1">{title}</h4>
      <p className="text-foreground/80">{value}</p>
      {subValue && <p className="text-foreground/60 text-sm mt-1">{subValue}</p>}
    </div>
  );
}

// FAQ Item Component
function FAQItem({
  question,
  answer,
  icon,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  icon: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${isOpen ? "shadow-2xl shadow-primary/20" : "shadow-lg hover:shadow-xl"
        }`}
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
          onClick={onClick}
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
              {icon}
            </div>
            <span
              className={`font-semibold pr-4 transition-colors duration-300 ${isOpen ? "text-white" : "text-dark"
                }`}
            >
              {question}
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
                {answer}
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
}

// Main Contact Page
export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How soon will I get a response?",
      answer: "We usually respond within 2–6 hours during business hours. For urgent inquiries, feel free to reach out via WhatsApp for faster communication.",
      icon: "⏰",
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work globally! We have successfully delivered projects for clients across USA, UK, Canada, Australia, and many other countries.",
      icon: "🌍",
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Absolutely! We provide ongoing support plans including bug fixes, updates, and feature enhancements to keep your digital products running smoothly.",
      icon: "🛠️",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, PayPal, Wise, and cryptocurrency. Payment terms are discussed during the project proposal phase.",
      icon: "💳",
    },
  ];

  const trustBadges = [
    { icon: Star, text: "Trusted by 50+ business owners" },
    { icon: Zap, text: "Fast delivery & reliable service" },
    { icon: Shield, text: "Secure & confidential process" },
    { icon: Globe, text: "Global service availability" },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-secondary/30" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 animate-fade-in">
            <MessageCircle size={18} />
            <span className="text-sm font-medium">We&apos;d Love to Hear From You</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Amazing Together</span>
          </h1>

          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "100ms" }}>
            We&apos;re here to help you build powerful websites, mobile apps, and digital
            experiences. Share your idea with us — we usually reply within a few hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "200ms" }}>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-primary/30 transition-all group"
            >
              Contact Form
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919873667336"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-accent/30 transition-all"
            >
              <MessageCircle size={20} />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-form" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <ContactInfoCard
                icon={Mail}
                title="Email Us"
                value="support@prizmtechnologies.in"
                subValue="We reply within 24 hours"
                color="primary"
              />
              <ContactInfoCard
                icon={Phone}
                title="Call / WhatsApp"
                value="+91 9873667336"
                subValue="Mon – Sat | 9AM – 8PM IST"
                color="accent"
              />
              <ContactInfoCard
                icon={MapPin}
                title="Location"
                value="India (Remote)"
                subValue="Serving clients globally"
                color="secondary"
              />
              <ContactInfoCard
                icon={Clock}
                title="Working Hours"
                value="Mon – Sat"
                subValue="10:00 AM – 8:00 PM IST"
                color="primary"
              />

              {/* Quick Action Buttons */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-dark mb-4">Quick Connect</h4>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919873667336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full bg-accent/10 text-accent px-4 py-3 rounded-xl font-medium hover:bg-accent hover:text-white transition-all"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="mailto:support@prizmtechnologies.in"
                    className="flex items-center gap-3 w-full bg-primary/10 text-primary px-4 py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-all"
                  >
                    <Mail size={20} />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">Why Choose Us</span>
            <h2 className="font-heading text-3xl font-bold text-dark mt-2">
              Trusted by Businesses <span className="text-gradient">Worldwide</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-background p-5 rounded-2xl card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <badge.icon className="text-white" size={24} />
                </div>
                <span className="text-dark font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background via-white to-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 left-10 w-3 h-3 bg-primary rounded-full animate-bounce opacity-60" style={{ animationDuration: "3s" }} />
        <div className="absolute top-48 right-20 w-2 h-2 bg-accent rounded-full animate-bounce opacity-60" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Sparkles size={18} />
              <span className="text-sm font-semibold">FAQ</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mt-2 mb-4">
              Quick <span className="text-gradient">Answers</span>
            </h2>
            <p className="text-foreground/70">
              Common questions about working with us
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/70 mb-4">Have more questions?</p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <HeadphonesIcon size={18} />
              Get in touch with our team
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="text-white" size={32} />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              We Work Remotely, Serve Globally
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Based in India, we collaborate with clients worldwide. No matter where you are,
              we&apos;re just a message away. Let&apos;s create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
              >
                Start Your Project
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
