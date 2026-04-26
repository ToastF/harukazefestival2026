"use client";

import { useState } from "react";
import Image from "next/image";

export default function PosterSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="mt-5 mb-5">
        <Image
          src="/images/poster.png"
          priority
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
                  priority
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
    </>
  );
}