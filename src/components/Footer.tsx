function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🚗 Drive-In Delights</h3>
            <p className="text-gray-300">
              Your favorite drive-in restaurant serving fresh, delicious meals with the convenience of car-side service.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 (555) DRIVE-IN</p>
              <p>📧 orders@driveinelights.com</p>
              <p>📍 123 Highway Drive, Foodtown USA</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300">
              <p>Mon-Thu: 11am - 10pm</p>
              <p>Fri-Sat: 11am - 11pm</p>
              <p>Sunday: 12pm - 9pm</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Drive-In Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;