"use client";

import { useState, useRef, useEffect } from "react";
import {
  ExternalLink,
  Play,
  Pause,
  Globe,
  Smartphone,
  RefreshCw,
  ArrowRight,
  Sparkles,
  Eye,
  Volume2,
  VolumeX,
  Filter,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  Clock,
  Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal, { StaggerReveal } from "@/components/ScrollReveal";

// Video Projects (from Supabase)
const videoProjects = [
  {
    title: "E-Commerce Platform",
    category: "website",
    categoryLabel: "Web Development",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
    tech: ["Next.js", "Supabase", "Stripe", "Tailwind"],
    gradient: "from-primary to-blue-400",
    videoFile: "project-1.mp4",
    liveUrl: "#",
  },
  {
    title: "Fitness Tracking App",
    category: "mobile",
    categoryLabel: "Mobile App",
    description: "Cross-platform fitness app with workout tracking, nutrition logging, and social features.",
    tech: ["React Native", "Firebase", "Redux"],
    gradient: "from-accent to-emerald-400",
    videoFile: "project-2.mp4",
    liveUrl: "#",
  },
  {
    title: "Real Estate Portal",
    category: "migration",
    categoryLabel: "WP Migration",
    description: "Migrated a WordPress real estate site to Next.js, improving load time by 70%.",
    tech: ["Next.js", "PostgreSQL", "Maps API"],
    gradient: "from-secondary to-purple-400",
    videoFile: "project-3.mp4",
    liveUrl: "#",
  },
  {
    title: "SaaS Dashboard",
    category: "website",
    categoryLabel: "Web Development",
    description: "Analytics dashboard for a SaaS product with real-time data visualization.",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "from-orange-500 to-amber-400",
    videoFile: "project-4.mp4",
    liveUrl: "#",
  },
  {
    title: "Food Delivery App",
    category: "mobile",
    categoryLabel: "Mobile App",
    description: "On-demand food delivery app with real-time tracking and multiple payment options.",
    tech: ["Flutter", "Firebase", "Google Maps"],
    gradient: "from-pink-500 to-rose-400",
    videoFile: "project-5.mp4",
    liveUrl: "#",
  },
  {
    title: "Corporate Website",
    category: "migration",
    categoryLabel: "WP Migration",
    description: "Transformed a slow WordPress site into a blazing-fast Next.js website.",
    tech: ["Next.js", "Contentful", "Vercel"],
    gradient: "from-cyan-500 to-teal-400",
    videoFile: "project-6.mp4",
    liveUrl: "#",
  },
];

// Categories
const categories = [
  { id: "all", label: "All Projects", icon: Sparkles },
  { id: "website", label: "Websites", icon: Globe },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "migration", label: "WP Migration", icon: RefreshCw },
];

// Stats
const stats = [
  { value: "150+", label: "Projects Delivered", icon: Award },
  { value: "60+", label: "Happy Clients", icon: Users },
  { value: "7+", label: "Years Experience", icon: Clock },
  { value: "98%", label: "Client Satisfaction", icon: Star },
];

