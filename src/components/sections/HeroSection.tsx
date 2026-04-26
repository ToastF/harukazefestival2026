import Image from "next/image";
import Countdown from "../Countdown";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
      
        <Image
          className="mb-4"
          src="/images/logo_cropped.png"
          alt="Harukaze Festival Logo"
          width={600}
          height={250}
          priority
          sizes="(max-width: 768px) 80vw, 600px"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "500px",
          }}
        />

        <Countdown />

      </div>
    </section>
  );
}