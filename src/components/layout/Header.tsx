"use client"
import Link from "next/link"
import logo from "/public/logo.png"
import Image from "next/image"  
import {useSelector} from "react-redux";
import {ShoppingCart} from "lucide-react"
import {RootState} from "@/store/store"
// import { Input } from "@/components/ui/input"



const Header = () => {
  const cartValue= useSelector(
    (state:RootState)=>state.cart.totalQuantity
    );
    return (
      <div className="flex justify-between items-center py-6 px-8"> 
      <Link href="/">
      <Image src={logo} alt="logo" className="w-40" />
      </Link>
        <ul className="flex gap-x-3">
          <li className="text-lg">
            <Link href={"/category/Male"}>
              Mens
            </Link>
          </li>
          <li className="text-lg">
            <Link href={"/category/Female"}>
              Womens
            </Link>
          </li>
          <li className="text-lg">
            <Link href={"/category/Kids"}>
              Kids
            </Link>
          </li>
          <li className="text-lg">
            <Link href={"/category/Unisex"}>
              Unisex
            </Link>
          </li>
          <li className="text-lg">
            <Link href={"/products"}>
             All Products
            </Link>
          </li>
        </ul>
        {/* <input/> */}
        <div className="h-10 w-10 rounded-full flex justify-center items-center bg-gray-200 relative">
        <span className="absolute right-0 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center">
          {cartValue}</span>
        <ShoppingCart/>
        </div>
      </div>
    )
  }
export default Header
