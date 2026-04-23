"use client";

import NavButton from "@/components/NavButton";

export default function SMA_SMK() {
  return (
    <main className="container text-center rules-center-wrapper">
      <h1 className="mb-5 mt-4 fw-bold">Peraturan dan Kriteria Penilaian Lomba tingkat SMA-SMK</h1>


      <div className="rules-row">
        <NavButton href="/rules/sma_smk/coswalk_sma_smk" label="Coswalk" src="/images/Aiba.png" variant="blue" />
        <NavButton href="/rules/sma_smk/dance_cover" label="Dance Cover" src="/images/Kosaka.png" variant="blue" />
        <NavButton href="/rules/sma_smk/poster" label="Poster" src="/images/Maki.png" variant="blue" />
      </div>
      <div className="mb-4"></div>
    </main>
  );
}