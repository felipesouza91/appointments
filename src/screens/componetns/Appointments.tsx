import IconButton from "@/components/icon-button";
import InputDate from "@/components/input-date";
import { useAppointment } from "@/hooks/appointments.hooks";
import { SunDimIcon } from "@phosphor-icons/react";
import { format } from "date-fns";
import React, { useState } from "react";

const Appointments: React.FC = () => {
  const { getAppointmentsFormmated, removeAppointment } = useAppointment();
  const [selectDate, setSelectDate] = useState<Date | null>(new Date());

  const availableAppointments = getAppointmentsFormmated(selectDate!);

  const handleRemoveAppointment = (id: string) => {
    console.log("aqui");
    removeAppointment(id);
  };

  return (
    <div className="flex flex-1 flex-col xl:py-20 xl:px-28 items-center gap-8 xl:w-5/6">
      <div className="flex flex-col xl:flex-row  justify-between gap-3 w-full ">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl/normal font-bold text-gray-100">
            Sua Agenda
          </h2>
          <span className="text-sm/normal text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </span>
        </div>
        <div className="w-fit">
          <InputDate
            selected={selectDate}
            dateFormat="dd/MM/yyyy"
            onChange={setSelectDate}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col w-full  gap-3">
        {availableAppointments &&
          Object.entries(availableAppointments).map(([key, data]) => (
            <div className="border border-gray-600 rounded-lg" key={key}>
              <div className="flex flex-row items-center justify-between gap-3 py-3 px-5 border-b border-b-gray-600">
                <div className="flex flex-row flex-1 items-center  gap-3 ">
                  {key === "0" ? (
                    <SunDimIcon size={20} className="text-yellow-dark" />
                  ) : key === "1" ? (
                    <SunDimIcon size={20} className="text-yellow-dark" />
                  ) : (
                    <SunDimIcon size={20} className="text-yellow-dark" />
                  )}
                  <span className="text-sm/normal text-gray-300">
                    {data.title}
                  </span>
                </div>
                <span className="text-sm/normal text-gray-400">09h-12h</span>
              </div>
              <div className="flex flex-col p-5">
                {data.appointments.length === 0 ? (
                  <div>
                    <span className="text-base/normal text-gray-200">
                      Não ha agendamentos para esse periodo
                    </span>
                  </div>
                ) : (
                  data.appointments.map((appointment) => (
                    <div className="flex flex-row" key={appointment.id}>
                      <div className="flex flex-row flex-1 items-center gap-3">
                        <span className="text-base/normal font-bold text-gray-200">
                          {format(appointment.scheduleDate, "HH:mm")}
                        </span>
                        <span className="text-base/normal text-gray-200">
                          {appointment.clientName}
                        </span>
                      </div>
                      <IconButton
                        onClick={() => handleRemoveAppointment(appointment.id)}
                        icon="Trash"
                        className="text-yellow"
                        iconSize={16}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Appointments;
