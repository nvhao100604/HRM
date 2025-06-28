import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { FaWallet, FaChartLine, FaPiggyBank } from "react-icons/fa";

const FinancialDashboard = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Income",
        data: [5000, 5500, 6000, 5800],
        backgroundColor: "#4ade80",
      },
      {
        label: "Expenses",
        data: [3500, 3200, 3800, 3600],
        backgroundColor: "#f87171",
      },
      {
        label: "Investments",
        data: [1000, 1200, 1500, 1300],
        backgroundColor: "#60a5fa",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const ProgressBar = ({ goal, current, label }) => {
    const percentage = (current / goal) * 100;
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-medium text-gray-700">
            ${current} / ${goal}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Financial Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Earnings Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Earnings</p>
                <h2 className="text-2xl font-bold text-gray-800">$5,500</h2>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <FaChartLine className="text-green-600 text-xl" />
              </div>
            </div>
            <div className="mt-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              +12.5%
            </div>
          </div>

          {/* Total Savings Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gray-500 text-sm">Total Savings</p>
                <h2 className="text-2xl font-bold text-gray-800">$10,000</h2>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <FaPiggyBank className="text-blue-600 text-xl" />
              </div>
            </div>
            <ProgressBar
              label="Dream Bike"
              current={2500}
              goal={5000}
            />
            <ProgressBar
              label="Education"
              current={1200}
              goal={3000}
            />
            <ProgressBar
              label="Healthcare"
              current={1800}
              goal={2000}
            />
          </div>

          {/* Spending Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Spending</p>
                <h2 className="text-2xl font-bold text-gray-800">$3,200</h2>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <FaWallet className="text-red-600 text-xl" />
              </div>
            </div>
            <div className="mt-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              -8.3%
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Financial Statistics
          </h3>
          <div className="h-[400px]">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
