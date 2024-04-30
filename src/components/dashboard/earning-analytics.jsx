import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function EarningAnalytics() {
  const data = {
    labels: [
      "janvier",
      "fevrier",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "aout",
      "septembre",
      "octobre",
      "novembre",
      "decembre",
    ],
    datasets: [
      {
        label: "Total Revenue",
        data: [
          1200, 1900, 3459, 4207, 2459, 3229, 1250, 1999, 3439, 5235, 4229,
          5179,
        ],
        borderWidth: 1,
        backgroundColor: ["#00cccb"],
      },
    ],
  };
  const options = {
    responsive: true,
    animation: {
      duration: 1000, // durée de l'animation en millisecondes
      easing: 'easeOutBounce', // type d'effet d'animation
      onComplete: () => console.log('Animation completed!') // callback à la fin de l'animation
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-[53%] bg-slate-50 rounded-2xl flex items-center justify-center drop-shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
}

export default EarningAnalytics;
