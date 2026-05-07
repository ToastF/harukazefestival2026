// /components/PersonCard.tsx
import Image from "next/image";

type Props = {
  name: string;
  image: string;
  link: string;
  subtitle: string;
};

export default function PersonCard({ name, image, link, subtitle }: Props) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="person-card">
      <div className="card-inner text-center">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="rounded-circle mb-2"
        />
        <p className="mb-0">{name}</p>
        <em>{subtitle}</em>
      </div>
    </a>
  );
}