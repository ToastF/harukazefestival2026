import ButtonLink from "@/components/ButtonLink";
import { LINKS } from "@/lib/Constants";

export default function Home() {
  return (
    <main className="container text-center mt-5">

      <div className="mb-5">
        <img
          src="/images/logo_cropped.png" 
          alt="Harukaze Festival Logo"
          className="img-fluid"
          style={{ maxHeight: "200px" }}
        />
      </div>

      <div className="row g-3 justify-content-center">

        <div className="col-12 col-md-6 col-lg-3">
          <ButtonLink href={LINKS.rules} label="Rules" src="images/Aiba.png" variant="blue" />
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <ButtonLink href={LINKS.register} label="Register" src="images/Kosaka.png" variant="blue"/>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <ButtonLink href={LINKS.contact1} label="Instagram" src="images/Maki.png" variant="blue" />
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <ButtonLink href={LINKS.contact2} label="WhatsApp" src="images/Kogo.png" imgWidth="80px" variant="blue"/>
        </div>

      </div>

      {/* Image */}
      <div className="mt-5 mb-5">
        <img
          src="/images/poster.png"
          alt="Event Poster"
          className="img-fluid rounded shadow"
          style={{ maxHeight: "700px" }}
        />
      </div>

    </main>
  );
}