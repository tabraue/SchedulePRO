//import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LinesChart({ lengthState }) {
  const lengths = [10, 25, 38, 25, 45, 0];

  const shifts = [
    "Morning",
    "Evening",
    "Night",
    "Day Off",
    "Holiday",
    "Medical",
  ];

  let midata = {
    labels: shifts,
    datasets: [
      {
        label: "Shift Graphics",
        data: lengthState,
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
  return (
    <>
      <Bar data={midata} options={misoptions} />
      {/* <Line data={midata} options={misoptions} /> */}
    </>
  );
}
