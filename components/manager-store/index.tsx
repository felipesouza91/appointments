"use client";

import {
  ArrowRight,
  CalendarDays,
  Check,
  Pencil,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "../theme-provider";
import { ThemeToggle } from "../theme-toggle";

export function ManageStoresPage() {
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
            <Link className="sw-appointments-nav-link" href="/appointments">
              Appointments
            </Link>
            <Link
              className="sw-appointments-nav-link"
              href="/manage-stores"
              aria-current="page"
            >
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

      <main className="sw-appointments-main" aria-labelledby="stores-heading">
        <div className="sw-appointments-heading">
          <div>
            <span className="sw-auth-kicker">YOUR SLOTWISE ACCOUNT</span>
            <h1 id="stores-heading">Manage stores</h1>
            <p>Select a store to view its appointment schedule.</p>
          </div>
          <div className="sw-store-create-wrap">
            <Link
              className="sw-button sw-appointments-action sw-store-create-button"
              href="/manage-stores/new"
            >
              Create a store <ArrowRight size={16} />
            </Link>
            <span className="sw-store-field-note">
              Add store details and working hours.
            </span>
          </div>
        </div>

        <div className="sw-store-controls">
          <label className="sw-store-select-field" htmlFor="store-select">
            <span>Select a store</span>
            <select
              className="sw-store-select"
              id="store-select"
              name="store"
              defaultValue="studio-luma"
              aria-describedby="store-select-note"
            >
              <option value="studio-luma">Studio Luma · Preview store</option>
            </select>
            <span className="sw-store-field-note" id="store-select-note">
              Studio Luma is a preview store. Your stores will appear here when
              account data is connected.
            </span>
          </label>
          <Link
            className="sw-button sw-store-edit-button"
            href="/manage-stores/studio-luma/edit"
          >
            <Pencil size={15} aria-hidden="true" /> Edit store
          </Link>
        </div>

        <section
          className="sw-appointments-card"
          aria-labelledby="store-appointments-heading"
        >
          <div className="sw-appointments-card-heading">
            <div>
              <h2 id="store-appointments-heading">Studio Luma appointments</h2>
              <p>Bookings scheduled at this store.</p>
            </div>
          </div>
          <div className="sw-appointments-table-wrap">
            <table className="sw-appointments-table">
              <caption className="sr-only">
                Appointments for Studio Luma, including customer, service, date
                and time, and status
              </caption>
              <thead>
                <tr>
                  <th scope="col">Customer</th>
                  <th scope="col">Service</th>
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
                      <h3>Store appointments will appear here</h3>
                      <p>
                        Appointment data isn&apos;t connected in this preview,
                        so there are no bookings to display yet.
                      </p>
                      <Link href="/stores/studio-luma">
                        View customer booking page <ArrowRight size={15} />
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="sw-auth-footer">
        <span>© 2026 Slotwise. Your time, well spent.</span>
        <span>Appointments, on your schedule.</span>
      </footer>
    </div>
  );
}
