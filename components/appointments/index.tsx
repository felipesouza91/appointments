"use client";

import { ArrowRight, CalendarDays, Check, UserRound } from "lucide-react";
import Link from "next/link";
import Footer from "../footer";
import { useTheme } from "../theme-provider";
import { ThemeToggle } from "../theme-toggle";

export function AppointmentsPage() {
  const { theme } = useTheme();

  return (
    <div className="slotwise sw-appointments-page" data-theme={theme}>
      <header className="sw-header">
        <div className="sw-container sw-auth-header sw-appointments-header">
          <Link className="sw-brand" href="/" aria-label="Slotwise home">
            <span className="sw-brand-mark">
              <Check size={19} strokeWidth={2.6} />
            </span>
            <span>slotwise</span>
          </Link>
          <nav className="sw-appointments-nav" aria-label="Account navigation">
            <Link
              className="sw-appointments-nav-link"
              href="/appointments"
              aria-current="page"
            >
              Appointments
            </Link>
            <Link className="sw-appointments-nav-link" href="/manage-stores">
              Manage stores
            </Link>
            <ThemeToggle />
          </nav>
          <div
            className="sw-appointments-user"
            aria-label="Account name placeholder"
          >
            <span className="sw-appointments-avatar">
              <UserRound size={17} aria-hidden="true" />
            </span>
            <span className="sw-appointments-user-name">Your name</span>
          </div>
        </div>
      </header>

      <main
        className="sw-appointments-main"
        aria-labelledby="appointments-heading"
      >
        <div className="sw-appointments-heading">
          <div>
            <span className="sw-auth-kicker">YOUR SLOTWISE ACCOUNT</span>
            <h1 id="appointments-heading">Your appointments</h1>
            <p>
              Keep track of the services you&apos;ve booked and when
              they&apos;re happening.
            </p>
          </div>
          <Link className="sw-button sw-appointments-action" href="/services">
            Explore services <ArrowRight size={16} />
          </Link>
        </div>

        <section
          className="sw-appointments-card"
          aria-labelledby="appointments-table-heading"
        >
          <div className="sw-appointments-card-heading">
            <div>
              <h2 id="appointments-table-heading">All appointments</h2>
              <p>Upcoming and past bookings in one place.</p>
            </div>
          </div>
          <div className="sw-appointments-table-wrap">
            <table className="sw-appointments-table">
              <caption className="sr-only">
                Your booked services, providers, appointment times, and status
              </caption>
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Provider</th>
                  <th scope="col">Date &amp; time</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4}>
                    <div className="sw-appointments-empty">
                      <span className="sw-appointments-empty-icon">
                        <CalendarDays size={22} aria-hidden="true" />
                      </span>
                      <h3>Appointments will appear here</h3>
                      <p>
                        Sign-in and appointment data aren&apos;t connected in
                        this preview, so there are no bookings to display yet.
                      </p>
                      <Link href="/services">
                        Browse services <ArrowRight size={15} />
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
