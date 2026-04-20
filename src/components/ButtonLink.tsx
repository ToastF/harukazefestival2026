import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  src: string;
  imgWidth?: string;
  variant?: "blue" | "yellow" | "pink";
};

export default function ButtonLink({
  href,
  label,
  src,
  imgWidth,
  variant = "blue",
}: Props) {
  return (
    <div className="text-center">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`cloud-btn cloud-${variant}`}
      >
        {label}
      </Link>

      <div className="mt-2">
        <Image
          src={src}
          alt="icon"
          width={100}   // required
          height={100}  // required
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