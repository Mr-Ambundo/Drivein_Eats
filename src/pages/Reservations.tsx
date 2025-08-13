import { useState } from 'react';

function Reservations() {
  const [reservationType, setReservationType] = useState<'table' | 'car'>('table');
  const [reservationData, setReservationData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    partySize: 2,
    carInfo: '',
    specialRequests: ''
  });

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation request submitted! We\'ll call you within 15 minutes to confirm.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Make a Reservation</h1>
          <p className="text-xl text-gray-600">
            Reserve your spot for the ultimate drive-in dining experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Reservation Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Reservation Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Reservation Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Reservation Type</label>
                <div className="grid grid-cols-1 gap-3">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="reservationType"
                      value="table"
                      checked={reservationType === 'table'}
                      onChange={(e) => setReservationType(e.target.value as any)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-semibold">🪑 Indoor Table</div>
                      <div className="text-sm text-gray-600">Dine inside our retro-themed restaurant</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="reservationType"
                      value="car"
                      checked={reservationType === 'car'}
                      onChange={(e) => setReservationType(e.target.value as any)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-semibold">🚗 Car Spot</div>
                      <div className="text-sm text-gray-600">Classic drive-in experience in your car</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    value={reservationData.name}
                    onChange={(e) => setReservationData({...reservationData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={reservationData.phone}
                    onChange={(e) => setReservationData({...reservationData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={reservationData.email}
                  onChange={(e) => setReservationData({...reservationData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                  <input
                    type="date"
                    value={reservationData.date}
                    onChange={(e) => setReservationData({...reservationData, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                  <select
                    value={reservationData.time}
                    onChange={(e) => setReservationData({...reservationData, time: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Party Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Party Size *</label>
                <select
                  value={reservationData.partySize}
                  onChange={(e) => setReservationData({...reservationData, partySize: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  {[1,2,3,4,5,6,7,8].map((size) => (
                    <option key={size} value={size}>
                      {size} {size === 1 ? 'person' : 'people'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Car Information (if car spot selected) */}
              {reservationType === 'car' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Car Information</label>
                  <input
                    type="text"
                    value={reservationData.carInfo}
                    onChange={(e) => setReservationData({...reservationData, carInfo: e.target.value})}
                    placeholder="e.g., Red Honda Civic, License ABC123"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    Help us identify your car for carhop service
                  </p>
                </div>
              )}

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                <textarea
                  value={reservationData.specialRequests}
                  onChange={(e) => setReservationData({...reservationData, specialRequests: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  rows={3}
                  placeholder="Birthday celebration, accessibility needs, etc."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-colors"
              >
                Request Reservation
              </button>
              <p className="text-sm text-gray-600 text-center">
                We'll call you within 15 minutes to confirm your reservation
              </p>
            </form>
          </div>

          {/* Information Panel */}
          <div className="space-y-6">
            {/* Availability Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📅 Current Availability</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Today</span>
                  <span className="text-green-600 font-semibold">Available</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="font-medium">Tomorrow</span>
                  <span className="text-yellow-600 font-semibold">Limited</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">This Weekend</span>
                  <span className="text-green-600 font-semibold">Available</span>
                </div>
              </div>
            </div>

            {/* Dining Options */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍽️ Dining Options</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Indoor Tables</h4>
                  <p className="text-gray-600 text-sm">
                    Retro 1950s atmosphere with booth seating and classic diner vibes
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Car Spots</h4>
                  <p className="text-gray-600 text-sm">
                    Authentic drive-in experience with carhop service and window trays
                  </p>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Reservation Policies</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Reservations held for 15 minutes past scheduled time
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Large parties (8+) may require deposit
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Car spots available on first-come, first-served basis
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Cancellations accepted up to 2 hours before reservation
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="mb-4">Call us directly for immediate assistance</p>
              <a href="tel:555-DRIVE-IN" className="bg-white text-orange-500 px-6 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors inline-block">
                📞 (555) DRIVE-IN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservations;