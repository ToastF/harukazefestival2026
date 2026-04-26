"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LINKS } from "@/lib/Constants";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      const inHero = heroBottom > 10;

      setShow(!inHero);

      if (inHero) {
        setOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={`main-navbar ${show ? "show" : ""}`}>
      <div className="container d-flex align-items-center justify-content-between">

        <Link href="/" className="navbar-logo">
          <Image
            src="/images/logo_cropped.png"
            priority
            alt="Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Desktop */}
        <div className="navbar-links d-none d-md-flex gap-4 align-items-center">
          <a href="#about">About</a>
          <a href="#competition">Competitions</a>
          <a href="#timeline">Timeline</a>
          <Link href="/rules">Rules</Link>

          <a href={LINKS.contact2} target="_blank">
            Contact Us
          </a>

          <a
            href={LINKS.register}
            target="_blank"
            className="nav-register-btn"
          >
            Register
          </a>
        </div>

        {/* Borgar */}
        <button
          className="burger d-md-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="mobile-menu d-md-none">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#competition" onClick={closeMenu}>Competitions</a>
          <a href="#timeline" onClick={closeMenu}>Timeline</a>
          <Link href="/rules" onClick={closeMenu}>Rules</Link>

          <a href={LINKS.contact2} target="_blank" onClick={closeMenu}>
            Contact Us
          </a>

          <a
            href={LINKS.register}
            target="_blank"
            className="nav-register-btn"
            onClick={closeMenu}
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
}