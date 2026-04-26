"use client";

import Image from "next/image";
import Link from "next/link";

export default function Umum() {
  const categories = [
    {
      title: "Coswalk Umum",
      href: "/rules/umum/coswalk_umum",
      img: "/images/Aiba.png",
    },
    {
      title: "Ilustrasi Digital",
      href: "/rules/umum/ilustrasi_digital",
      img: "/images/Kosaka.png",
    },
    {
      title: "J-Song",
      href: "/rules/umum/jsong",
      img: "/images/Maki.png",
    },
    {
      title: "Project Sekai",
      href: "/rules/umum/project_sekai",
      img: "/images/Kogo.png",
      imgWidth: 500,
    },
  ];

  return (
    <main className="rules-page">

      <div className="container text-center">

        <h1 className="mb-5 mt-4 fw-bold rules-title">
          Lomba Umum
        </h1>

        <div className="rules-grid">

          {categories.map((cat, i) => (
            <Link key={i} href={cat.href} className="rules-card">

              <div className="rules-mascot">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={cat.imgWidth || 120}
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