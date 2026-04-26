"use client";

import Image from "next/image";
import Link from "next/link";

export default function RulesPage() {
  const categories = [
    {
      title: "General Rules",
      href: "/rules/general",
      img: "/images/Aiba.png",
      desc: "",
    },
    {
      title: "SMA - SMK",
      href: "/rules/sma_smk",
      img: "/images/Kosaka.png",
      desc: "",
    },
    {
      title: "Umum",
      href: "/rules/umum",
      img: "/images/Maki.png",
      desc: "",
    },
  ];

  return (
    <main className="rules-page">

      <div className="container text-center">

        {/* Title */}
        <h1 className="mb-5 mt-4 fw-bold rules-title">
          Rules
        </h1>

        {/* Cards */}
        <div className="rules-grid">

          {categories.map((cat, i) => (
            <Link key={i} href={cat.href} className="rules-card">

              <div className="rules-mascot">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={120}
                  height={120}
                  priority
                />
              </div>

              {/* Text */}
              <h3 className="rules-card-title">{cat.title}</h3>
              <p className="rules-card-desc">{cat.desc}</p>

            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}