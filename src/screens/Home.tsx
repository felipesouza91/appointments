import React from "react";
import Appointments from "./componetns/Appointments";
import ScheduleForm from "./componetns/ScheduleForm";

// import { Container } from './styles';

const HomeScreen: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3 ">
      <ScheduleForm />
      <Appointments />
    </div>
  );
};

export default HomeScreen;
