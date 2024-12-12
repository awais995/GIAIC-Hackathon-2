import ProductCard from "./productcard";


export const ProductGrid = ({ products }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};
