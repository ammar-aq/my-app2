import {Products} from "@/utils/mock";
import ProductCard from "@/components/ProductCard"
import { StaticImageData } from "next/image";
import ProductList from "@/components/ui/test";


const AllProducts = () => {
    return <div className="flex justify-evenly gap-6 mt-16 py-10">
    {
      Products.map((product)=> (
        <ProductCard 
        key={product.id} 
        title={product.name} 
        price={product.price} 
        img={product.image as StaticImageData}
        category= {product.category}
        id={product.id}
        />

      ))}
      {/* <ProductCard title="OMNIFLEX™ Adaptiv Pants" price={100} img={p1}/>
      <ProductCard title="OMNIFLEX™ All Day Pants" price={150} img={p2}/>
      <ProductCard title="All Day Jacket" price={150} img={p3}/> */}
  </div>
};
export default AllProducts;