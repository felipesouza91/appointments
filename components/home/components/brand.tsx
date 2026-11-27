import { Check } from "lucide-react";
import React from "react";

// import { Container } from './styles';

const Brand: React.FC = () => {
  return (
    <a className="sw-brand" href="#home" aria-label="Slotwise home">
      <span className="sw-brand-mark">
        <Check size={19} strokeWidth={2.6} />
      </span>
      <span>slotwise</span>
    </a>
  );
};

export default Brand;
