import React, { useState, useEffect } from 'react'
import { mockTenants } from '../mockData'

interface Tenant {
  id: number
  name: string
  email: string
  room: string
}

const TenantList: React.FC = () => {
  const [tenants, setTenants] = useState<Tenant[]>([])

  useEffect(() => {
    // Simulate API call with mock data
    setTenants(mockTenants)
  }, [])

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Tenant List</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Room</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id} className="border-b">
                <td className="p-3">{tenant.name}</td>
                <td className="p-3">{tenant.email}</td>
                <td className="p-3">{tenant.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TenantList