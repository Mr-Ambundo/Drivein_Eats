import ServiceCard from '../components/ServiceCard';

function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            🚗 Drive-In Delights
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience the classic drive-in dining with modern convenience. 
            Fresh food delivered right to your car or home!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:555-DRIVE-IN" className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors">
              📞 Call to Order Now
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition-colors">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose how you want to enjoy our delicious food
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Browse Menu"
              description="Explore our diverse menu with vegan, vegetarian, and omnivorous options"
              icon="🍔"
              link="/menu"
              color="bg-gradient-to-br from-green-500 to-emerald-600"
            />
            
            <ServiceCard
              title="Order Food"
              description="Place your order for pickup or car-side delivery"
              icon="🛒"
              link="/order"
              color="bg-gradient-to-br from-blue-500 to-indigo-600"
            />
            
            <ServiceCard
              title="Reserve Seat"
              description="Book a table or car spot for dine-in experience"
              icon="🪑"
              link="/reservations"
              color="bg-gradient-to-br from-purple-500 to-pink-600"
            />
            
            <ServiceCard
              title="Home Delivery"
              description="Get your favorite meals delivered straight to your door"
              icon="🚚"
              link="/delivery"
              color="bg-gradient-to-br from-orange-500 to-red-600"
            />
          </div>
        </div>
      </section>

      {/* Food Categories Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Food for Everyone</h2>
            <p className="text-xl text-gray-600">We cater to all dietary preferences</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-green-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                🥗
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Vegan Options</h3>
              <p className="text-gray-600">Plant-based delights that don't compromise on taste</p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                🥪
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Vegetarian</h3>
              <p className="text-gray-600">Fresh vegetarian meals packed with flavor</p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                🍖
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Omnivorous</h3>
              <p className="text-gray-600">Classic favorites with meat and all the fixings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8">Call us now or explore our menu to get started</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:555-DRIVE-IN" className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors">
              📞 (555) DRIVE-IN
            </a>
            <a href="/menu" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition-colors">
              View Full Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;