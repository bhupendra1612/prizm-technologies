"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: string;
    threshold?: number;
}

export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 600,
    direction = "up",
    distance = "40px",
    threshold = 0.1,
}: ScrollRevealProps) {
    const { ref, isVisible } = useScrollReveal({ threshold });

    const getTransform = () => {
        if (direction === "none") return "translate(0, 0)";
        const transforms = {
            up: `translateY(${distance})`,
            down: `translateY(-${distance})`,
            left: `translateX(${distance})`,
            right: `translateX(-${distance})`,
        };
        return transforms[direction];
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translate(0, 0)" : getTransform(),
                transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
}

// Staggered children reveal
interface StaggerRevealProps {
    children: ReactNode[];
    className?: string;
    childClassName?: string;
    staggerDelay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: string;
    threshold?: number;
}

export function StaggerReveal({
    children,
    className = "",
    childClassName = "",
    staggerDelay = 100,
    duration = 600,
    direction = "up",
    distance = "40px",
    threshold = 0.1,
}: StaggerRevealProps) {
    const { ref, isVisible } = useScrollReveal({ threshold });

    const getTransform = () => {
        if (direction === "none") return "translate(0, 0)";
        const transforms = {
            up: `translateY(${distance})`,
            down: `translateY(-${distance})`,
            left: `translateX(${distance})`,
            right: `translateX(-${distance})`,
        };
        return transforms[direction];
    };

    return (
        <div ref={ref} className={className}>
            {children.map((child, index) => (
                <div
                    key={index}
                    className={childClassName}
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translate(0, 0)" : getTransform(),
                        transition: `opacity ${duration}ms ease-out ${index * staggerDelay}ms, transform ${duration}ms ease-out ${index * staggerDelay}ms`,
                        willChange: "opacity, transform",
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}
