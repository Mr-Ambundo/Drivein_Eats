import { Link } from 'react-router-dom';

function BusinessDashboard() {
  const stats = {
    todayOrders: 47,
    pendingOrders: 8,
    activeReservations: 12,
    revenue: 1247.50
  };

  const recentOrders = [
    { id: '#1234', customer: 'John Smith', items: 'Classic Burger, Fries', total: 22.98, status: 'preparing', time: '2 min ago' },
    { id: '#1235', customer: 'Sarah Johnson', items: 'Vegan Bowl, Smoothie', total: 18.49, status: 'ready', time: '5 min ago' },
    { id: '#1236', customer: 'Mike Davis', items: 'BBQ Burger, Onion Rings', total: 19.99, status: 'delivered', time: '12 min ago' },
  ];

  const upcomingReservations = [
    { id: 'R001', customer: 'Emily Brown', time: '6:30 PM', party: 4, type: 'Table' },
    { id: 'R002', customer: 'David Wilson', time: '7:00 PM', party: 2, type: 'Car Spot' },
    { id: 'R003', customer: 'Lisa Garcia', time: '7:30 PM', party: 6, type: 'Table' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Business Dashboard</h1>
              <p className="text-gray-600">Drive-In Delights Management Portal</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Last updated: Just now</span>
              <Link to="/" className="text-orange-500 hover:text-orange-600 font-medium">
                ← Back to Site
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today's Orders</p>
                <p className="text-3xl font-bold text-gray-800">{stats.todayOrders}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <span className="text-2xl">📋</span>
              </div>
            </div>
            <div className="mt-2 text-sm text-green-600">+12% from yesterday</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Orders</p>
                <p className="text-3xl font-bold text-orange-500">{stats.pendingOrders}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <span className="text-2xl">⏳</span>
              </div>
            </div>
            <div className="mt-2 text-sm text-orange-600">Needs attention</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Reservations</p>
                <p className="text-3xl font-bold text-purple-500">{stats.activeReservations}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <span className="text-2xl">🪑</span>
              </div>
            </div>
            <div className="mt-2 text-sm text-purple-600">For today</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today's Revenue</p>
                <p className="text-3xl font-bold text-green-500">${stats.revenue.toFixed(2)}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <span className="text-2xl">💰</span>
              </div>
            </div>
            <div className="mt-2 text-sm text-green-600">+8% from yesterday</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Link to="/business/orders" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors">
            <div className="text-2xl mb-2">📋</div>
            <div className="font-semibold">Manage Orders</div>
            <div className="text-sm opacity-90">View and update order status</div>
          </Link>

          <Link to="/business/reservations" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-colors">
            <div className="text-2xl mb-2">🪑</div>
            <div className="font-semibold">Reservations</div>
            <div className="text-sm opacity-90">Manage table bookings</div>
          </Link>

          <Link to="/business/availability" className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-colors">
            <div className="text-2xl mb-2">📊</div>
            <div className="font-semibold">Availability</div>
            <div className="text-sm opacity-90">Update menu & seating</div>
          </Link>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg">
            <div className="text-2xl mb-2">📱</div>
            <div className="font-semibold">Live Orders</div>
            <div className="text-sm opacity-90">Real-time notifications</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
                <Link to="/business/orders" className="text-orange-500 hover:text-orange-600 font-medium">
                  View All →
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-800">{order.id}</span>
                        <span className="text-sm text-gray-500">{order.time}</span>
                      </div>
                      <div className="text-sm text-gray-600">{order.customer}</div>
                      <div className="text-sm text-gray-500">{order.items}</div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="font-semibold">${order.total.toFixed(2)}</div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'preparing' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'ready' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Reservations */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">Today's Reservations</h2>
                <Link to="/business/reservations" className="text-orange-500 hover:text-orange-600 font-medium">
                  View All →
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingReservations.map((reservation) => (
                  <div key={reservation.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-800">{reservation.customer}</span>
                        <span className="text-sm font-medium text-purple-600">{reservation.time}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Party of {reservation.party} • {reservation.type}
                      </div>
                    </div>
                    <div className="ml-4">
                      <button className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full hover:bg-green-200 transition-colors">
                        Confirm
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">System Status</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <div>
                <div className="font-medium">POS System</div>
                <div className="text-sm text-gray-600">Online</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <div>
                <div className="font-medium">Kitchen Display</div>
                <div className="text-sm text-gray-600">Connected</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <div>
                <div className="font-medium">Delivery Partners</div>
                <div className="text-sm text-gray-600">2 of 3 active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessDashboard;