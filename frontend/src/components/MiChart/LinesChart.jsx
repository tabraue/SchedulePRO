import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const lengths = [10, 25, 38, 25, 45, 0];

const shifts = ["Morning", "Evening", "Night", "Off", "Holiday", "Medical"];

let midata = {
  labels: shifts,
  datasets: [
    {
      label: "Shift Graphics",
      data: lengths,
      tension: 0.5,
      fill: true,
      borderColor: "#357b8d",
      backgroundColor: "#70b8c2",
      pointRadius: 5,
      pointBorderColor: "#f2a154",
      pointBackgroundColor: "#D68E61",
    },
  ],
};

let misoptions = {};

export default function LinesChart() {
  return <Line data={midata} options={misoptions} />;
}
