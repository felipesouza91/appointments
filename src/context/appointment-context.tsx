/* eslint-disable react-refresh/only-export-components */
import {
  addHours,
  addMinutes,
  differenceInSeconds,
  endOfDay,
  format,
  isAfter,
  isBefore,
  startOfDay,
} from "date-fns";
import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

type AppintmentInput = {
  clientName: string;
  scheduleDate: Date;
};

export type AppoitmentsDTO = {
  0: {
    title: string;
    appointments: Appointment[];
  };
  1: {
    title: string;
    appointments: Appointment[];
  };
  2: {
    title: string;
    appointments: Appointment[];
  };
};

export type AvialablePeriod = {
  0: {
    title: string;
    periods: Period[];
  };
  1: {
    title: string;
    periods: Period[];
  };
  2: {
    title: string;
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

type AppointmentContextData = {
  appointments: Appointment[];
  getAppointmentsFormmated: (date: Date) => AppoitmentsDTO;
  addAppointments: (data: AppintmentInput) => void;
  removeAppointment: (id: string) => void;
  getAvailableAppointments: (date: Date) => AvialablePeriod;
};

export const AppointmentContext = createContext<AppointmentContextData>(
  {} as AppointmentContextData,
);

const PERRIODS = [
  { init: 9, end: 12 },
  { init: 13, end: 18 },
  { init: 19, end: 21 },
];

const TIME = 60;
const APPOINTEMENT_KEY = "appointments";

const AppointmentProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const data = localStorage.getItem(APPOINTEMENT_KEY);
    console.log("useeffecat local data");
    if (data) {
      function loadDate(data: string) {
        setAppointments(JSON.parse(data));
      }
      loadDate(data);
    }
  }, []);

  const getAppointmentsFormmated = useCallback(
    (date: Date) => {
      const periods: AppoitmentsDTO = appointments
        .filter(
          (appointment) =>
            isAfter(appointment.scheduleDate, startOfDay(date)) &&
            isBefore(appointment.scheduleDate, endOfDay(date)),
        )
        .reduce(
          (prev, period) => {
            const hours = new Date(period.scheduleDate).getHours();
            if (hours <= 12) {
              prev[0].appointments.push(period);
            } else if (hours <= 18) {
              prev[1].appointments.push(period);
            } else {
              prev[2].appointments.push(period);
            }
            return prev;
          },
          {
            0: { title: "Manhã", appointments: [] },
            1: { title: "Tarde", appointments: [] },
            2: { title: "Noite", appointments: [] },
          } as AppoitmentsDTO,
        );

      return periods;
    },
    [appointments],
  );

  const addAppointments = (data: AppintmentInput) => {
    const newValue = {
      ...data,
      id: "i" + appointments.length + 1,
      createdAt: new Date(),
    };
    setAppointments((prevData) => [...prevData, newValue]);
    localStorage.setItem(
      APPOINTEMENT_KEY,
      JSON.stringify([...appointments, newValue]),
    );
  };

  const getAvailableAppointments = useCallback(
    (date: Date) => {
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
          if (exits || isBefore(period.date, new Date())) {
            return { ...period, isScheduled: true };
          }
          return period;
        });

      const periods: AvialablePeriod = values.reduce(
        (prev, period) => {
          const hours = period.date.getHours();
          if (hours <= 12) {
            prev[0].periods.push(period);
          } else if (hours <= 18) {
            prev[1].periods.push(period);
          } else {
            prev[2].periods.push(period);
          }
          return prev;
        },
        {
          0: { title: "Manhã", periods: [] },
          1: { title: "Tarde", periods: [] },
          2: { title: "Noite", periods: [] },
        } as AvialablePeriod,
      );

      return periods;
    },
    [appointments],
  );

  const removeAppointment = (id: string) => {
    const newDates = appointments.filter((data) => data.id !== id);
    setAppointments(newDates);
    localStorage.setItem(APPOINTEMENT_KEY, JSON.stringify(newDates));
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        addAppointments,
        getAppointmentsFormmated,
        getAvailableAppointments,
        removeAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentProvider;
