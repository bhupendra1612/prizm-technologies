"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  User,
  Building,
  FileText
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "support@prizmtechnologies.in",
    href: "mailto:support@prizmtechnologies.in",
    gradient: "from-primary to-blue-400",
  },
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 9873667336",
    href: "tel:+919873667336",
    gradient: "from-accent to-emerald-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India (Remote - Global)",
    href: "#",
    gradient: "from-secondary to-purple-400",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat, 10AM - 8PM",
    href: "#",
    gradient: "from-orange-500 to-amber-400",
  },
];

const features = [
  "Free consultation call",
  "Response within 24 hours",
  "No commitment required",
  "Transparent pricing",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqeabgjb";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-background to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-32 left-10 w-4 h-4 bg-primary rounded-full animate-bounce opacity-50" style={{ animationDuration: "3s" }} />
      <div className="absolute top-48 right-20 w-3 h-3 bg-accent rounded-full animate-bounce opacity-50" style={{ animationDuration: "2.5s" }} />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-secondary rounded-full animate-bounce opacity-50" style={{ animationDuration: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MessageSquare size={18} />
            <span className="text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-2 mb-6">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Ready to start your project? Contact us today for a free consultation.
            We&apos;ll discuss your requirements and provide a detailed proposal.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <ScrollReveal direction="left" className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60">{item.label}</div>
                    <div className="font-semibold text-dark group-hover:text-primary transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-dark via-dark to-secondary/30 rounded-3xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-accent" size={20} />
                  <span className="font-semibold">Why Contact Us?</span>
                </div>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-accent flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/919873667336"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white p-4 rounded-2xl font-medium hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/30 transition-all group"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>

          {/* Right - Contact Form */}
          <ScrollReveal direction="right" delay={200} className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden border border-gray-100">
              {/* Form header gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />

              {submitted ? (
                <div className="h-[500px] flex items-center justify-center">
                  <div className="text-center animate-fade-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/30">
                      <CheckCircle className="text-white" size={40} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-dark mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-foreground/70 mb-6 max-w-sm mx-auto">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Title */}
                  <div className="mb-8">
                    <h3 className="font-heading text-xl font-bold text-dark mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Fill out the form below and we&apos;ll get back to you shortly.
                    </p>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                      {error}
                    </div>
                  )}
                  {/* Row 1: Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-sm font-medium text-dark mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-foreground/40'
                            }`}
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-background"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-dark mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail
                          size={18}
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-foreground/40'
                            }`}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-background"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-sm font-medium text-dark mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone
                          size={18}
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'phone' ? 'text-primary' : 'text-foreground/40'
                            }`}
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-background"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-dark mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building
                          size={18}
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'company' ? 'text-primary' : 'text-foreground/40'
                            }`}
                        />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-background"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Service & Budget */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-sm font-medium text-dark mb-2">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Globe
                          size={18}
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'service' ? 'text-primary' : 'text-foreground/40'
                            }`}
                        />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('service')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-background appearance-none cursor-pointer"
                        >
                          <option value="">Select a service</option>
                          <option value="web">Website Development</option>
                          <option value="mobile">Mobile App Development</option>
                          <option value="migration">WordPress Migration</option>
                          <option value="uiux">UI/UX Design</option>
                          <option value="seo">SEO Optimization</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-dark mb-2">
                        Budget Range
                      </label>
                      <div className="relative">
                        <span className={`absolute left-4 top-1/2 -translate-y-1/2 font-medium transition-colors ${focusedField === 'budget' ? 'text-primary' : 'text-foreground/40'
                          }`}>$</span>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('budget')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-background appearance-none cursor-pointer"
                        >
                          <option value="">Select budget</option>
                          <option value="500">Below $500</option>
                          <option value="500-1500">$500 - $1,500</option>
                          <option value="1500-3000">$1,500 - $3,000</option>
                          <option value="3000+">$3,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-dark mb-2">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FileText
                        size={18}
                        className={`absolute left-4 top-4 transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-foreground/40'
                          }`}
                      />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={4}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-background resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-70 flex items-center justify-center gap-2 group hover:bg-right"
                    style={{ backgroundPosition: 'left' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* Privacy note */}
                  <p className="text-center text-xs text-foreground/50">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
