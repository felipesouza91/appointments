import { Check, Scissors, Sparkles } from "lucide-react";
import React from "react";

// import { Container } from './styles';

const BookingCard: React.FC = () => {
  return (
    <div className="sw-visual" aria-label="Appointment booking preview">
      <div className="sw-blob" />
      <div className="sw-float-card sw-float-one">
        <span className="sw-float-icon">
          <Check size={17} />
        </span>
        <span>
          <strong>Booking confirmed</strong>
          <small>You&apos;re all set for Friday</small>
        </span>
      </div>
      <article className="sw-booking-card">
        <div className="sw-booking-head">
          <h2>Book an appointment</h2>
          <span aria-hidden="true">···</span>
        </div>
        <div className="sw-service-preview">
          <span className="sw-service-icon">
            <Scissors size={20} />
          </span>
          <span className="sw-service-description">
            <strong>Haircut &amp; styling</strong>
            <small>Studio Luma · 45 min</small>
          </span>
          <strong className="sw-price">$48</strong>
        </div>
        <div className="sw-calendar">
          <div className="sw-calendar-heading">
            <strong>October 2026</strong>
            <span aria-hidden="true">‹ &nbsp;›</span>
          </div>
          <div className="sw-days" aria-label="Available days">
            {["M|12", "T|13", "W|14", "T|15", "F|16", "S|17", "S|18"].map(
              (day, index) => {
                const [label, number] = day.split("|");
                return (
                  <span
                    className={index === 4 ? "sw-day sw-day-active" : "sw-day"}
                    key={day}
                  >
                    {label}
                    <b>{number}</b>
                  </span>
                );
              },
            )}
          </div>
          <div className="sw-time-slots">
            <span>9:00 AM</span>
            <span className="sw-slot-selected">10:30 AM</span>
            <span>1:00 PM</span>
          </div>
          <button className="sw-button sw-confirm" type="button">
            Confirm appointment
          </button>
        </div>
      </article>
      <div className="sw-float-card sw-float-two">
        <span className="sw-float-icon">
          <Sparkles size={17} />
        </span>
        <span>
          <strong>Top-rated nearby</strong>
          <small>4.9 average customer rating</small>
        </span>
      </div>
    </div>
  );
};

export default BookingCard;
