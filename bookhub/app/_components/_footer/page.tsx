
import Link from "next/link";
import { FaFacebookF,FaGithub,FaInstagram, FaLinkedinIn } from "react-icons/fa";

 


export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              Book<span className="text-primary">Hub</span>
            </Link>

            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              Discover your next favorite book. Explore thousands of books,
              find interesting authors, and build your personal reading list.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-primary hover:text-primary-foreground"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-primary hover:text-primary-foreground"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-primary hover:text-primary-foreground"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-primary hover:text-primary-foreground"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold">
              Navigation
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-foreground"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/book"
                  className="transition hover:text-foreground"
                >
                  Books
                </Link>
              </li>
              <li>  
                <Link
                  href="/aboutUs"
                  className="transition hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                Email: support@bookhub.com
              </li>

              <li>
                Phone: +20 100 000 0000
              </li>

              <li>
                Cairo, Egypt
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} BookHub. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-foreground"
            >
              Terms
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

