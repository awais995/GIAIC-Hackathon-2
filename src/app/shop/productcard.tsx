import Image from "next/image";

// components/ProductCard.jsx
const ProductCard = ({ product }: any) => {
    return (
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className="relative">
          <Image 
            src={product.image} 
            alt={product.name}
            width={256}
            height={256}
            className="w-full h-64 object-cover"
          />
          {product.onSale && (
            <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded">
              Sell
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="line-through text-gray-400">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  