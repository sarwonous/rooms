import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { mockRooms } from '../mockData'

interface Room {
  id: number
  name: string
  price: number
  available: boolean
}

const BookRoom: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([])
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)
  const [startDate, setStartDate] = useState<string>('')
  const [duration, setDuration] = useState<number>(1)
  const [deposit, setDeposit] = useState<number>(0)

  useEffect(() => {
    // Simulate API call with mock data
    setRooms(mockRooms.filter(room => room.available))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedRoom || !startDate) return

    // Simulate booking creation
    console.log('Booking created:', {
      room: selectedRoom,
      startDate,
      duration,
      deposit,
    })
    alert('Booking successful!')
    setSelectedRoom(null)
    setStartDate('')
    setDuration(1)
    setDeposit(0)
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Book a Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Select Room</label>
          <select
            value={selectedRoom || ''}
            onChange={(e) => setSelectedRoom(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a room</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name} - ${room.price}/month
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded"
            min={format(new Date(), 'yyyy-MM-dd')}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Duration (months)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full p-2 border rounded"
            min="1"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Deposit Amount</label>
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
            className="w-full p-2 border rounded"
            min="0"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Book Room
        </button>
      </form>
    </div>
  )
}

export default BookRoom