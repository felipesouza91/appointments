import IconButton from "@/components/icon-button";
import { SunDimIcon } from "@phosphor-icons/react";
import React from "react";

const Appointments: React.FC = () => {
  return (
    <div className="flex flex-col py-20 px-28 items-center gap-8 col-span-2 w-full ">
      <div className="flex flex-row justify-between gap-3 w-full ">
        <div className="flex flex-col flex-1 gap-1">
          <h2 className="text-2xl/normal font-bold text-gray-100">
            Sua Agenda
          </h2>
          <span className="text-sm/normal text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </span>
        </div>
        <input type="date" />
      </div>
      <div className="flex flex-col w-full  gap-3">
        <div className="border border-gray-600 rounded-lg">
          <div className="flex flex-row items-center justify-between gap-3 py-3 px-5 border-b border-b-gray-600">
            <div className="flex flex-row flex-1 items-center  gap-3 ">
              <SunDimIcon size={20} className="text-yellow-dark" />
              <span className="text-sm/normal text-gray-300">Manha</span>
            </div>
            <span className="text-sm/normal text-gray-400">09h-12h</span>
          </div>
          <div className="flex flex-col p-5">
            <div className="flex flex-row">
              <div className="flex flex-row flex-1 items-center gap-3">
                <span className="text-base/normal font-bold text-gray-200">
                  11:00
                </span>
                <span className="text-base/normal text-gray-200">Robert</span>
              </div>
              <IconButton icon="Trash" className="text-yellow" iconSize={16} />
            </div>
          </div>
        </div>
        <div className="border border-gray-600 rounded-lg">
          <div className="flex flex-row items-center justify-between gap-3 py-3 px-5 border-b border-b-gray-600">
            <div className="flex flex-row flex-1 items-center  gap-3 ">
              <SunDimIcon size={20} className="text-yellow-dark" />
              <span className="text-sm/normal text-gray-300">Tarde</span>
            </div>
            <span className="text-sm/normal text-gray-400">13h-18h</span>
          </div>
          <div className="flex flex-col p-5">
            <div className="flex flex-row">
              <div className="flex flex-row flex-1 items-center gap-3">
                <span className="text-base/normal font-bold text-gray-200">
                  11:00
                </span>
                <span className="text-base/normal text-gray-200">Robert</span>
              </div>
              <IconButton icon="Trash" className="text-yellow" iconSize={16} />
            </div>
          </div>
        </div>
        <div className="border border-gray-600 rounded-lg">
          <div className="flex flex-row items-center justify-between gap-3 py-3 px-5 border-b border-b-gray-600">
            <div className="flex flex-row flex-1 items-center  gap-3 ">
              <SunDimIcon size={20} className="text-yellow-dark" />
              <span className="text-sm/normal text-gray-300">Noite</span>
            </div>
            <span className="text-sm/normal text-gray-400">19h-21h</span>
          </div>
          <div className="flex flex-col p-5">
            <div className="flex flex-row">
              <div className="flex flex-row flex-1 items-center gap-3">
                <span className="text-base/normal font-bold text-gray-200">
                  11:00
                </span>
                <span className="text-base/normal text-gray-200">Robert</span>
              </div>
              <IconButton icon="Trash" className="text-yellow" iconSize={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
