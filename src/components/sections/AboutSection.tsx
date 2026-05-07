import Image from "next/image";
import PersonCard from "@/components/PersonCard";
import {LINKS} from "@/lib/Constants";

import { 
  CalendarIcon, ClockIcon, MapPinIcon, GlobeAltIcon, TicketIcon
} from "@heroicons/react/24/solid";

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
            <CalendarIcon className="icon"/>
            30-31 May 2026
            </div>

            <div className="info-pill">
            {/* Clock Icon */}
            <ClockIcon className="icon"/>
            10:00 - 20:00 WIB
            </div>

            <div className="info-pill">
            {/* Map Pin Icon */}
            <MapPinIcon className="icon"/>
            Universitas Tarumanagara
            </div>

            <div className="info-pill">
              {/* Public Icon */}
              <GlobeAltIcon className="icon"/>
              Open to Public
            </div>

            <div className="info-pill">
              {/* Ticket Icon */}
              <TicketIcon className="icon"/>
              HTM: Free
            </div>

            <p className="lead mt-4">
              Harukaze Festival kembali hadir dengan suasana yang lebih meriah,
              menampilkan <span className="highlight">performers</span>,
              <span className="highlight"> kompetisi</span>,
              serta <span className="highlight"> Art Market</span> berisi
              ilustrator, creator, dan berbagai merchandise unik yang siap
              menemani pengalaman festivalmu!
            </p>

            <h5>Meet our Guest Stars!</h5>

            <div className="mt-3">
              <h5>Performers</h5>
              <div className="d-flex flex-wrap gap-3">
                    <PersonCard name="Freetime" image="/images/freetime_2.png" link={LINKS.freetime} subtitle="" />
                    <PersonCard name="Gwen" image="/images/Gwen.png" link={LINKS.gwen} subtitle="" />
                    <PersonCard name="Miirukat" image="/images/Miirukat2.png" link={LINKS.miirukat} subtitle="" />
                    <PersonCard name="Cherry" image="/images/Cherry2.png" link={LINKS.cherry} subtitle="" />
                </div>
            </div>

            <div className="mt-3">
              <h5>Judges</h5>
              <div className="d-flex flex-wrap gap-3">
                    <PersonCard name="Kethy Sondakh" image="/images/Kethy_alt2.png" link={LINKS.kethy} subtitle="Dance Cover" />
                    <PersonCard name="Abi" image="/images/Abi.png" link={LINKS.abi} subtitle="J-Song"/>
                    <PersonCard name="Miirukat" image="/images/Miirukat2.png" link={LINKS.miirukat} subtitle="Coswalk" />
                    <PersonCard name="Meia" image="/images/meia.png" link={LINKS.meia} subtitle="Dance Cover" />
                    <PersonCard name="Anggoro" image="/images/anggoro.png" link={LINKS.anggoro} subtitle="Coswalk" />
                    <PersonCard name="tatonary" image="/images/tatonary.jpg" link={LINKS.tatonary} subtitle="Digital Illustration" />
                    <PersonCard name="stipeanut" image="/images/stipeanut.jpg" link={LINKS.stipeanut} subtitle="Digital Illustration" />
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