import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sw-header">
      <div className="sw-container sw-auth-header">
        <Link className="sw-brand" href="/" aria-label="Slotwise home">
          <span className="sw-brand-mark">
            <Check size={19} strokeWidth={2.6} />
          </span>
          <span>slotwise</span>
        </Link>
        <div className="sw-auth-header-actions">
          <ThemeToggle />

          <Link className="sw-auth-browse-link" href="/services">
            Explore services <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
