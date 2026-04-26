"use client";

import Image from "next/image";
import Link from "next/link";

export default function SMA_SMK() {
  const categories = [
    {
      title: "Coswalk",
      href: "/rules/sma_smk/coswalk_sma_smk",
      img: "/images/Aiba.png",
    },
    {
      title: "Dance Cover",
      href: "/rules/sma_smk/dance_cover",
      img: "/images/Kosaka.png",
    },
    {
      title: "Poster",
      href: "/rules/sma_smk/poster",
      img: "/images/Maki.png",
    },
  ];

  return (
    <main className="rules-page">

      <div className="container text-center">

        <h1 className="mb-5 mt-4 fw-bold rules-title">
          Lomba tingkat SMA-SMK
        </h1>

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

              <h3 className="rules-card-title">{cat.title}</h3>

            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}