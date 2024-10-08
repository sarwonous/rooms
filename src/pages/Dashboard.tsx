import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { mockPayments, mockNextPayment } from '../mockData'

interface Payment {
  id: number
  amount: number
  date: string
  tenant: string
  room: string
}

const Dashboard: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([])
  const [nextPayment, setNextPayment] = useState<Payment | null>(null)

  useEffect(() => {
    // Simulate API calls with mock data
    setPayments(mockPayments.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ))
    setNextPayment(mockNextPayment)
  }, [])

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      
      {nextPayment && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="font-bold">Next Payment Due:</p>
          <p>Tenant: {nextPayment.tenant}</p>
          <p>Room: {nextPayment.room}</p>
          <p>Amount: ${nextPayment.amount}</p>
          <p>Due Date: {format(new Date(nextPayment.date), 'MMMM d, yyyy')}</p>
        </div>
      )}

      <h3 className="text-2xl font-semibold mb-4">Payment History</h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Tenant</th>
              <th className="p-3 text-left">Room</th>
              <th className="p-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b">
                <td className="p-3">{format(new Date(payment.date), 'MMMM d, yyyy')}</td>
                <td className="p-3">{payment.tenant}</td>
                <td className="p-3">{payment.room}</td>
                <td className="p-3">${payment.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard