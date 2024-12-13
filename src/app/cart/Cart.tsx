// components/ShoppingCart.jsx
import Image from 'next/image';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Burger',
      price: 35.00,
      rating: 3,
      image: '/shopimages/burger.png',
      quantity: 1,
      total: 221.00
    },
    {
      id: 2,
      name: 'Chicken-Chup',
      price: 25.00,
      rating: 4,
      image: '/shopimages/chicken-chup.png',
      quantity: 1,
      total: 521.00
    },
    {
      id: 3,
      name: 'Pizza',
      price: 15.00,
      rating: 3,
      image: '/shopimages/pizza.png',
      quantity: 1,
      total: 421.00
    },
    {
      id: 4,
      name: 'Chocolate Muffin',
      price: 45.00,
      rating: 3,
      image: '/shopimages/muffin.png',
      quantity: 1,
      total: 521.00
    },
    {
      id: 5,
      name: 'Cheese Butter',
      price: 15.00,
      rating: 3,
      image: '/shopimages/cheese-butter.png',
      quantity: 1,
      total: 325.00
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
        <div className="grid grid-cols-12 gap-4 mb-4 text-gray-600 font-semibold">
          <div className="col-span-6 sm:col-span-4 md:col-span-5 lg:col-span-6">Product</div>
          <div className="col-span-2 hidden sm:block">Price</div>
          <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2">Quantity</div>
          <div className="col-span-1 hidden sm:block">Total</div>
          <div className="col-span-1 hidden sm:block">Remove</div>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-12 gap-4 items-center py-4 border-b">
            <div className="col-span-6 sm:col-span-4 md:col-span-5 lg:col-span-6 flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-sm md:text-base">{item.name}</h3>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-xs md:text-sm ${
                        index < item.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-2 hidden sm:block">${item.price.toFixed(2)}</div>

            <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2 flex items-center gap-2">
              <input
                type="number"
                value={item.quantity}
                className="w-12 md:w-16 px-2 py-1 border rounded-md"
                min="1"
              />
              <button className="text-blue-500 hover:text-blue-700">
                <FaPlus size={12} />
              </button>
            </div>

            <div className="col-span-1 hidden sm:block">${item.total.toFixed(2)}</div>

            <div className="col-span-1 hidden sm:block">
              <button className="text-gray-400 hover:text-red-500">
                <FaTimes size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
