"use client";

interface ArtworkSubmissionCardProps {
  title: string;
  description?: string;
  qrImage: string;
  formUrl: string;
}

export default function ArtworkSubmissionCard({
  title,
  description,
  qrImage,
  formUrl,
}: ArtworkSubmissionCardProps) {
  return (
    <div className="submission-card mt-5">
      <h4>{title}</h4>

      {description && (
        <p className="submission-desc">
          {description}
        </p>
      )}

      <div className="submission-content">
        <img
          src={qrImage}
          alt="Submission QR"
          className="qr-image"
        />

        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="submission-btn"
        >
          Buka Google Form
        </a>
      </div>

      <small className="submission-note">
        Scan QR atau tekan tombol untuk mengumpulkan karya.
      </small>
    </div>
  );
}