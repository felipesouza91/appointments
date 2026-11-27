"use client";

import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Menu,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useTheme } from "../theme-provider";
import { ThemeToggle } from "../theme-toggle";

const timeSlots = [
  "9:00 AM",
  "10:30 AM",
  "12:00 PM",
  "1:30 PM",
  "3:00 PM",
  "4:30 PM",
];

function todayAsDateValue() {
  const today = new Date();
  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60_000,
  );
  return localDate.toISOString().slice(0, 10);
}

function formatDate(dateValue: string) {
  if (!dateValue) return "";
  const [year, month, day] = dateValue.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date(year, month - 1, day));
}

export function StoreAppointmentPage({
  storeName,
  storeSlug,
}: {
  storeName: string;
  storeSlug: string;
}) {
  const { theme } = useTheme();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (date < todayAsDateValue()) {
      setDateError("Choose today or a future date to continue.");
      return;
    }
    if (!time) {
      setTimeError("Choose an appointment time to continue.");
      return;
    }
    setDateError("");
    setTimeError("");
    setSubmitted(true);
  }

  return (
    <main className="store-booking-page" data-theme={theme}>
      <header className="sw-header">
        <div className="sw-container sw-nav">
          <Link className="sw-brand" href="/" aria-label="Slotwise home">
            <span className="sw-brand-mark">
              <Check size={19} strokeWidth={2.6} />
            </span>
            <span>slotwise</span>
          </Link>
          <nav
            className={
              menuOpen ? "sw-nav-links sw-nav-links-open" : "sw-nav-links"
            }
            aria-label="Main navigation"
          >
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Explore services
            </Link>
            <Link href="/#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </Link>
          </nav>
          <div className="sw-actions">
            <Link
              className="sw-search"
              href="/services"
              aria-label="Browse services"
            >
              <Search size={17} aria-hidden="true" />
              <span>Browse services</span>
            </Link>
            <ThemeToggle />
            <Link className="sw-signin" href="/signin">
              Sign in
            </Link>
            <Link className="sw-button sw-signup" href="/#signup">
              Sign up
            </Link>
          </div>
          <button
            className="sw-menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className="sb-container sb-main">
        <div className="sb-intro">
          <span className="sb-eyebrow">Appointment booking</span>
          <h1>
            Book at <span>{storeName}</span>
          </h1>
          <p>
            Choose a day and time, then leave your contact details. It only
            takes a moment.
          </p>
        </div>

        <div className="sb-layout">
          <section
            className="sb-form-card"
            aria-labelledby="booking-form-title"
          >
            {submitted ? (
              <div className="sb-success" role="status" aria-live="polite">
                <span className="sb-success-icon">
                  <Check size={25} />
                </span>
                <span className="sb-eyebrow">Demo complete</span>
                <h2>Thanks, {name.split(" ")[0]}.</h2>
                <p>
                  Your example appointment at <strong>{storeName}</strong> is
                  set for <strong>{formatDate(date)}</strong> at{" "}
                  <strong>{time}</strong>.
                </p>
                <p className="sb-demo-note">
                  This is a preview only. The appointment has not been sent to
                  the store or saved.
                </p>
                <button
                  className="sb-secondary-button"
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Edit appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="sb-form-heading">
                  <span className="sb-step-number">1</span>
                  <div>
                    <h2 id="booking-form-title">Choose a date</h2>
                    <p>Select the day you&apos;d like to visit.</p>
                  </div>
                </div>
                <label className="sb-date-label" htmlFor="appointment-date">
                  <span>
                    <CalendarDays size={17} /> Appointment date
                  </span>
                  <input
                    id="appointment-date"
                    type="date"
                    required
                    value={date}
                    onChange={(event) => {
                      setDate(event.target.value);
                      setTime("");
                      setDateError("");
                      setTimeError("");
                    }}
                    aria-describedby={dateError ? "date-error" : undefined}
                  />
                </label>
                {dateError && (
                  <p className="sb-field-error" id="date-error" role="alert">
                    {dateError}
                  </p>
                )}

                <fieldset
                  className="sb-time-fieldset"
                  aria-describedby={timeError ? "time-error" : undefined}
                >
                  <legend>
                    <span className="sb-step-number">2</span>
                    <span>
                      <strong>Choose a time</strong>
                      <small>
                        {date
                          ? `Available times for ${formatDate(date)}`
                          : "Sample appointment times"}
                      </small>
                    </span>
                  </legend>
                  <div className="sb-time-grid">
                    {timeSlots.map((slot) => (
                      <button
                        className={
                          time === slot
                            ? "sb-time-option sb-time-option-selected"
                            : "sb-time-option"
                        }
                        type="button"
                        key={slot}
                        aria-pressed={time === slot}
                        onClick={() => {
                          setTime(slot);
                          setTimeError("");
                        }}
                      >
                        <Clock3 size={15} />
                        {slot}
                      </button>
                    ))}
                  </div>
                  {timeError && (
                    <p className="sb-field-error" id="time-error" role="alert">
                      {timeError}
                    </p>
                  )}
                </fieldset>

                <section
                  className="sb-contact-section"
                  aria-labelledby="contact-heading"
                >
                  <div className="sb-form-heading">
                    <span className="sb-step-number">3</span>
                    <div>
                      <h2 id="contact-heading">Your contact details</h2>
                      <p>We&apos;ll use these for this demo confirmation.</p>
                    </div>
                  </div>
                  <div className="sb-input-grid">
                    <label htmlFor="guest-name">
                      Your name
                      <input
                        id="guest-name"
                        name="name"
                        autoComplete="name"
                        placeholder="e.g. Alex Morgan"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </label>
                    <label htmlFor="guest-phone">
                      Phone number
                      <input
                        id="guest-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="e.g. (555) 123-4567"
                        pattern="[+0-9 ()-]{7,20}"
                        title="Enter 7–20 digits, spaces, parentheses, plus signs, or hyphens."
                        required
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </label>
                  </div>
                  <button className="sb-submit-button" type="submit">
                    Review appointment <ArrowRight size={17} />
                  </button>
                  <p className="sb-privacy-note">
                    Demo only. Your details won&apos;t be saved or shared.
                  </p>
                </section>
              </form>
            )}
          </section>

          <aside className="sb-store-card" aria-label="Store information">
            <div className="sb-store-art">
              <span className="sb-store-art-mark">
                <CalendarDays size={30} />
              </span>
              <span className="sb-store-status">
                <span /> Example schedule
              </span>
            </div>
            <div className="sb-store-copy">
              <span className="sb-eyebrow">Your service provider</span>
              <h2>{storeName}</h2>
              <p className="sb-location">
                <MapPin size={15} /> Local service provider
              </p>
              <div className="sb-store-divider" />
              <div className="sb-summary-row">
                <span>Service</span>
                <strong>Haircut &amp; styling</strong>
              </div>
              <div className="sb-summary-row">
                <span>Duration</span>
                <strong>45 minutes</strong>
              </div>
              <div className="sb-summary-row">
                <span>Starting at</span>
                <strong>$48</strong>
              </div>
              {date && (
                <div className="sb-selected-summary">
                  <CalendarDays size={16} />
                  <span>
                    {formatDate(date)}
                    {time ? ` · ${time}` : " · Pick a time next"}
                  </span>
                </div>
              )}
              <p className="sb-demo-note">
                Sample store and availability shown for this prototype.
              </p>
            </div>
          </aside>
        </div>
        <p className="sb-page-footnote">
          Store page: <code>/stores/{storeSlug}</code>
        </p>
      </div>
    </main>
  );
}
