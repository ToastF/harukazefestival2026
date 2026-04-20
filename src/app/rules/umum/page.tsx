"use client";

import NavButton from "@/components/NavButton";

export default function Umum() {
  return (
    <main className="container text-center rules-center-wrapper">
      <h1 className="mb-5 mt-4 fw-bold">Umum</h1>


      <div className="rules-row">
        <NavButton href="/rules/umum/coswalk_umum" label="Coswalk Umum" src="/images/Aiba.png" variant="blue" />
        <NavButton href="/rules/umum/ilustrasi_digital" label="Ilustrasi Digital" src="/images/Kosaka.png" variant="blue" />
        <NavButton href="/rules/umum/jsong" label="J-Song" src="/images/Maki.png" variant="blue" />
        <NavButton href="/rules/umum/project_sekai" label="Project Sekai" src="/images/Kogo.png" variant="blue"  imgWidth="80px"/>
      </div>
      <div className="mb-4"></div>
    </main>
  );
}