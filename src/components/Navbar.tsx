"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Smartphone,
  RefreshCw,
  Palette,
  Wrench,
  Search,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Fully customized, modern websites built with Next.js & React",
    href: "/#services",
    color: "from-primary to-blue-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS & Android apps with React Native",
    href: "/#services",
    color: "from-accent to-emerald-400",
  },
  {
    icon: RefreshCw,
    title: "WordPress Migration",
    description: "Convert WordPress sites to fully coded modern websites",
    href: "/#services",
    color: "from-secondary to-purple-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that convert",
    href: "/#services",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Powerful online stores with payment integration",
    href: "/#services",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings and visibility",
    href: "/#services",
    color: "from-cyan-500 to-teal-400",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/#services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowServicesDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-lg py-3" : "py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/images/Prizm Technologies Logo.png"
                alt="Prizm Technologies Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="font-heading font-bold text-xl text-dark">
              Prizm<span className="text-primary">Technologies</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium ${showServicesDropdown ? "text-primary" : ""
                      }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${showServicesDropdown ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${showServicesDropdown
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                      }`}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-[600px]">
                      {/* Dropdown Header */}
                      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                        <div>
                          <h3 className="font-heading font-semibold text-dark">Our Services</h3>
                          <p className="text-sm text-foreground/60">
                            Comprehensive digital solutions for your business
                          </p>
                        </div>
                        <a
                          href="/#services"
                          className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                        >
                          View All
                          <ArrowRight size={14} />
                        </a>
                      </div>

                      {/* Services Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service, index) => (
                          <a
                            key={index}
                            href={service.href}
                            className="group flex items-start gap-4 p-3 rounded-xl hover:bg-background transition-all duration-200"
                          >
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <service.icon className="text-white" size={22} />
                            </div>
                            <div>
                              <h4 className="font-medium text-dark group-hover:text-primary transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-sm text-foreground/60 leading-snug">
                                {service.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Dropdown Footer */}
                      <div className="mt-4 pt-4 border-t border-gray-100 bg-gradient-to-r from-primary/5 to-secondary/5 -mx-6 -mb-6 px-6 py-4 rounded-b-2xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                              <Wrench className="text-white" size={18} />
                            </div>
                            <div>
                              <h4 className="font-medium text-dark text-sm">Maintenance & Support</h4>
                              <p className="text-xs text-foreground/60">
                                Ongoing support for your digital products
                              </p>
                            </div>
                          </div>
                          <a
                            href="/contact"
                            className="bg-gradient-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
                          >
                            Get Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              )
            )}
            <a
              href="/contact"
              className="bg-gradient-primary text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors font-medium py-2"
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Mobile Services Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="bg-background rounded-xl p-4 mt-2 space-y-3">
                        {services.map((service, index) => (
                          <a
                            key={index}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-all"
                          >
                            <div
                              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}
                            >
                              <service.icon className="text-white" size={18} />
                            </div>
                            <div>
                              <h4 className="font-medium text-dark text-sm">{service.title}</h4>
                              <p className="text-xs text-foreground/60">{service.description}</p>
                            </div>
                          </a>
                        ))}

                        {/* Maintenance Card */}
                        <div className="flex items-center gap-3 p-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                            <Wrench className="text-white" size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-dark text-sm">Maintenance & Support</h4>
                            <p className="text-xs text-foreground/60">Ongoing support available</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}
              <a
                href="/contact"
                className="bg-gradient-primary text-white px-6 py-2.5 rounded-full font-medium text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
