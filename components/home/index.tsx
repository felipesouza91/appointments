"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "../footer";
import { useTheme } from "../theme-provider";
import BookingCard from "./components/booking-card";
import Header from "./components/header";

export function ServiceSchedulingLanding() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="slotwise flex flex-1 flex-col" data-theme={theme}>
      <Header />
      <main id="home" className="flex flex-1">
        <section className="sw-container sw-hero">
          <div className="sw-hero-copy">
            <div className="sw-eyebrow">A better way to book</div>
            <h1>
              Your time.
              <br />
              <span>Your choice.</span>
            </h1>
            <p>
              Find and book the services you need, exactly when you need them.
              Less back-and-forth, more time for what matters.
            </p>
            <div className="sw-hero-buttons">
              <Link className="sw-button" href="/services">
                Find a service <ArrowRight size={16} />
              </Link>
              <a className="sw-text-link" href="#how-it-works">
                See how it works <ChevronRight size={16} />
              </a>
            </div>
            <div className="sw-trust">
              <div className="sw-avatars" aria-hidden="true">
                <span>JD</span>
                <span>MK</span>
                <span>AL</span>
                <span>SR</span>
              </div>
              <p>
                <strong>Loved by 12,000+ people</strong>
                <br />
                making time for what matters
              </p>
            </div>
          </div>
          <BookingCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}