// Case Studies / Detailed Projects
const caseStudies = [
  {
    id: 1,
    title: "TechFlow SaaS Platform",
    category: "website",
    description: "A comprehensive SaaS dashboard with real-time analytics, team collaboration features, and subscription management.",
    longDescription: "Built a full-featured SaaS platform for a tech startup. Includes user authentication, role-based access, real-time data visualization, Stripe integration for payments, and a beautiful admin dashboard.",
    image: "/images/projects/techflow.jpg",
    gradient: "from-primary via-blue-500 to-cyan-400",
    tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    client: "TechFlow Inc.",
    duration: "8 weeks",
    year: "2024",
    results: ["85% faster load time", "200% increase in conversions", "50K+ active users"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "FitLife Fitness App",
    category: "mobile",
    description: "Cross-platform fitness tracking app with workout plans, nutrition logging, and social features.",
    longDescription: "Developed a comprehensive fitness application for iOS and Android. Features include custom workout creation, progress tracking with charts, meal planning, social challenges, and Apple Health/Google Fit integration.",
    image: "/images/projects/fitlife.jpg",
    gradient: "from-accent via-emerald-500 to-teal-400",
    tech: ["React Native", "Firebase", "Redux", "Node.js", "MongoDB"],
    client: "FitLife Studios",
    duration: "12 weeks",
    year: "2024",
    results: ["100K+ downloads", "4.8 star rating", "Featured on App Store"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "LuxuryHomes Real Estate",
    category: "migration",
    description: "Migrated a slow WordPress site to a blazing-fast Next.js application with advanced property search.",
    longDescription: "Transformed a legacy WordPress real estate website into a modern Next.js application. Improved load time by 85%, added advanced filtering, map integration, virtual tours, and a powerful CMS for property management.",
    image: "/images/projects/luxuryhomes.jpg",
    gradient: "from-secondary via-purple-500 to-pink-400",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Google Maps API", "Cloudinary"],
    client: "LuxuryHomes Realty",
    duration: "6 weeks",
    year: "2024",
    results: ["85% faster page load", "3x more inquiries", "SEO score 95+"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "ShopEase E-commerce",
    category: "website",
    description: "Modern e-commerce platform with multi-vendor support, inventory management, and analytics.",
    longDescription: "Built a scalable e-commerce solution supporting multiple vendors. Features include product management, order tracking, payment gateway integration, inventory alerts, and comprehensive sales analytics.",
    image: "/images/projects/shopease.jpg",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    tech: ["Next.js", "Supabase", "Stripe", "Redis", "Tailwind CSS"],
    client: "ShopEase Ltd.",
    duration: "10 weeks",
    year: "2024",
    results: ["$500K+ monthly sales", "99.9% uptime", "2s avg load time"],
    liveUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "MediCare Health App",
    category: "mobile",
    description: "Healthcare app for appointment booking, telemedicine, and medical records management.",
    longDescription: "Created a HIPAA-compliant healthcare application enabling patients to book appointments, have video consultations, access medical records, and receive medication reminders.",
    image: "/images/projects/medicare.jpg",
    gradient: "from-red-500 via-rose-500 to-pink-400",
    tech: ["React Native", "Node.js", "PostgreSQL", "WebRTC", "AWS"],
    client: "MediCare Solutions",
    duration: "14 weeks",
    year: "2023",
    results: ["50K+ patients", "HIPAA compliant", "4.9 star rating"],
    liveUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "BlogMaster CMS",
    category: "migration",
    description: "WordPress blog migrated to headless CMS with improved performance and modern design.",
    longDescription: "Migrated a high-traffic WordPress blog to a headless architecture using Next.js and Sanity CMS. Achieved 90+ Lighthouse scores, implemented ISR for instant updates, and added advanced SEO features.",
    image: "/images/projects/blogmaster.jpg",
    gradient: "from-indigo-500 via-violet-500 to-purple-400",
    tech: ["Next.js", "Sanity CMS", "Vercel", "TypeScript", "Tailwind CSS"],
    client: "BlogMaster Media",
    duration: "4 weeks",
    year: "2023",
    results: ["90+ Lighthouse score", "2M+ monthly views", "60% faster"],
    liveUrl: "#",
    featured: false,
  },
];

// Video Card Component - Horizontal Layout for Portfolio Page
function VideoCard({ project, index }: { project: typeof videoProjects[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const videoUrl = `https://awnwmehxjyaczwxuptmg.supabase.co/storage/v1/object/public/videos/portfolio/${project.videoFile}`;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => setVideoReady(true);
      video.addEventListener('canplay', handleCanPlay);
      if (video.readyState >= 3) setVideoReady(true);
      return () => video.removeEventListener('canplay', handleCanPlay);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
      onMouseEnter={() => {
        setIsHovered(true);
        if (videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }}
    >
      {/* Video Container - Square aspect ratio */}
      <div className="relative aspect-square overflow-hidden bg-gray-900">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          autoPlay
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {!videoReady && (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-10 flex items-center justify-center`}>
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`bg-gradient-to-r ${project.gradient} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5`}>
            {project.category === "website" && <Globe size={12} />}
            {project.category === "mobile" && <Smartphone size={12} />}
            {project.category === "migration" && <RefreshCw size={12} />}
            {project.categoryLabel}
          </span>
        </div>

        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transition-all duration-300 z-20 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        >
          {isPlaying ? <Pause className="text-dark" size={22} /> : <Play className="text-dark ml-1" size={22} />}
        </button>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className={`absolute top-4 right-4 w-9 h-9 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-20 border border-white/20 ${isHovered ? 'opacity-100' : 'opacity-60'}`}
        >
          {isMuted ? <VolumeX className="text-white" size={16} /> : <Volume2 className="text-white" size={16} />}
        </button>

        {/* Title on video */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="font-heading text-lg font-bold text-white drop-shadow-lg">{project.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium">{tech}</span>
          ))}
        </div>
        <a href={project.liveUrl} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors group/link">
          View Project <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

// Case Study Card Component
function CaseStudyCard({ project, index }: { project: typeof caseStudies[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image/Gradient Header - Same height for all cards */}
      <div className="relative h-72 overflow-hidden">
        {/* Project Image or Gradient Fallback */}
        {project.image && !imageError ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
              onError={() => setImageError(true)}
            />
            {/* Overlay on image */}
            <div className={`absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-90" : "opacity-60"}`} />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
            <div className="absolute inset-0 opacity-30">
              <div className={`absolute w-40 h-40 bg-white/20 rounded-full -top-10 -left-10 transition-transform duration-700 ${isHovered ? "scale-150" : "scale-100"}`} />
              <div className={`absolute w-32 h-32 bg-white/20 rounded-full -bottom-10 -right-10 transition-transform duration-700 delay-100 ${isHovered ? "scale-150" : "scale-100"}`} />
            </div>
          </>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur-sm text-dark text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
            {project.category === "website" && <Globe size={12} />}
            {project.category === "mobile" && <Smartphone size={12} />}
            {project.category === "migration" && <RefreshCw size={12} />}
            {categories.find((c) => c.id === project.category)?.label}
          </span>
        </div>

        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-accent text-dark text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles size={12} /> Featured
            </span>
          </div>
        )}

        {/* Hover Overlay with buttons */}
        <div className={`absolute inset-0 bg-dark/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <a href={project.liveUrl} className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
            <ExternalLink size={20} className="text-dark" />
          </a>
          <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
            <Eye size={20} className="text-dark" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Results */}
        {project.results && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.results.slice(0, 2).map((result, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-full font-medium flex items-center gap-1">
                <Star size={10} /> {result}
              </span>
            ))}
          </div>
        )}

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-foreground/60 mb-4">
          <span className="flex items-center gap-1"><Calendar size={12} /> {project.year}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {project.duration}</span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full">{tech}</span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs px-2.5 py-1 bg-gray-100 text-foreground/60 rounded-full">+{project.tech.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Main Portfolio Page
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredVideoProjects = activeCategory === "all"
    ? videoProjects
    : videoProjects.filter((p) => p.category === activeCategory);

  const filteredCaseStudies = activeCategory === "all"
    ? caseStudies
    : caseStudies.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-dark via-dark to-secondary/20 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="absolute top-20 left-10 w-3 h-3 bg-primary/50 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-accent/50 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles size={18} className="text-accent" />
              <span className="text-sm font-medium">Our Portfolio</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Projects That{" "}
              <span className="text-gradient">Speak for Themselves</span>
            </h1>

            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto">
              Explore our collection of websites, mobile apps, and WordPress migrations.
              Each project showcases our commitment to quality, innovation, and client success.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <stat.icon className="mx-auto mb-2 text-accent" size={24} />
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Play size={18} />
              <span className="text-sm font-semibold">Video Showcase</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-4">
              See Our Work in <span className="text-gradient">Action</span>
            </h2>
            <p className="text-foreground/70">
              Watch video demos of our recent projects and see the quality of our work firsthand.
            </p>
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal delay={100} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                  : "bg-gray-100 text-foreground/70 hover:bg-primary/10 hover:text-primary"
                  }`}
              >
                <category.icon size={18} />
                {category.label}
              </button>
            ))}
          </ScrollReveal>

          {/* Video Grid - Different layout from home page */}
          <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
            {filteredVideoProjects.map((project, index) => (
              <VideoCard key={index} project={project} index={index} />
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-b from-background to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
              <Award size={18} />
              <span className="text-sm font-semibold">Case Studies</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-4">
              Detailed <span className="text-gradient">Project Stories</span>
            </h2>
            <p className="text-foreground/70">
              Dive deeper into our projects and see the challenges we solved and results we achieved.
            </p>
          </ScrollReveal>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <CaseStudyCard project={project} index={index} />
              </ScrollReveal>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-20">
              <Filter className="mx-auto text-foreground/30 mb-4" size={48} />
              <h3 className="font-heading text-xl font-semibold text-dark mb-2">No projects found</h3>
              <p className="text-foreground/60">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-dark via-dark to-secondary/30 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-64 h-64 bg-white/5 rounded-full -top-20 -left-20" />
                <div className="absolute w-48 h-48 bg-white/5 rounded-full -bottom-16 -right-16" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Sparkles size={18} className="text-accent" />
                  <span className="text-sm font-medium">Ready to Start?</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Have a Project in Mind?
                </h2>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">
                  Let&apos;s discuss how we can help bring your vision to life. Our team is ready to create something amazing for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all group"
                  >
                    Start Your Project
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://wa.me/919873667336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#25D366]/30 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
