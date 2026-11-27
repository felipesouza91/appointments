import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Brand from "./brand";

// import { Container } from './styles';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sw-header">
      <div className="sw-container sw-nav">
        <Brand />
        <nav
          className={
            menuOpen ? "sw-nav-links sw-nav-links-open" : "sw-nav-links"
          }
          aria-label="Main navigation"
        >
          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Explore services
          </Link>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How it works
          </a>
        </nav>
        <div className="sw-actions">
          <ThemeToggle />
          <Link className="sw-signin" href="/signin">
            Sign in
          </Link>
          <a className="sw-button sw-signup" href="#signup">
            Sign up
          </a>
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
  );
};

export default Header;
