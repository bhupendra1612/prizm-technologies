"use client";

import {
  CheckCircle,
  Users,
  Award,
  Clock,
  Target,
  Zap,
  Heart,
  ArrowRight,
  Play,
  Star
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    icon: Users,
    value: "60+",
    label: "Happy Clients",
    color: "from-primary to-blue-400",
  },
  {
    icon: Award,
    value: "150+",
    label: "Projects Done",
    color: "from-accent to-emerald-400",
  },
  {
    icon: Clock,
    value: "7+",
    label: "Years Experience",
    color: "from-secondary to-purple-400",
  },
  {
    icon: Star,
    value: "98%",
    label: "Client Satisfaction",
    color: "from-orange-500 to-amber-400",
  },
];

const values = [
  {
    icon: Target,
    title: "Result-Driven",
    description: "We focus on delivering measurable results that impact your business growth.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising on quality or attention to detail.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our priority. We treat every project as our own.",
  },
];

const features = [
  "Expert team of developers & designers",
  "Agile development methodology",
  "Transparent communication",
  "Post-launch support",
  "Competitive pricing",
  "On-time delivery guarantee",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Bar */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Section */}
          <ScrollReveal direction="left" className="relative">
            {/* Main Image/Card Container */}
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-[2rem] blur-2xl" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-dark via-dark to-secondary/30 rounded-3xl p-8 md:p-10 text-white overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Why Choose Us</span>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                    Building Digital Excellence Since 2017
                  </h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    We combine technical expertise with creative thinking to deliver
                    digital solutions that exceed expectations. Our passionate team
                    is dedicated to helping businesses succeed in the digital world.
                  </p>

                  {/* Values */}
                  <div className="space-y-4">
                    {values.map((value, index) => (
                      <div key={index} className="flex items-start gap-4 group/item">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 transition-colors">
                          <value.icon size={20} className="text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{value.title}</h4>
                          <p className="text-white/60 text-sm">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {/* Top Right Badge */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-emerald-400 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-dark">Top Rated</div>
                    <div className="text-xs text-foreground/60">Agency 2024</div>
                  </div>
                </div>
              </div>

              {/* Bottom Left Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-400 rounded-xl flex items-center justify-center">
                    <Play className="text-white ml-0.5" size={20} fill="white" />
                  </div>
                  <div>
                    <div className="font-bold text-dark">Watch Story</div>
                    <div className="text-xs text-foreground/60">2 min video</div>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-1/2 -right-8 w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="absolute bottom-1/4 -left-6 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal direction="right" delay={200}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Users size={18} />
              <span className="text-sm font-semibold">About Prizm Technologies</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-2 mb-6 leading-tight">
              Your Partner in{" "}
              <span className="text-gradient">Digital Success</span>
            </h2>

            <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
              At Prizm Technologies, we believe every business deserves a powerful digital
              presence. Founded with a mission to democratize quality web and mobile
              development, we&apos;ve helped businesses of all sizes transform their
              digital footprint.
            </p>

            <p className="text-foreground/70 mb-8 leading-relaxed">
              Our expertise spans from building stunning websites with Next.js to
              developing feature-rich mobile applications. We also specialize in
              migrating WordPress sites to fully customizable coded solutions,
              giving you complete control over your digital assets.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <CheckCircle className="text-accent" size={14} />
                  </div>
                  <span className="text-foreground/80 group-hover:text-dark transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-primary/30 transition-all group"
              >
                Let&apos;s Work Together
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-dark/20 text-dark px-8 py-4 rounded-full font-medium hover:border-primary hover:text-primary transition-all"
              >
                View Our Work
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
