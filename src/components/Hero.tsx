"use client";

import { ArrowRight, Code, Smartphone, Globe, Search } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Sticky Floating Icons - Fixed on right side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40">
        {/* Code Icon */}
        <div className="w-14 h-14 bg-gradient-primary rounded-xl shadow-xl shadow-primary/30 flex items-center justify-center animate-float cursor-pointer hover:scale-110 transition-transform">
          <Code size={24} className="text-white" />
        </div>

        {/* Web Dev */}
        <div className="bg-white p-2.5 rounded-xl shadow-lg card-hover cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Globe className="text-primary" size={16} />
            </div>
            <div>
              <div className="font-semibold text-dark text-xs">Web Dev</div>
              <div className="text-[10px] text-foreground/60">Next.js</div>
            </div>
          </div>
        </div>

        {/* Mobile Apps */}
        <div className="bg-white p-2.5 rounded-xl shadow-lg card-hover cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
              <Smartphone className="text-accent" size={16} />
            </div>
            <div>
              <div className="font-semibold text-dark text-xs">Mobile Apps</div>
              <div className="text-[10px] text-foreground/60">iOS & Android</div>
            </div>
          </div>
        </div>

        {/* Migration */}
        <div className="bg-white p-2.5 rounded-xl shadow-lg card-hover cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-dark text-xs">Migration</div>
              <div className="text-[10px] text-foreground/60">WP to Code</div>
            </div>
          </div>
        </div>

        {/* SEO */}
        <div className="bg-white p-2.5 rounded-xl shadow-lg card-hover cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <Search className="text-orange-500" size={16} />
            </div>
            <div>
              <div className="font-semibold text-dark text-xs">SEO</div>
              <div className="text-[10px] text-foreground/60">Optimization</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                Transforming Digital Experiences
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              We Build{" "}
              <span className="text-gradient">Digital Solutions</span> That
              Drive Growth
            </h1>

            <p className="text-lg text-foreground/70 mb-8 max-w-lg">
              From stunning websites to powerful mobile apps, we transform your
              ideas into digital reality. Specializing in custom development and
              WordPress migrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-primary/30 transition-all group"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-all"
              >
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-dark">150+</div>
                <div className="text-foreground/60 text-sm">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-dark">60+</div>
                <div className="text-foreground/60 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-dark">7+</div>
                <div className="text-foreground/60 text-sm">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[550px]">
              {/* Decorative background shapes */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-2xl" />

              {/* Image container with border and shadow */}
              <div className="relative z-10 w-full h-full p-4 bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-white shadow-2xl animate-float">
                {/* Inner gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

                {/* Background Image */}
                <img
                  src="/images/hero-bg.png"
                  alt="Prizm Technologies Services"
                  className="w-full h-full object-contain rounded-2xl"
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-accent rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-secondary rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary rounded-br-3xl" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg z-20">
                ✨ Premium Quality
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-dark px-4 py-1.5 rounded-full text-sm font-medium shadow-lg border border-gray-100 z-20">
                🚀 Fast Delivery
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-20 -right-6 w-16 h-16 border-4 border-accent/40 rounded-full animate-bounce-slow" />
              <div className="absolute top-20 -left-4 w-12 h-12 border-4 border-primary/40 rounded-full animate-pulse" />
              <div className="absolute top-1/2 -right-8 w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-1/3 -left-6 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-1/3 -right-4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
