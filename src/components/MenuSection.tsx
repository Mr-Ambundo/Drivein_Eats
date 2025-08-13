interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'vegan' | 'vegetarian' | 'omnivorous';
  dietary?: string[];
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  color: string;
}

function MenuSection({ title, items, color }: MenuSectionProps) {
  return (
    <div className="mb-12">
      <h2 className={`text-3xl font-bold mb-6 ${color}`}>{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
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
    </div>
  );
}

export default MenuSection;