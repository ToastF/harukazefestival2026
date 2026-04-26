import Image from "next/image";
import PersonCard from "@/components/PersonCard";
import {LINKS} from "@/lib/Constants";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-12 col-lg-6 text-start">

            <h2 className="mb-4">Harukaze Festival 2026</h2>

            <div className="info-pill">
            {/* Calendar Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.8} stroke="currentColor" 
                className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" 
                d="M6.75 3v2.25M17.25 3v2.25M3 8.25h18M4.5 5.25h15A1.5 1.5 0 0 1 21 6.75v12A1.5 1.5 0 0 1 19.5 20.25h-15A1.5 1.5 0 0 1 3 18.75v-12A1.5 1.5 0 0 1 4.5 5.25z" />
            </svg>
            30-31 May 2026
            </div>

            <div className="info-pill">
            {/* Clock Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.8} stroke="currentColor" 
                className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" 
                d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
            </svg>
            10:00 - 20:00 WIB
            </div>

            <div className="info-pill">
            {/* Map Pin Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.8} stroke="currentColor" 
                className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" 
                d="M12 21c-4.97-4.97-7.5-8.1-7.5-11.25A7.5 7.5 0 0112 2.25a7.5 7.5 0 017.5 7.5C19.5 12.9 16.97 16.03 12 21z" />
                <circle cx="12" cy="9.75" r="2.25" />
            </svg>
            Universitas Tarumanagara
            </div>

            <div className="info-pill">
              {/* Public Icon */}
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth={1.8} stroke="currentColor"
                className="icon">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.8 2.5 14.2 0 18" />
              </svg>
              Open to Public
            </div>

            <div className="info-pill">
              {/* Ticket Icon */}
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth={1.8} stroke="currentColor"
                className="icon">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 8.25A2.25 2.25 0 016.25 6h11.5A2.25 2.25 0 0120 8.25v1.5a1.5 1.5 0 010 3v1.5A2.25 2.25 0 0117.75 18H6.25A2.25 2.25 0 014 15.75v-1.5a1.5 1.5 0 010-3v-1.5z" />
              </svg>
              HTM: Free
            </div>

            <p className="lead mt-4">
            Harukaze Festival hadir kembali dengan pengalaman yang lebih meriah,
            menghadirkan <span className="highlight">guest stars</span>,
            <span className="highlight"> performers</span>, dan kompetisi seru!
            </p>

            <h5>Meet our Guest Stars!</h5>

            <div className="mt-3">
              <h5>Performers</h5>
              <div className="d-flex flex-wrap gap-3">
                    <PersonCard name="Freetime" image="/images/freetime_2.png" link={LINKS.freetime} />
                    <PersonCard name="Gwen" image="/images/Gwen.png" link={LINKS.gwen} />
                    <PersonCard name="Miirukat" image="/images/Miirukat2.png" link={LINKS.miirukat} />
                    <PersonCard name="Cherry" image="/images/Cherry2.png" link={LINKS.cherry} />
                </div>
            </div>

            <div className="mt-3">
              <h5>Judges</h5>
              <div className="d-flex flex-wrap gap-3">
                    <PersonCard name="Kethy Sondakh" image="/images/Kethy_alt2.png" link={LINKS.kethy} />
                    <PersonCard name="Abi" image="/images/Abi.png" link={LINKS.abi} />
                    <PersonCard name="Miirukat" image="/images/Miirukat2.png" link={LINKS.miirukat} />
                    <PersonCard name="Meia" image="/images/Meia.png" link={LINKS.meia} />
                    <PersonCard name="Anggoro" image="/images/anggoro.png" link={LINKS.anggoro} />
                    <PersonCard name="tatonary" image="/images/tatonary.jpg" link={LINKS.tatonary} />
                    <PersonCard name="stipeanut" image="/images/stipeanut.jpg" link={LINKS.stipeanut} />
                </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
            <Image
              src="/images/poster.png"
              priority
              alt="Event Poster"
              width={500}
              height={750}
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>
    </section>
  );
}