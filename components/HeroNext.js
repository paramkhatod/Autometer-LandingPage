"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// Icons for the cards
import { Target, Zap } from 'lucide-react'; 

// We'll define simple wrappers for these. You can replace them with your actual components if they do more.
const ScrollSection = ({ children, className }) => <section className={className}>{children}</section>;
const GlassCard = ({ children, className, ...props }) => <div className={className} {...props}>{children}</div>;

gsap.registerPlugin(ScrollTrigger);

function Company() {
    // Refs for GSAP animations
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);

    useEffect(() => {
        const cards = [card1Ref.current, card2Ref.current];

        cards.forEach((card, index) => {
            // Entrance Animation
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                x: index === 0 ? -100 : 100, // Card 1 from left, Card 2 from right
                duration: 1,
                ease: "power3.out",
            });

            // Hover Animation
            const tl = gsap.timeline({ paused: true });
            tl.to(card, { 
                y: -15, 
                scale: 1.03,
                boxShadow: "0px 25px 40px rgba(0, 0, 0, 0.3)",
                duration: 0.5, 
                ease: "power2.out" 
            });

            card.addEventListener("mouseenter", () => tl.play());
            card.addEventListener("mouseleave", () => tl.reverse());
        });

    }, []);

    return (
        <ScrollSection className="py-24 px-8 ">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Card 1: The Problem */}
                    <GlassCard 
                        ref={card1Ref}
                        className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-red-500/10 border border-red-500/20">
                                <Target className="w-8 h-8 text-red-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white font-orbitron">
                                Automation is Expensive & Complex
                            </h2>
                        </div>
                        <p className="text-lg text-slate-300 leading-relaxed font-tech-mono">
                            Most automation tools cost $20-50/month and have steep learning curves. 
                            Students and teachers shouldn't have to pay for simple automation.
                        </p>
                    </GlassCard>

                    {/* Card 2: The Solution */}
                    <GlassCard 
                        ref={card2Ref}
                        className="p-12 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-sky-500/10 border border-sky-500/20">
                                <Zap className="w-8 h-8 text-sky-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white font-orbitron">
                                Free, Simple & Open Source
                            </h2>
                            <br/>
                        </div>
                        <p className="text-lg text-slate-300 leading-relaxed font-tech-mono">
                            Automater provides a powerful, easy-to-use platform that is 100% free. 
                            Built for the community, by the community.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </ScrollSection>
    );
}

export default Company;