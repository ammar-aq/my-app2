import React from 'react'
import Image, { StaticImageData } from "next/image"
import ProductCard from "@/components/ProductCard"
// import p1 from "/public/prod1.webp"
// import p2 from "/public/prod2.webp"
// import p3 from "/public/prod3.webp"
import {Products} from "@/utils/mock"

const ProductList = () => {
  const productChecks = Products.slice(0,3);
  // console.log(productChecks);
  return (
    // <div className='flex justify-evenly gap-5 mt-16'>
    //   <ProductCard/>
    //   <ProductCard/>
    //   <ProductCard/>
    // </div>
    
    <div className="flex justify-evenly gap-6 mt-16 py-10">
      {
        productChecks.map((product)=> (
          <ProductCard 
          key={product.id} 
          title={product.name} 
          price={product.price} 
          img={product.image as StaticImageData}
          category = {product.category}
          id = {product.id}
          />
        ))}
        {/* <ProductCard title="OMNIFLEX™ Adaptiv Pants" price={100} img={p1}/>
        <ProductCard title="OMNIFLEX™ All Day Pants" price={150} img={p2}/>
        <ProductCard title="All Day Jacket" price={150} img={p3}/> */}
    </div>
  )
}
export default ProductList

