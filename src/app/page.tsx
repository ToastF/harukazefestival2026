"use client";

import { useState } from "react";

import ButtonLink from "@/components/ButtonLink";
import { LINKS } from "@/lib/Constants";
import Image from "next/image";


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <main className="container text-center mt-5">

      <div className="mb-5">
        <Image
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
      </div>

      <div className="row g-3 justify-content-center">

        <div className="col-12 col-md-6 col-lg-3">
          <ButtonLink href={LINKS.rules} label="Rules" src="/images/Aiba.png" variant="blue" />
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <ButtonLink href={LINKS.register} label="Register" src="/images/Kosaka.png" variant="blue"/>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <ButtonLink href={LINKS.contact1} label="Instagram" src="/images/Maki.png" variant="blue" />
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <ButtonLink href={LINKS.contact2} label="WhatsApp" src="/images/Kogo.png" imgWidth="80px" variant="blue"/>
        </div>

      </div>

      <div className="mt-5 mb-5">
        <Image
          src="/images/poster.png"
          alt="Event Poster"
          width={800}
          height={1200}
          sizes="(max-width: 768px) 90vw, 800px"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "590px",
            cursor: "zoom-in",
          }}
          className="rounded shadow"
          onClick={() => setShowModal(true)}
        />
      </div>

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          onClick={() => setShowModal(false)}
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body text-center p-0">
                <Image
                  src="/images/poster.png"
                  alt="Full Poster"
                  width={1200}
                  height={1800}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "90vh",
                    objectFit: "contain",
                  }}
                />
              </div>

            </div>
          </div>
        </div>
      )}

    </main>
  );
}