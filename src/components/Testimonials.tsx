"use client";

import { useState, useEffect, useRef } from "react";
import { Star, Quote, MessageSquare } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Prizm Technologies transformed our outdated WordPress site into a lightning-fast Next.js application. Our page load time dropped by 80% and conversions increased by 45%!",
    rating: 5,
    avatar: "SJ",
    gradient: "from-primary to-blue-400",
  },
  {
    name: "Michael Chen",
    role: "Founder, FitLife App",
    content:
      "The mobile app they built for us exceeded all expectations. The team was professional, communicative, and delivered on time. Highly recommend!",
    rating: 5,
    avatar: "MC",
    gradient: "from-accent to-emerald-400",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    content:
      "Working with Prizm Technologies was a game-changer for our business. They understood our vision and delivered a website that perfectly represents our brand.",
    rating: 5,
    avatar: "ER",
    gradient: "from-secondary to-purple-400",
  },
  {
    name: "David Kim",
    role: "CTO, DataFlow Systems",
    content:
      "Their technical expertise is outstanding. They built a complex dashboard application that handles millions of data points seamlessly. Truly impressive work.",
    rating: 5,
    avatar: "DK",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    name: "Jessica Williams",
    role: "Owner, StyleBoutique",
    content:
      "Our e-commerce site is now beautiful and fast. Sales have increased by 60% since the redesign. The team was incredibly supportive throughout the process.",
    rating: 5,
    avatar: "JW",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    name: "Robert Taylor",
    role: "Director, EduLearn Platform",
    content:
      "They delivered our learning management system on time and within budget. The platform handles thousands of students daily without any issues. Excellent work!",
    rating: 5,
    avatar: "RT",
    gradient: "from-cyan-500 to-teal-400",
  },
];

// Duplicate testimonials for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scrollSpeed = 1; // pixels per frame
    let animationId: number;

    const scroll = () => {
      if (scrollContainer && !isPaused) {
        setScrollPosition((prev) => {
          const newPosition = prev + scrollSpeed;
          const maxScroll = scrollContainer.scrollWidth / 2;

          // Reset to beginning when we've scrolled through the first set
          if (newPosition >= maxScroll) {
            return 0;
          }
          return newPosition;
        });
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MessageSquare size={18} />
            <span className="text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-2 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </ScrollReveal>

        {/* Auto-scrolling Testimonials */}
        <div
          ref={scrollRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className="flex gap-6 transition-transform"
            style={{ width: "max-content" }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[350px] sm:w-[400px] flex-shrink-0 group"
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full border border-gray-100">
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} />

                  {/* Quote Icon */}
                  <div className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} opacity-10 flex items-center justify-center`}>
                    <Quote size={24} />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground/80 mb-6 leading-relaxed relative z-10 line-clamp-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-dark">{testimonial.name}</div>
                      <div className="text-sm text-foreground/60">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8 gap-2">
          <div className="flex items-center gap-2 text-sm text-foreground/50">
            <span className="hidden sm:inline">Hover to pause</span>
            <span className="sm:hidden">Touch to pause</span>
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((t, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white`}
                  >
                    {t.avatar}
                  </div>
                ))}
              </div>
              <span className="text-foreground/70 text-sm ml-2">+50 happy clients</span>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-foreground/70 text-sm">4.9/5 average rating</span>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden sm:block" />
            <div className="text-foreground/70 text-sm">
              <span className="font-bold text-dark">98%</span> client satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
