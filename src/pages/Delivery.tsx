import { useState } from 'react';

function Delivery() {
  const [zipCode, setZipCode] = useState('');
  const [deliveryZone, setDeliveryZone] = useState<'in-zone' | 'out-zone' | 'unknown'>('unknown');
  const [selectedService, setSelectedService] = useState<string>('');

  const deliveryServices = [
    {
      id: 'standard',
      name: 'Standard Delivery',
      description: 'Our own delivery drivers',
      time: '30-45 minutes',
      fee: 3.99,
      icon: '🚗',
      available: true
    },
    {
      id: 'express',
      name: 'Express Delivery',
      description: 'Priority delivery service',
      time: '20-30 minutes',
      fee: 6.99,
      icon: '⚡',
      available: true
    },
    {
      id: 'doordash',
      name: 'DoorDash',
      description: 'Third-party delivery',
      time: '25-40 minutes',
      fee: 4.99,
      icon: '🏃',
      available: true
    },
    {
      id: 'ubereats',
      name: 'Uber Eats',
      description: 'Third-party delivery',
      time: '30-45 minutes',
      fee: 5.49,
      icon: '🚙',
      available: false
    },
    {
      id: 'grubhub',
      name: 'GrubHub',
      description: 'Third-party delivery',
      time: '35-50 minutes',
      fee: 4.49,
      icon: '📦',
      available: true
    }
  ];

  const checkDeliveryZone = () => {
    // Simulate zone checking
    const zones = ['12345', '12346', '12347', '54321', '54322'];
    if (zones.includes(zipCode)) {
      setDeliveryZone('in-zone');
    } else if (zipCode.length === 5) {
      setDeliveryZone('out-zone');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Delivery Options</h1>
          <p className="text-xl text-gray-600">
            Get Drive-In Delights delivered straight to your door
          </p>
        </div>

        {/* Delivery Zone Checker */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Check Delivery Availability</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Enter Your ZIP Code</label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="e.g., 12345"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                maxLength={5}
              />
            </div>
            <button
              onClick={checkDeliveryZone}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Check Zone
            </button>
          </div>

          {deliveryZone !== 'unknown' && (
            <div className={`mt-4 p-4 rounded-lg ${
              deliveryZone === 'in-zone' ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'
            }`}>
              {deliveryZone === 'in-zone' ? (
                <div className="flex items-center text-green-800">
                  <span className="text-2xl mr-3">✅</span>
                  <div>
                    <div className="font-semibold">Great news! We deliver to your area.</div>
                    <div className="text-sm">Multiple delivery options available below.</div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center text-yellow-800">
                  <span className="text-2xl mr-3">⚠️</span>
                  <div>
                    <div className="font-semibold">Limited delivery to your area.</div>
                    <div className="text-sm">Some services may not be available. Additional fees may apply.</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Delivery Services */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {deliveryServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all ${
                selectedService === service.id
                  ? 'ring-2 ring-orange-500 border-orange-500'
                  : 'hover:shadow-xl'
              } ${!service.available ? 'opacity-50' : ''}`}
              onClick={() => service.available && setSelectedService(service.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                {!service.available && (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    Unavailable
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-600">Delivery Time</div>
                  <div className="font-semibold">{service.time}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Delivery Fee</div>
                  <div className="font-semibold">${service.fee.toFixed(2)}</div>
                </div>
              </div>

              {service.available && (
                <button
                  className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                    selectedService === service.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedService === service.id ? 'Selected' : 'Select This Service'}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Selected Service Action */}
        {selectedService && (
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Ready to Order?</h3>
            <p className="mb-4">
              You've selected {deliveryServices.find(s => s.id === selectedService)?.name}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/order"
                className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors"
              >
                Start Your Order
              </a>
              <a
                href="tel:555-DRIVE-IN"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-orange-500 transition-colors"
              >
                📞 Call to Order
              </a>
            </div>
          </div>
        )}

        {/* Delivery Information */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🚗 Our Delivery Promise</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Hot, fresh food delivered with care
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Real-time order tracking available
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Contactless delivery options
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Satisfaction guaranteed or money back
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📍 Delivery Zones</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Zone 1 (0-3 miles)</span>
                <span className="text-green-600 font-semibold">$3.99</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium">Zone 2 (3-5 miles)</span>
                <span className="text-yellow-600 font-semibold">$5.99</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Zone 3 (5-8 miles)</span>
                <span className="text-red-600 font-semibold">$7.99</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              * Third-party delivery services may have different pricing
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">❓ Delivery FAQ</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">What's the minimum order for delivery?</h4>
              <p className="text-gray-600 text-sm mb-4">$15 minimum order required for all delivery services.</p>
              
              <h4 className="font-semibold text-gray-800 mb-2">Do you deliver during bad weather?</h4>
              <p className="text-gray-600 text-sm">We deliver in most weather conditions, but may suspend service during severe storms for safety.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Can I track my order?</h4>
              <p className="text-gray-600 text-sm mb-4">Yes! You'll receive SMS updates and can track your order in real-time.</p>
              
              <h4 className="font-semibold text-gray-800 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-sm">We accept cash, all major credit cards, and digital payments like Apple Pay.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;