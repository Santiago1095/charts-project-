import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barChartData } from "./DataFa";
 


ChartJS.register(
  CategoryScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function Barras() {
const options = {};



  return <Bar options={options} data={barChartData}/>
};
