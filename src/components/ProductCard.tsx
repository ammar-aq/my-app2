 "use client"
import React from 'react'
import Link from "next/link"
import Image, {StaticImageData} from "next/image"
import AddToCart from './AddToCart'


function ProductCard(props:{ 
  title:string, 
  price:number, 
  img:StaticImageData, 
  category: string
  id: number;
}) {

  return (
    <Link href={`/products/${props.id}`}>
    <div className='py-6'>
        <Image src={props.img} alt="product"/>
        <h3 className="font-bold text-lg mt-3"> {props.title}</h3>
        <p className="font-bold text-lg">${props.price}</p>
        <p className="font-bold text-lg">Category{" "} <span className="text-base font-normal"> {props.category}</span>
        </p>
        <AddToCart/>
        
    </div>
    </Link>
  )
}

export default ProductCard