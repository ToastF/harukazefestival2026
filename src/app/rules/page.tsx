"use client";

import NavButton from "@/components/NavButton";

export default function RulesPage() {
  return (
    <main className="container text-center rules-center-wrapper">
      <h1 className="mb-5 mt-4 fw-bold">Rules</h1>


      <div className="rules-row">
        <NavButton href="/rules/general" label="General" src="/images/Aiba.png" variant="blue" />
        <NavButton href="/rules/sma_smk" label="SMA-SMK" src="/images/Kosaka.png" variant="blue" />
        <NavButton href="/rules/umum" label="Umum" src="/images/Maki.png" variant="blue" />
      </div>
      <div className="mb-4"></div>
    </main>
  );
}