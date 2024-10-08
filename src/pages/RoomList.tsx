import React, { useState, useEffect } from 'react'
import { mockRooms } from '../mockData'

interface Room {
  id: number
  name: string
  capacity: number
  price: number
  available: boolean
}

const RoomList: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([])

  useEffect(() => {
    // Simulate API call with mock data
    setRooms(mockRooms)
  }, [])

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Available Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
            <p>Capacity: {room.capacity}</p>
            <p>Price: ${room.price}/month</p>
            <p className={`mt-2 ${room.available ? 'text-green-600' : 'text-red-600'}`}>
              {room.available ? 'Available' : 'Occupied'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoomList