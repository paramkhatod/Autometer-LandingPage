"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CheckCircle, Award, Users } from 'lucide-react'; 

const ScrollAnimator = ({ children }) => <div>{children}</div>;
const GlassCard = ({ children, className, ...props }) => <div className={className} {...props}>{children}</div>;


function Banner() {
    // Refs for all animated elements
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const getStartedBtnRef = useRef(null);
    const watchVideoBtnRef = useRef(null);
    // 1. Create refs for each of the cards
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    useEffect(() => {
        // --- Entrance Animation Timeline ---
        const tl = gsap.timeline();
        tl.from(titleRef.current, { y: 100, opacity: 0, duration: 1, ease: "power4.out" })
          .from(".subtitle", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .from(".hero-button", { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5");

        // --- Mouse Move Parallax Effect for Title ---
        const heroElement = heroRef.current;
        const titleElement = titleRef.current;

        if (!heroElement || !titleElement) return;

        const moveTitle = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = titleElement.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            gsap.to(titleElement, { x: x * 0.1, y: y * 0.1, rotationZ: x * 0.01, ease: "power2.out" });
        };

        heroElement.addEventListener("mousemove", moveTitle);

        // --- Magnetic Button Effect (no changes here) ---
        const applyMagneticEffect = (element) => {
            if (!element) return null;
            const onMouseMove = (e) => {
                const { clientX, clientY } = e;
                const { width, height, left, top } = element.getBoundingClientRect();
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);
                gsap.to(element, { x: x * 0.4, y: y * 0.4, duration: 0.8, ease: "power3.out" });
            };
            const onMouseLeave = () => {
                gsap.to(element, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
            };
            element.addEventListener("mousemove", onMouseMove);
            element.addEventListener("mouseleave", onMouseLeave);
            return () => {
                element.removeEventListener("mousemove", onMouseMove);
                element.removeEventListener("mouseleave", onMouseLeave);
            };
        };

        // 2. --- New GSAP Hover Effect for Cards ---
        const applyCardHoverEffect = (element) => {
            if (!element) return null;
            const onMouseEnter = () => {
                gsap.to(element, { y: -10, scale: 1.03, duration: 0.4, ease: "power2.out" });
            };
            const onMouseLeave = () => {
                gsap.to(element, { y: 0, scale: 1, duration: 0.6, ease: "power3.out" });
            };
            element.addEventListener("mouseenter", onMouseEnter);
            element.addEventListener("mouseleave", onMouseLeave);
            return () => {
                element.removeEventListener("mouseenter", onMouseEnter);
                element.removeEventListener("mouseleave", onMouseLeave);
            };
        };

        const cleanupBtn1 = applyMagneticEffect(getStartedBtnRef.current);
        const cleanupBtn2 = applyMagneticEffect(watchVideoBtnRef.current);
        // Apply hover effect to each card
        const cleanupCard1 = applyCardHoverEffect(card1Ref.current);
        const cleanupCard2 = applyCardHoverEffect(card2Ref.current);
        const cleanupCard3 = applyCardHoverEffect(card3Ref.current);

        // --- Cleanup function for all event listeners ---
        return () => {
            heroElement.removeEventListener("mousemove", moveTitle);
            if (cleanupBtn1) cleanupBtn1();
            if (cleanupBtn2) cleanupBtn2();
            if (cleanupCard1) cleanupCard1();
            if (cleanupCard2) cleanupCard2();
            if (cleanupCard3) cleanupCard3();
        };
    }, []);

    return (
        <div ref={heroRef} className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white text-center mt-16 xl:mt-28">
            <div className="w-full lg:w-5/6 mx-auto">
                <h1 
                    ref={titleRef} 
                    className="text-7xl -mt-12 md:text-9xl font-bold tracking-wider font-orbitron select-none text-shadow-glow"
                >
                    Automater
                </h1>

                <p className="subtitle mt-20 text-base md:text-lg leading-normal md:leading-relaxed">
                    Build automation workflows completely free. <br/>Perfect for students and teachers who want to automate their work.
                </p>

                <div className="hero-button mt-7">
                    <button ref={getStartedBtnRef} className="bg-btnDark text-white w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">Get started</button>
                    <button ref={watchVideoBtnRef} className="bg-btnLight text-blue w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">Watch a video</button>
                </div>
            </div>
            
            {/* 3. Reduce top margin here to decrease space */}
            <div className="mt-16 md:mt-24">
                <ScrollAnimator delay={400}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* 4. Assign refs to each card and increase padding for height */}
                    <GlassCard ref={card1Ref}  className=" hover:bg-btnDark p-8 text-center bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg cursor-pointer transition-colors duration-500 ease-in-out">
                      <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                      <span className="font-semibold text-neutral-200 font-tech-mono tracking-wider">100% Free Forever</span>
                    </GlassCard>
                    
                    <GlassCard ref={card2Ref} className="hover:bg-btnDark p-8 text-center bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg cursor-pointer transition-colors duration-500 ease-in-out">
                      <Award className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <span className="font-semibold text-neutral-200 font-tech-mono tracking-wider">No Credit Card</span>
                    </GlassCard>
                    
                    <GlassCard ref={card3Ref} className="hover:bg-btnDark p-8 text-center bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg cursor-pointer transition-colors duration-500 ease-in-out">
                      <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                      <span className="font-semibold text-neutral-200 font-tech-mono tracking-wider">For Students & Teachers</span>
                    </GlassCard>
                  </div>
                </ScrollAnimator>
            </div>
        </div>
    );
}

export default Banner;