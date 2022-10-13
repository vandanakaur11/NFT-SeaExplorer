import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, Tooltip, Legend } from "chart.js";
import PieChart from "../pieChart/PieChart";
ChartJS.register(LineElement, Tooltip, Legend);
const LineChart = () => {
    const Chartdata2 = {
        labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
        datasets: [
            {
                label: "chart data",
                data: [1, 2, 3, 4, 5],
                backgroundColor: ["rgba(75,192,192,0.6)"],
                borderWidth: 4,
            },
        ],
    };

    return (
        <div>
            {/* <PieChart /> */}
            {/* <Line data={Chartdata2} /> */}
        </div>
    );
};

export default LineChart;
