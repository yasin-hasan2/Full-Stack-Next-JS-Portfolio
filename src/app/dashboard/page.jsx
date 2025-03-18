"use client";

import { motion } from "framer-motion";
import { BarChart2, Users, CheckCircle, CreditCard } from "lucide-react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const statsCards = [
  { title: "Orders", value: "201", icon: BarChart2, change: "+5.2%" },
  { title: "Approved", value: "36", icon: CheckCircle, change: "+2.5%" },
  { title: "Users", value: "4,890", icon: Users, change: "+12%" },
  { title: "Subscriptions", value: "1,201", icon: CreditCard, change: "+8.1%" },
];

const monthlyData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40, 70, 75, 85, 90, 100],
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      borderColor: "rgb(59, 130, 246)",
      borderWidth: 2,
    },
  ],
};

const userActivityData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "User Activity",
      data: [30, 45, 35, 50, 49, 60],
      borderColor: "rgb(147, 51, 234)",
      tension: 0.4,
    },
  ],
};

const customerOrders = [
  {
    id: 1,
    name: "Peter Smith",
    location: "London",
    date: "22.08.2023",
    status: "Delivered",
    amount: "$520",
  },
  {
    id: 2,
    name: "Maria Garcia",
    location: "New York",
    date: "24.08.2023",
    status: "Processing",
    amount: "$422",
  },
  {
    id: 3,
    name: "Alex Chen",
    location: "Unknown",
    date: "18.08.2023",
    status: "Cancelled",
    amount: "$199",
  },
];

const projectsBlogsData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
  datasets: [
    {
      label: "Projects",
      data: [5, 8, 12, 15, 20, 25],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blogs",
      data: [10, 15, 18, 22, 30, 35],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const projectLanguagesData = {
  labels: ["JavaScript", "Python", "Java", "C++", "Ruby", "Other"],
  datasets: [
    {
      data: [30, 25, 20, 15, 5, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 space-y-6"
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg p-4 sm:p-6 shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">{card.title}</p>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  {card.value}
                </h3>
                <span className="text-green-500 text-xs sm:text-sm">
                  {card.change} since last month
                </span>
              </div>
              <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg p-4 sm:p-6 shadow-lg"
        >
          <h3 className="text-base sm:text-lg font-semibold mb-4">
            Sales Dynamics
          </h3>
          <div className="h-64 sm:h-80">
            <Bar
              data={monthlyData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg p-4 sm:p-6 shadow-lg"
        >
          <h3 className="text-base sm:text-lg font-semibold mb-4">
            Overall User Activity
          </h3>
          <div className="h-64 sm:h-80">
            <Line
              data={userActivityData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* New Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg p-4 sm:p-6 shadow-lg"
        >
          <h3 className="text-base sm:text-lg font-semibold mb-4">
            Projects and Blogs Activity
          </h3>
          <div className="h-64 sm:h-80">
            <Line
              data={projectsBlogsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: "Count",
                    },
                  },
                  x: {
                    title: {
                      display: true,
                      text: "Time",
                    },
                  },
                },
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-lg p-4 sm:p-6 shadow-lg"
        >
          <h3 className="text-base sm:text-lg font-semibold mb-4">
            Project Languages Used
          </h3>
          <div className="h-64 sm:h-80">
            <Pie
              data={projectLanguagesData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "right",
                  },
                  title: {
                    display: true,
                    text: "Project Languages Distribution",
                  },
                },
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Customer Orders Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-lg p-4 sm:p-6 shadow-lg overflow-x-auto"
      >
        <h3 className="text-base sm:text-lg font-semibold mb-4">
          Customer Orders
        </h3>
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 text-xs sm:text-sm">Name</th>
              <th className="text-left py-3 px-4 text-xs sm:text-sm">
                Location
              </th>
              <th className="text-left py-3 px-4 text-xs sm:text-sm">Date</th>
              <th className="text-left py-3 px-4 text-xs sm:text-sm">Status</th>
              <th className="text-right py-3 px-4 text-xs sm:text-sm">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {customerOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-xs sm:text-sm">{order.name}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">
                  {order.location}
                </td>
                <td className="py-3 px-4 text-xs sm:text-sm">{order.date}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right text-xs sm:text-sm">
                  {order.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
