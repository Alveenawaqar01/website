"use client"

import { useState, useEffect } from "react"

import { useCartStore } from "../../../../store/cardstore"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

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
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DashboardCard title="Total Orders" value={orderStats.totalOrders} />
        <DashboardCard title="Total Revenue" value={`$${orderStats.totalRevenue.toFixed(2)}`} />
        <DashboardCard title="Average Order Value" value={`$${orderStats.averageOrderValue.toFixed(2)}`} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Order Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
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
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        {orders.length > 0 ? (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customerDetails.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
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
        ) : (
          <p className="text-gray-500">No orders have been placed yet</p>
        )}
      </div>
    </div>
  )
}

function DashboardCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold text-indigo-600">{value}</p>
    </div>
  )
}

