"use client"

import { useState, useEffect } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { MapPin, Phone, Mail, Calendar, DollarSign, Package, TrendingUp } from "lucide-react"
import type React from "react" // Import React
import { useCartStore } from "../../../../store/cardstore"

export default function AdminDashboard() {
  const { orders } = useCartStore()
  const [orderStats, setOrderStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    averageOrderValue: 0,
  })

  useEffect(() => {
    const totalOrders = orders.length
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
    const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0

    setOrderStats({
      totalOrders,
      totalRevenue,
      averageOrderValue,
    })
  }, [orders])

  const chartData = [
    { name: "Total Orders", value: orderStats.totalOrders },
    { name: "Total Revenue", value: orderStats.totalRevenue },
    { name: "Avg Order Value", value: orderStats.averageOrderValue },
  ]

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Orders"
          value={orderStats.totalOrders}
          icon={<Package className="w-8 h-8 text-blue-500" />}
          color="bg-blue-100"
        />
        <DashboardCard
          title="Total Revenue"
          value={`$${orderStats.totalRevenue.toFixed(2)}`}
          icon={<DollarSign className="w-8 h-8 text-green-500" />}
          color="bg-green-100"
        />
        <DashboardCard
          title="Average Order Value"
          value={`$${orderStats.averageOrderValue.toFixed(2)}`}
          icon={<TrendingUp className="w-8 h-8 text-purple-500" />}
          color="bg-purple-100"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Order Statistics</h2>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.slice(0, 5).map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{order.customerDetails.name}</div>
                      <div className="text-xs text-gray-400 flex items-center mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {order.customerDetails.address}
                      </div>
                      <div className="text-xs text-gray-400 flex items-center mt-1">
                        <Phone className="w-3 h-3 mr-1" />
                        {order.customerDetails.phone}
                      </div>
                      <div className="text-xs text-gray-400 flex items-center mt-1">
                        <Mail className="w-3 h-3 mr-1" />
                        {order.customerDetails.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {new Date(order.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1 text-green-500" />
                        {order.total.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800"
                              : order.status === "Processing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardCard({
  title,
  value,
  icon,
  color,
}: { title: string; value: string | number; icon: React.ReactNode; color: string }) {
  return (
    <div className={`${color} p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {icon}
      </div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  )
}

