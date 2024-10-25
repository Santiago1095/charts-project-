import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  BubbleController,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { bubbleChartData } from "./DataFa";


ChartJS.register(
  CategoryScale,
  BubbleController,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function Burbujas() {
  const options = {};

  return <Bubble options={options} data={bubbleChartData} />;
}
