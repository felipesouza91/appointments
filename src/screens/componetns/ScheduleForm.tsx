import Button from "@/components/button";
import InputDate from "@/components/input-date";
import InputText from "@/components/input-text";
import SelectButton from "@/components/select-button";
import { useAppointment } from "@/hooks/appointments.hooks";
import { UserSquareIcon } from "@phosphor-icons/react";
import { format } from "date-fns";
import React, { useState } from "react";

// import { Container } from './styles';

const ScheduleForm: React.FC = () => {
  const [selectDate, setSelectDate] = useState<Date | null>(new Date());
  const [selectTime, setSelectTime] = useState<Date | undefined>();
  const [clientName, setClientName] = useState<string>("");
  const { addAppointments, getAvailableAppointments } = useAppointment();

  const availableAppointments = getAvailableAppointments(selectDate!);

  function handleAdd() {
    if (!selectTime || !clientName) return;
    addAppointments({
      clientName,
      scheduleDate: selectTime,
    });
    setClientName("");
    setSelectTime(undefined);
  }

  return (
    <div className="flex flex-col gap-6 bg-gray-700 rounded-xl p-20 flex-wrap">
      <div>
        <h2 className="text-2xl/normal text-gray-100 font-bold">
          Agende seu atendimento
        </h2>
        <span className="text-base/snug text-gray-300 ">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </span>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-base/normal font-bold text-gray-200">Data</span>
          <InputDate
            selected={selectDate}
            onChange={setSelectDate}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-base/normal font-bold text-gray-200">
            Horarios
          </span>
          {availableAppointments &&
            Object.entries(availableAppointments).map(([key, data]) => (
              <div className="flex flex-col gap-2" key={key}>
                <span className="text-sm/normal font-bold text-gray-300">
                  {data.title}
                </span>
                <div className="flex flex-row gap-2 flex-wrap">
                  {data.periods.map((period) => (
                    <SelectButton
                      key={period.date.toISOString()}
                      title={format(period.date, "HH:mm")}
                      disabled={period.isScheduled}
                      isSelected={period.date === selectTime}
                      onClick={() => setSelectTime(period.date)}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <span className="text-base/normal font-bold text-gray-200">
          Cliente
        </span>
        <InputText
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          icon={<UserSquareIcon size={20} className="text-yellow" />}
        />
      </div>
      <Button title="AGENDAR" onClick={handleAdd} />
    </div>
  );
};

export default ScheduleForm;
