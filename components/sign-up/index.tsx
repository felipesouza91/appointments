"use client";

import {
  ArrowRight,
  CalendarDays,
  Check,
  LockKeyhole,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "../theme-provider";
import { ThemeToggle } from "../theme-toggle";

export function SignUpPage() {
  const { theme } = useTheme();

  return (
    <div className="slotwise sw-auth-page" data-theme={theme}>
      <header className="sw-header">
        <div className="sw-container sw-auth-header">
          <Link className="sw-brand" href="/" aria-label="Slotwise home">
            <span className="sw-brand-mark">
              <Check size={19} strokeWidth={2.6} />
            </span>
            <span>slotwise</span>
          </Link>
          <div className="sw-auth-header-actions">
            <Link
              className="sw-auth-browse-link sw-auth-signin-link"
              href="/signin"
              aria-label="Already a member? Sign in"
            >
              <span className="sw-auth-member-prefix">Already a member? </span>
              Sign in <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="sw-auth-main">
        <section className="sw-auth-story" aria-labelledby="signup-story-title">
          <span className="sw-auth-eyebrow">
            <span aria-hidden="true" /> Your time, your choice
          </span>
          <h1 id="signup-story-title">Better bookings start with you.</h1>
          <p>
            Create your account to keep appointments, your schedule, and
            favorite providers together in one simple place.
          </p>
          <div className="sw-auth-story-card">
            <span className="sw-auth-story-icon">
              <CalendarDays size={19} />
            </span>
            <span>
              <strong>Your schedule, sorted.</strong>
              <small>
                Find a time that works and keep every appointment close.
              </small>
            </span>
          </div>
        </section>

        <section className="sw-auth-card" aria-labelledby="signup-heading">
          <span className="sw-auth-kicker">GET STARTED</span>
          <h2 id="signup-heading">Create your account</h2>
          <p className="sw-auth-subtitle">
            A few details and you&apos;re ready to go.
          </p>

          <div
            className="sw-auth-fields sw-signup-fields"
            role="group"
            aria-describedby="signup-note"
          >
            <div className="flex flex-row"></div>
            <label className="sw-auth-field">
              <span>User name</span>
              <span className="sw-auth-input">
                <UserRound size={17} aria-hidden="true" />
                <input
                  type="text"
                  name="username"
                  autoComplete="name"
                  placeholder="Your name"
                  readOnly
                />
              </span>
            </label>
            <label className="sw-auth-field">
              <span>Email address</span>
              <span className="sw-auth-input">
                <Mail size={17} aria-hidden="true" />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  readOnly
                />
              </span>
            </label>
            <label className="sw-auth-field">
              <span>Password</span>
              <span className="sw-auth-input">
                <LockKeyhole size={17} aria-hidden="true" />
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                  readOnly
                />
              </span>
            </label>
            <label className="sw-auth-field">
              <span>Confirm password</span>
              <span className="sw-auth-input">
                <LockKeyhole size={17} aria-hidden="true" />
                <input
                  type="password"
                  name="confirm-password"
                  autoComplete="new-password"
                  placeholder="Enter your password again"
                  readOnly
                />
              </span>
            </label>
            <label className="sw-auth-field">
              <span>Phone number</span>
              <span className="sw-auth-input">
                <Phone size={17} aria-hidden="true" />
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(555) 123-4567"
                  readOnly
                />
              </span>
            </label>
          </div>

          <p className="sw-auth-note" id="signup-note">
            Account creation isn&apos;t connected in this preview, so your
            information won&apos;t be collected or sent.
          </p>
          <button
            className="sw-button sw-auth-submit"
            type="button"
            disabled
            aria-describedby="signup-note"
          >
            Create account <ArrowRight size={16} />
          </button>
          <p className="sw-auth-footer-copy">
            Already have an account? <Link href="/signin">Sign in</Link>
          </p>
        </section>
      </main>
    </div>
  );
}
