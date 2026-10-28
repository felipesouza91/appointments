import React from "react";
import Appointments from "./componetns/Appointments";
import ScheduleForm from "./componetns/ScheduleForm";

// import { Container } from './styles';

const HomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row gap-20 xl:gap-3 ">
      <ScheduleForm />
      <Appointments />
    </div>
  );
};

export default HomeScreen;
