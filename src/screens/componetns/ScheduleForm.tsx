import { UserSquareIcon } from "@phosphor-icons/react";
import React from "react";
import Button from "../../components/button";
import InputText from "../../components/input-text";
import SelectButton from "../../components/select-button";

// import { Container } from './styles';

const ScheduleForm: React.FC = () => {
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
          <input type="date" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-base/normal font-bold text-gray-200">
            Horariosh
          </span>
          <div className="flex flex-col gap-2">
            <span className="text-sm/normal font-bold text-gray-300">
              Manha
            </span>
            <div className="flex flex-row gap-2 flex-wrap">
              <SelectButton title="09:00" />
              <SelectButton title="09:00" />
              <SelectButton title="09:00" />
              <SelectButton title="09:00" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm/normal font-bold text-gray-300">
              Tarde
            </span>
            <div className="flex flex-row gap-2 flex-wrap">
              <SelectButton title="09:00" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm/normal font-bold text-gray-300">
              Noite
            </span>
            <div className="flex flex-row gap-2 flex-wrap">
              <SelectButton title="09:00" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <span className="text-base/normal font-bold text-gray-200">
          Cliente
        </span>
        <InputText
          icon={<UserSquareIcon size={20} className="text-yellow" />}
        />
      </div>
      <Button title="AGENDAR" />
    </div>
  );
};

export default ScheduleForm;
