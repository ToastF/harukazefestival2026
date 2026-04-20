"use client";

import NavButton from "@/components/NavButton";

export default function SMA() {
  return (
    <main className="container text-center rules-center-wrapper">
      <h1 className="mb-5 mt-4 fw-bold">SMA</h1>


      <div className="rules-row">
        <NavButton href="/rules/sma/coswalk_sma" label="Coswalk SMA" src="/images/Aiba.png" variant="blue" />
        <NavButton href="/rules/sma/dance_cover" label="Dance Cover" src="/images/Kosaka.png" variant="blue" />
        <NavButton href="/rules/sma/poster" label="Poster" src="/images/Maki.png" variant="blue" />
      </div>
      <div className="mb-4"></div>
    </main>
  );
}