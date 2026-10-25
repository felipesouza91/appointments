import {
  addHours,
  addMinutes,
  differenceInSeconds,
  format,
  startOfDay,
} from "date-fns";
import { useState } from "react";

type AppintmentInput = {
  clientName: string;
  scheduleDate: Date;
};

export type AvialablePeriod = {
  morning: {
    periods: Period[];
  };
  afternoon: {
    periods: Period[];
  };
  night: {
    periods: Period[];
  };
};

export type Period = {
  date: Date;
  isScheduled: boolean;
};

type Appointment = {
  id: string;
  clientName: string;
  scheduleDate: Date;
  createdAt: Date;
};

type UseAppointmentsProps = {
  appointments: Appointment[];
  addAppointments: (data: AppintmentInput) => void;
  removeAppointments: (id: string) => void;
  getAvailableAppointments: (date: Date) => void;
};

const PERRIODS = [
  { init: 9, end: 12 },
  { init: 13, end: 18 },
  { init: 19, end: 21 },
];

const TIME = 60;

export const useAppointments = (): UseAppointmentsProps => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointments = (data: AppintmentInput) => {
    setAppointments((prevData) => [
      ...prevData,
      { ...data, id: "", createdAt: new Date() },
    ]);
  };

  const getAvailableAppointments = (date: Date) => {
    console.log("Get data");
    const dateStart = startOfDay(date);
    const formatedDate = format(date, "yyyy-MM-dd");

    const currentAppoinemtns = appointments.filter(
      (data) => format(data.scheduleDate, "yyyy-MM-dd") === formatedDate,
    );

    const values: Period[] = PERRIODS.map((data) => {
      const values = [];
      const { init, end } = data;
      const endTime = addHours(dateStart, end);
      let currentTime = addHours(dateStart, init);
      values.push({ date: currentTime, isScheduled: false });
      do {
        currentTime = addMinutes(currentTime, TIME);
        values.push({ date: currentTime, isScheduled: false });
      } while (differenceInSeconds(endTime, currentTime) > 3600);
      return values;
    })
      .flat()
      .map((period) => {
        const exits = currentAppoinemtns.some(
          (appointment) =>
            differenceInSeconds(appointment.scheduleDate, period.date) === 0,
        );
        if (exits) {
          return { ...period, isScheduled: true };
        }
        return period;
      });

    const periods: AvialablePeriod = values.reduce(
      (prev, period) => {
        const hours = period.date.getHours();
        if (hours <= 12) {
          prev.morning.periods.push(period);
        } else if (hours <= 18) {
          prev.afternoon.periods.push(period);
        } else {
          prev.night.periods.push(period);
        }
        return prev;
      },
      {
        afternoon: { periods: [] },
        morning: { periods: [] },
        night: { periods: [] },
      } as AvialablePeriod,
    );

    return periods;
  };

  const removeAppointments = (id: string) => {
    setAppointments((prevData) => prevData.filter((data) => data.id !== id));
  };

  return {
    appointments,
    addAppointments,
    removeAppointments,
    getAvailableAppointments,
  };
};
