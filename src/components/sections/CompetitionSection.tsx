"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { LINKS } from "@/lib/Constants";
import {
  SparklesIcon,
  MusicalNoteIcon,
  PhotoIcon,
  PencilSquareIcon,
  MicrophoneIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";

export default function CompetitionSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const competitions = [
    { title: "Coswalk", category: "SMA/SMK", icon: SparklesIcon, link: "/rules/sma_smk/coswalk_sma_smk" },
    { title: "Dance Cover", category: "SMA/SMK", icon: MusicalNoteIcon, link: "/rules/sma_smk/dance_cover" },
    { title: "Poster", category: "SMA/SMK", icon: PhotoIcon, link: "/rules/sma_smk/poster" },
    { title: "Coswalk", category: "Umum", icon: SparklesIcon, link: "/rules/umum/coswalk_umum" },
    { title: "Ilustrasi Digital", category: "Umum", icon: PencilSquareIcon, link: "/rules/umum/ilustrasi_digital" },
    { title: "J-Song", category: "Umum", icon: MicrophoneIcon, link: "/rules/umum/jsong" },
    { title: "Project Sekai", category: "Umum", icon: DevicePhoneMobileIcon, link: "/rules/umum/project_sekai" },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.children[index] as HTMLElement;

    if (!card) return;

    const containerWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;

    let target =
      card.offsetLeft - containerWidth / 2 + card.offsetWidth / 2;

    const maxScroll = scrollWidth - containerWidth;
    target = Math.max(0, Math.min(target, maxScroll));

    container.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  const handleScroll = (dir: "left" | "right") => {
    if (!isMobile) return;

    let newIndex = currentIndex;

    if (dir === "left") newIndex = Math.max(0, currentIndex - 1);
    else newIndex = Math.min(competitions.length - 1, currentIndex + 1);

    if (newIndex === currentIndex) return;

    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <section id="competition" className="competition-section">
      <div className="container text-center">

        <h1 className="mb-2 fw-bold">Competitions</h1>
        <h4 className="mb-4">Harukaze Festival 2026 mengadakan lomba Offline serta Online!</h4>
        <div className="carousel-wrapper">

          {isMobile && (
            <>
              <button className="scroll-btn left" onClick={() => handleScroll("left")}>‹</button>
              <button className="scroll-btn right" onClick={() => handleScroll("right")}>›</button>
            </>
          )}

          <div
            className={`competition-scroll ${!isMobile ? "desktop-grid" : ""}`}
            ref={scrollRef}
          >
            {competitions.map((comp, i) => {
              const Icon = comp.icon;

              return (
                <Link
                  href={comp.link}
                  key={i}
                  className={`competition-card-vertical ${
                    isMobile && i === currentIndex ? "active" : ""
                  }`}
                >
                  <Icon className="comp-icon" />

                  <h5 className="comp-title">{comp.title}</h5>

                  <span className="comp-category">{comp.category}</span>
                </Link>
              );
            })}
          </div>

        </div>

        <div className="mt-5 d-flex justify-content-center gap-3">
          <a href={LINKS.register} target="_blank" className="cta-btn primary">
            Register Now
          </a>
          <Link href="/rules" className="cta-btn secondary">
            View Rules
          </Link>
        </div>

      </div>
    </section>
  );
}