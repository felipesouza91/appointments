"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Plus,
  Trash2,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import Footer from "../footer";
import { useTheme } from "../theme-provider";
import { ThemeToggle } from "../theme-toggle";

const weekdays = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
  { id: "saturday", label: "Saturday" },
  { id: "sunday", label: "Sunday" },
];

type StoreFormPageProps = {
  mode?: "create" | "edit";
  initialStoreName?: string;
  initialAddress?: string;
  initialDescription?: string;
  initialAppointmentDuration?: string;
};

export function StoreFormPage({
  mode = "create",
  initialStoreName = "",
  initialAddress = "",
  initialDescription = "",
  initialAppointmentDuration,
}: StoreFormPageProps) {
  const isEditing = mode === "edit";
  const { theme } = useTheme();
  const [periods, setPeriods] = useState(() =>
    weekdays.map((day, index) => ({
      id: index + 1,
      day: day.id,
      opens: "",
      closes: "",
    })),
  );
  const nextPeriodId = useRef(weekdays.length + 1);

  function updatePeriod(
    id: number,
    field: "day" | "opens" | "closes",
    value: string,
  ) {
    setPeriods((current) =>
      current.map((period) =>
        period.id === id ? { ...period, [field]: value } : period,
      ),
    );
  }

  function addWorkingPeriod() {
    const id = nextPeriodId.current++;
    setPeriods((current) => [
      ...current,
      { id, day: "monday", opens: "", closes: "" },
    ]);
  }

  function removeWorkingPeriod(id: number) {
    setPeriods((current) => current.filter((period) => period.id !== id));
  }

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

      <main
        className="sw-create-store-main"
        aria-labelledby="create-store-heading"
      >
        <Link className="sw-create-store-back" href="/manage-stores">
          <ArrowLeft size={15} /> Back to stores
        </Link>
        <div className="sw-create-store-heading">
          <span className="sw-auth-kicker">YOUR SLOTWISE ACCOUNT</span>
          <h1 id="create-store-heading">
            {isEditing ? "Edit store information" : "Create a store"}
          </h1>
          <p>
            {isEditing
              ? "Update your business details and working hours."
              : "Add your business details and set the hours customers can book."}
          </p>
        </div>

        <section
          className="sw-create-store-card"
          aria-labelledby="store-details-heading"
        >
          <div className="sw-create-store-card-heading">
            <h2 id="store-details-heading">Store details</h2>
            <p>Tell customers about your business and appointment slots.</p>
          </div>
          <div className="sw-create-store-fields">
            <label className="sw-create-store-field" htmlFor="store-name">
              <span>Store name</span>
              <input
                id="store-name"
                name="storeName"
                type="text"
                autoComplete="organization"
                placeholder="e.g. Studio Luma"
                defaultValue={initialStoreName}
              />
            </label>
            <label className="sw-create-store-field" htmlFor="store-address">
              <span>Address</span>
              <input
                id="store-address"
                name="address"
                type="text"
                autoComplete="street-address"
                placeholder="Street address, city, and postal code"
                defaultValue={initialAddress}
              />
            </label>
            <label
              className="sw-create-store-field"
              htmlFor="appointment-duration"
            >
              <span>Appointment duration</span>
              <select
                id="appointment-duration"
                name="appointmentDuration"
                defaultValue={
                  initialAppointmentDuration ?? (isEditing ? "45" : "")
                }
              >
                <option value="" disabled>
                  Select a duration
                </option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
                <option value="90">90 minutes</option>
              </select>
              <small>Length of each bookable appointment.</small>
            </label>
            <label
              className="sw-create-store-field sw-create-store-field-full"
              htmlFor="store-description"
            >
              <span>Description</span>
              <textarea
                id="store-description"
                name="description"
                rows={4}
                placeholder="Describe your store and the services you offer."
                defaultValue={initialDescription}
              />
            </label>
          </div>
        </section>

        <section
          className="sw-create-store-card"
          aria-labelledby="working-hours-heading"
        >
          <div className="sw-create-store-card-heading">
            <h2 id="working-hours-heading">Working hours</h2>
            <p>
              Add a time period for each day the store is open. Add multiple
              periods for split shifts; leave a day blank when closed.
            </p>
          </div>
          <div className="sw-create-hours-wrap">
            <table className="sw-create-hours-table">
              <caption className="sr-only">
                Store working periods by day, including opening and closing
                times
              </caption>
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Opens</th>
                  <th scope="col">Closes</th>
                  <th scope="col">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {periods.map((period, index) => {
                  const dayLabel =
                    weekdays.find((day) => day.id === period.day)?.label ??
                    "Day";

                  return (
                    <tr key={period.id}>
                      <td>
                        <label
                          className="sr-only"
                          htmlFor={`period-${period.id}-day`}
                        >
                          Day for working period {index + 1}
                        </label>
                        <select
                          id={`period-${period.id}-day`}
                          name={`hours[${period.id}][day]`}
                          value={period.day}
                          onChange={(event) =>
                            updatePeriod(period.id, "day", event.target.value)
                          }
                        >
                          {weekdays.map((day) => (
                            <option key={day.id} value={day.id}>
                              {day.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <label
                          className="sr-only"
                          htmlFor={`period-${period.id}-opens`}
                        >
                          {dayLabel} working period {index + 1} opening time
                        </label>
                        <input
                          id={`period-${period.id}-opens`}
                          name={`hours[${period.id}][opens]`}
                          type="time"
                          value={period.opens}
                          onChange={(event) =>
                            updatePeriod(period.id, "opens", event.target.value)
                          }
                        />
                      </td>
                      <td>
                        <label
                          className="sr-only"
                          htmlFor={`period-${period.id}-closes`}
                        >
                          {dayLabel} working period {index + 1} closing time
                        </label>
                        <input
                          id={`period-${period.id}-closes`}
                          name={`hours[${period.id}][closes]`}
                          type="time"
                          value={period.closes}
                          onChange={(event) =>
                            updatePeriod(
                              period.id,
                              "closes",
                              event.target.value,
                            )
                          }
                        />
                      </td>
                      <td>
                        <button
                          className="sw-create-remove-period"
                          type="button"
                          aria-label={`Remove ${dayLabel} working period ${index + 1}`}
                          onClick={() => removeWorkingPeriod(period.id)}
                        >
                          <Trash2 size={15} aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="sw-create-hours-actions">
            <button
              className="sw-create-add-period"
              type="button"
              onClick={addWorkingPeriod}
            >
              <Plus size={15} aria-hidden="true" /> Add working period
            </button>
            <span>
              Each row is one working period. A day can appear more than once.
            </span>
          </div>
        </section>

        <div className="sw-create-store-actions">
          <p id="store-form-note">
            {isEditing
              ? "Store updates aren't connected in this preview, so changes won't be saved."
              : "Store creation isn't connected in this preview, so details won't be saved."}
          </p>
          <button
            className="sw-button sw-create-store-submit"
            type="button"
            disabled
            aria-describedby="store-form-note"
          >
            {isEditing ? "Save changes" : "Create store"}{" "}
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
