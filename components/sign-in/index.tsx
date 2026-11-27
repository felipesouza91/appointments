"use client";

import { ArrowRight, CalendarDays, LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { useTheme } from "../theme-provider";
import Header from "./components/header";

export function SignInPage() {
  const { theme } = useTheme();

  return (
    <div className="slotwise sw-auth-page" data-theme={theme}>
      <Header />

      <main className="sw-auth-main">
        <section className="sw-auth-story" aria-labelledby="auth-story-title">
          <span className="sw-auth-eyebrow">
            <span aria-hidden="true" /> Your time, your choice
          </span>
          <h1 id="auth-story-title">Make room for what matters.</h1>
          <p>
            Sign in to keep your bookings, schedule, and favorite providers
            together in one simple place.
          </p>
          <div className="sw-auth-story-card">
            <span className="sw-auth-story-icon">
              <CalendarDays size={19} />
            </span>
            <span>
              <strong>Your schedule, sorted.</strong>
              <small>
                Appointments are easier when everything is in one place.
              </small>
            </span>
          </div>
        </section>

        <section className="sw-auth-card" aria-labelledby="signin-heading">
          <span className="sw-auth-kicker">WELCOME BACK</span>
          <h2 id="signin-heading">Sign in to Slotwise</h2>
          <p className="sw-auth-subtitle">Pick up right where you left off.</p>

          <div
            className="sw-auth-fields"
            role="group"
            aria-describedby="signin-note"
          >
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
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  readOnly
                />
              </span>
            </label>
          </div>

          <p className="sw-auth-note" id="signin-note">
            Sign-in isn&apos;t connected in this preview, so no credentials are
            collected or sent.
          </p>
          <button
            className="sw-button sw-auth-submit"
            type="button"
            disabled
            aria-describedby="signin-note"
          >
            Sign in <ArrowRight size={16} />
          </button>
          <div className="sw-auth-account-actions">
            <span>New to Slotwise?</span>
            <Link className="sw-auth-signup-button" href="/signup">
              Sign up
            </Link>
          </div>
          <p className="sw-auth-footer-copy">
            Looking for your next appointment?{" "}
            <Link href="/services">Browse services</Link>
          </p>
        </section>
      </main>
    </div>
  );
}
