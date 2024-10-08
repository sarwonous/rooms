import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to RoomBooker</h1>
      <p className="text-xl mb-8">Find and book your perfect room today!</p>
      <div className="space-x-4">
        <Link to="/rooms" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">View Rooms</Link>
        <Link to="/book" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">Book Now</Link>
      </div>
    </div>
  )
}

export default Home