"use client";

import {
  ArrowRight,
  Check,
  Dumbbell,
  House,
  Menu,
  Scissors,
  Search,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useTheme } from "../theme-provider";
import { ThemeToggle } from "../theme-toggle";

const services = [
  {
    name: "Hair & beauty",
    count: "120+ providers",
    icon: Scissors,
    terms: "hair beauty salon haircut",
  },
  {
    name: "Home services",
    count: "85+ providers",
    icon: House,
    terms: "home cleaning repair",
  },
  {
    name: "Health & wellness",
    count: "64+ providers",
    icon: Sparkles,
    terms: "health wellness massage",
  },
  {
    name: "Fitness",
    count: "42+ providers",
    icon: Dumbbell,
    terms: "fitness training gym",
  },
  {
    name: "Auto care",
    count: "38+ providers",
    icon: Wrench,
    terms: "auto car mechanic",
  },
];

function BrowseBrand() {
  return (
    <Link className="sw-brand" href="/" aria-label="Slotwise home">
      <span className="sw-brand-mark">
        <Check size={19} strokeWidth={2.6} />
      </span>
      <span>slotwise</span>
    </Link>
  );
}

export function ServiceBrowsePage() {
  const { theme } = useTheme();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleServices = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return normalized
      ? services.filter((service) =>
          `${service.name} ${service.terms}`.toLowerCase().includes(normalized),
        )
      : services;
  }, [query]);

  return (
    <div className="slotwise" data-theme={theme}>
      <header className="sw-header">
        <div className="sw-container sw-nav">
          <BrowseBrand />
          <nav
            className={
              menuOpen ? "sw-nav-links sw-nav-links-open" : "sw-nav-links"
            }
            aria-label="Main navigation"
          >
            <Link
              href="/services"
              aria-current="page"
              onClick={() => setMenuOpen(false)}
            >
              Explore services
            </Link>
            <Link href="/#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </Link>
          </nav>
          <div className="sw-actions">
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

      <main className="sw-browse-main" id="services">
        <section
          className="sw-container sw-categories"
          aria-labelledby="services-heading"
        >
          <div className="sw-category-heading">
            <h1 className="sw-browse-title" id="services-heading">
              Your next appointment is just a few clicks away
            </h1>
            <label className="sw-category-search">
              <Search size={17} aria-hidden="true" />
              <input
                aria-label="Search service categories"
                placeholder="Search services"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
          </div>
          <p className="sw-browse-description">
            Browse popular service categories, then preview a provider&apos;s
            appointment options.
          </p>
          {visibleServices.length ? (
            <div className="sw-category-grid">
              {visibleServices.map(({ name, count, icon: Icon }) => (
                <button
                  className={
                    query === name
                      ? "sw-category sw-category-active"
                      : "sw-category"
                  }
                  type="button"
                  key={name}
                  aria-pressed={query === name}
                  onClick={() =>
                    setQuery((current) => (current === name ? "" : name))
                  }
                >
                  <span className="sw-category-icon">
                    <Icon size={20} />
                  </span>
                  <span>
                    <strong>{name}</strong>
                    <small>{count}</small>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <p className="sw-empty">
              No service categories match “{query}”. Try another search.
            </p>
          )}
          <div className="sw-store-preview-link">
            <Link href="/stores/studio-luma">
              Preview a sample store booking page <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="sw-footer">
        <div className="sw-container sw-footer-inner">
          <BrowseBrand />
          <span>© 2026 Slotwise. Your time, well spent.</span>
          <nav aria-label="Footer navigation">
            <Link href="/#for-businesses">About</Link>
            <Link href="/#for-businesses">Privacy</Link>
            <Link href="/#for-businesses">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
