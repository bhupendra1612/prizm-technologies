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
  VolumeX
} from "lucide-react";
import ScrollReveal, { StaggerReveal } from "./ScrollReveal";

// Project data - videoFile is the filename in Supabase Storage (portfolio folder)
const projects = [
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

const categories = [
  { id: "all", label: "All Projects", icon: Sparkles },
  { id: "website", label: "Websites", icon: Globe },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "migration", label: "WP Migration", icon: RefreshCw },
];

// Video Card Component
function VideoCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // Direct video URL construction
  const videoUrl = `https://awnwmehxjyaczwxuptmg.supabase.co/storage/v1/object/public/videos/portfolio/${project.videoFile}`;

  // Check if video is ready
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => setVideoReady(true);
      video.addEventListener('canplay', handleCanPlay);
      // Check if already ready
      if (video.readyState >= 3) {
        setVideoReady(true);
      }
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

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Container - 9:16 Aspect Ratio */}
      <div className="relative aspect-[9/16] overflow-hidden bg-gray-900">
        {/* Video Element - Always render */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          loop
          muted
          playsInline
          autoPlay
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Loading Placeholder - Only show while loading */}
        {!videoReady && (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-10 flex items-center justify-center`}>
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {/* Dark Overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-[1]" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`bg-gradient-to-r ${project.gradient} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm border border-white/20`}>
            {project.category === "website" && <Globe size={14} />}
            {project.category === "mobile" && <Smartphone size={14} />}
            {project.category === "migration" && <RefreshCw size={14} />}
            {project.categoryLabel}
          </span>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 z-20 hover:scale-110 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
        >
          {isPlaying ? (
            <Pause className="text-dark" size={24} />
          ) : (
            <Play className="text-dark ml-1" size={24} />
          )}
        </button>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className={`absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-20 border border-white/20 hover:bg-black/70 ${isHovered ? 'opacity-100' : 'opacity-60'
            }`}
        >
          {isMuted ? (
            <VolumeX className="text-white" size={18} />
          ) : (
            <Volume2 className="text-white" size={18} />
          )}
        </button>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          {/* Title with text shadow for better visibility */}
          <h3 className="font-heading text-xl font-bold text-white mb-2 drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            {project.title}
          </h3>

          {/* Description */}
          <p className={`text-white/90 text-sm mb-4 transition-all duration-300 drop-shadow-md ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`} style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1.5 bg-black/50 text-white rounded-full backdrop-blur-sm border border-white/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={`flex gap-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              href={project.liveUrl}
              className="flex-1 bg-white text-dark py-2.5 rounded-xl font-semibold text-sm text-center hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Eye size={16} />
              View Project
            </a>
            <a
              href={project.liveUrl}
              className="w-11 h-11 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white transition-all border border-white/20 group/link"
            >
              <ExternalLink size={18} className="text-white group-hover/link:text-dark" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-background via-white to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-32 left-10 w-4 h-4 bg-primary/40 rounded-full animate-float" />
      <div className="absolute top-48 right-20 w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">Our Portfolio</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-2 mb-6">
            Projects That{" "}
            <span className="text-gradient">Speak for Themselves</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Explore our recent work and see how we&apos;ve helped businesses achieve their digital goals.
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
                : "bg-white text-foreground/70 hover:bg-primary/10 hover:text-primary shadow-md"
                }`}
            >
              <category.icon size={18} />
              {category.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Projects Grid - 9:16 Video Cards */}
        <StaggerReveal
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={100}
        >
          {filteredProjects.map((project, index) => (
            <VideoCard key={index} project={project} index={index} />
          ))}
        </StaggerReveal>

        {/* CTA */}
        <ScrollReveal delay={300} className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-dark">Want to see more?</p>
              <p className="text-foreground/60 text-sm">
                Check out our full portfolio
              </p>
            </div>
            <a
              href="/portfolio"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2 group"
            >
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
