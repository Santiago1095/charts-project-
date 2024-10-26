import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.css";

import Hmome from "./Home";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BubbleController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BubbleController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hmome />} />
      </Routes>
    </BrowserRouter>
  );
}
