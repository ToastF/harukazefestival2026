import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/lib/Constants";

import { 
  ChatBubbleLeftRightIcon,
  CameraIcon 
} from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row g-4">

          {/* Logo */}
          <div className="col-12 col-md-4">
            <div className="footer-brand">
              <Image
                src="/images/logo_cropped.png"
                priority
                alt="Harukaze Festival"
                width={140}
                height={60}
              />
            </div>
          </div>

          {/* Links */}
          <div className="col-6 col-md-4">
            <h5>Quick Links</h5>

            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#competitions">Competitions</a>
              <a href="#timeline">Timeline</a>
              <Link href="/rules">Rules</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="col-6 col-md-4">
            <h5>Contact</h5>

            <div className="footer-icon-links">

              {/* Instagram */}
              <a href={LINKS.contact1} target="_blank" className="icon-link">
                <CameraIcon className="footer-icon" />
                <span>Instagram</span>
              </a>

              {/* WhatsApp */}
              <a href={LINKS.contact2} target="_blank" className="icon-link">
                <ChatBubbleLeftRightIcon className="footer-icon" />
                <span>WhatsApp</span>
              </a>

            </div>

            <a
              href={LINKS.register}
              target="_blank"
              className="footer-cta mt-3 d-inline-block"
            >
              Register Now
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom mt-5 text-center">
          <small>
            © {new Date().getFullYear()} Harukaze Festival. All rights reserved.
          </small>
        </div>

      </div>

    </footer>
  );
}