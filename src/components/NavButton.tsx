"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  href: string;
  label: string;
  src: string;
  imgWidth?: string;
  variant?: "blue" | "yellow" | "pink";
};

export default function NavButton({
  href,
  label,
  src,
  imgWidth,
  variant = "blue",
}: Props) {
  const router = useRouter();

  return (
    <div className="text-center">
      <button
        type="button"
        onClick={() => router.push(href)}
        className={`cloud-btn cloud-${variant}`}
      >
        {label}
      </button>

      <div className="mt-2">
        <Image
          src={src}
          alt="icon"
          width={100}
          height={100}
          priority
          style={{
            width: imgWidth || "100px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}