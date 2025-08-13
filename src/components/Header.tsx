import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:text-orange-200 transition-colors">
            🚗 Drive-In Delights
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/menu" className="hover:text-orange-200 transition-colors font-medium">
              Menu
            </Link>
            <Link to="/order" className="hover:text-orange-200 transition-colors font-medium">
              Order Now
            </Link>
            <Link to="/reservations" className="hover:text-orange-200 transition-colors font-medium">
              Reserve Seat
            </Link>
            <Link to="/delivery" className="hover:text-orange-200 transition-colors font-medium">
              Delivery
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:555-DRIVE-IN" className="bg-white text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-50 transition-colors">
              📞 Call to Order
            </a>
            <Link to="/business" className="text-sm hover:text-orange-200 transition-colors">
              Business Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;