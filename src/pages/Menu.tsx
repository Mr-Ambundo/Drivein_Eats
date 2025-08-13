import { useState } from 'react';
import MenuSection from '../components/MenuSection';

const menuItems = {
  vegan: [
    {
      id: 1,
      name: "Beyond Burger Deluxe",
      description: "Plant-based patty with vegan cheese, lettuce, tomato, and special sauce",
      price: 12.99,
      image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&h=350",
      category: 'vegan' as const,
      dietary: ['Vegan', 'Plant-Based']
    },
    {
      id: 2,
      name: "Quinoa Power Bowl",
      description: "Quinoa, roasted vegetables, avocado, and tahini dressing",
      price: 11.49,
      image: "https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&h=350",
      category: 'vegan' as const,
      dietary: ['Vegan', 'Gluten-Free']
    },
    {
      id: 3,
      name: "Vegan Loaded Fries",
      description: "Crispy fries topped with cashew cheese, chives, and plant-based bacon bits",
      price: 8.99,
      image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&h=350",
      category: 'vegan' as const,
      dietary: ['Vegan']
    }
  ],
  vegetarian: [
    {
      id: 4,
      name: "Caprese Grilled Sandwich",
      description: "Fresh mozzarella, tomatoes, basil, and balsamic glaze on sourdough",
      price: 10.99,
      image: "https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&h=350",
      category: 'vegetarian' as const,
      dietary: ['Vegetarian']
    },
    {
      id: 5,
      name: "Mushroom Swiss Burger",
      description: "Grilled portobello mushroom with Swiss cheese and garlic aioli",
      price: 11.99,
      image: "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&h=350",
      category: 'vegetarian' as const,
      dietary: ['Vegetarian']
    },
    {
      id: 6,
      name: "Veggie Wrap Supreme",
      description: "Hummus, roasted peppers, cucumber, sprouts, and feta in a spinach wrap",
      price: 9.49,
      image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&h=350",
      category: 'vegetarian' as const,
      dietary: ['Vegetarian']
    }
  ],
  omnivorous: [
    {
      id: 7,
      name: "Classic Drive-In Burger",
      description: "1/3 lb beef patty, American cheese, lettuce, tomato, onion, and our secret sauce",
      price: 13.99,
      image: "https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&h=350",
      category: 'omnivorous' as const
    },
    {
      id: 8,
      name: "BBQ Bacon Cheeseburger",
      description: "Beef patty with bacon, cheddar cheese, BBQ sauce, and onion rings",
      price: 15.49,
      image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&h=350",
      category: 'omnivorous' as const
    },
    {
      id: 9,
      name: "Chicken Club Sandwich",
      description: "Grilled chicken breast, bacon, lettuce, tomato, and mayo on toasted bread",
      price: 12.49,
      image: "https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&h=350",
      category: 'omnivorous' as const
    },
    {
      id: 10,
      name: "Fish & Chips",
      description: "Beer-battered cod with seasoned fries and tartar sauce",
      price: 14.99,
      image: "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&h=350",
      category: 'omnivorous' as const
    }
  ]
};

function Menu() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'vegan' | 'vegetarian' | 'omnivorous'>('all');

  const getFilteredItems = () => {
    if (activeFilter === 'all') {
      return [...menuItems.vegan, ...menuItems.vegetarian, ...menuItems.omnivorous];
    }
    return menuItems[activeFilter];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh, delicious food for every taste and dietary preference
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-colors ${
              activeFilter === 'all'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 hover:bg-orange-100'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setActiveFilter('vegan')}
            className={`px-6 py-3 rounded-full font-semibold transition-colors ${
              activeFilter === 'vegan'
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-700 hover:bg-green-100'
            }`}
          >
            🥗 Vegan
          </button>
          <button
            onClick={() => setActiveFilter('vegetarian')}
            className={`px-6 py-3 rounded-full font-semibold transition-colors ${
              activeFilter === 'vegetarian'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-gray-700 hover:bg-yellow-100'
            }`}
          >
            🥪 Vegetarian
          </button>
          <button
            onClick={() => setActiveFilter('omnivorous')}
            className={`px-6 py-3 rounded-full font-semibold transition-colors ${
              activeFilter === 'omnivorous'
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-700 hover:bg-red-100'
            }`}
          >
            🍖 Omnivorous
          </button>
        </div>

        {/* Menu Items */}
        {activeFilter === 'all' ? (
          <>
            <MenuSection 
              title="🥗 Vegan Options" 
              items={menuItems.vegan} 
              color="text-green-600"
            />
            <MenuSection 
              title="🥪 Vegetarian Favorites" 
              items={menuItems.vegetarian} 
              color="text-yellow-600"
            />
            <MenuSection 
              title="🍖 Omnivorous Classics" 
              items={menuItems.omnivorous} 
              color="text-red-600"
            />
          </>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredItems().map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-xl font-bold text-orange-500">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  {item.dietary && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.dietary.map((tag) => (
                        <span key={tag} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-6">Call us now to place your order for pickup or delivery</p>
          <a href="tel:555-DRIVE-IN" className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors inline-block">
            📞 (555) DRIVE-IN
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;