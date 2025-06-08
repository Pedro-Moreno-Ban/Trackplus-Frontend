import Alertas from "../components/Alertas";

function Dashboard() {
  return (
    <div>
      <Alertas tipo="warning" mensaje="El aceite del vehículo XYZ debe cambiarse en 200 km" />
    </div>
  );
}