export const mockRooms = [
  { id: 1, name: 'Single Room', capacity: 1, price: 500, available: true },
  { id: 2, name: 'Double Room', capacity: 2, price: 800, available: true },
  { id: 3, name: 'Suite', capacity: 4, price: 1200, available: false },
];

export const mockTenants = [
  { id: 1, name: 'John Doe', email: 'john@example.com', room: 'Single Room' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', room: 'Double Room' },
];

export const mockPayments = [
  { id: 1, amount: 500, date: '2023-05-01', tenant: 'John Doe', room: 'Single Room' },
  { id: 2, amount: 800, date: '2023-05-02', tenant: 'Jane Smith', room: 'Double Room' },
];

export const mockNextPayment = {
  id: 3,
  amount: 500,
  date: '2023-06-01',
  tenant: 'John Doe',
  room: 'Single Room',
};