import React from "react";
import Brand from "./home/components/brand";

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="sw-footer">
      <div className="sw-container sw-footer-inner">
        <Brand />
        <span>© 2026 Slotwise. Your time, well spent.</span>
        <nav aria-label="Footer navigation">
          <a href="#for-businesses">About</a>
          <a href="#for-businesses">Privacy</a>
          <a href="#for-businesses">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
