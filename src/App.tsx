import Appointments from "./components/Appointments";
import ScheduleForm from "./components/ScheduleForm";

function App() {
  return (
    <main className="flex items-center justify-center bg-gray-900 h-screen p-3">
      <div className="grid grid-cols-3 gap-3 ">
        <ScheduleForm />
        <Appointments />
      </div>
    </main>
  );
}

export default App;
