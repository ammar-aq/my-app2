import Image from 'next/image'
import Header from "@/components/layout/Header"
import {client} from '@/lib/sanityClient';
import {Image as IImage} from 'sanity';
import { urlForImage } from '../../sanity/lib/image';

import Hero from "@/views/Hero"
import ProductList from '@/views/ProductList'

// export const getProductData = async() => {
//   const res = await client.fetch(`*[_type=="product"]{
//     price,
//     _id,
//     image,
//     category -> {
//       name
//     }
//   }`);
//   return res
// }

// interface IProduct {
//   title: string,
//   _id: string,
//   price: number,
//   description: string,
//   image: IImage,
//   category: {
//     name:string
//   }

// }
// export default async function Home(){
//   const data: IProduct[] = await getProductData()

//   return (
//     <div className='grid grid-cols-[repeat(3,auto)] justify-center gap-x-10'>
//       {
//         data.map((item) => (
//           <div>
//             <Image 
//             width={200}
//             height={300}
//             className='max-h-[200px] object-cover object-top'
//             src={urlForImage(item.image).url()} alt="product"/>
//             <h2>{item.title}</h2>
//             <h3>${item.price}</h3>
//             <button className='border py-2 px-6 rounded bg-blue-600  text-white'>Add to cart</button>
//           </div>
//         ))}
//     </div>
//   )
// }

export default function Home() {
  return (
    // <Header />
    <div>
      <Hero/>
      {/* Products */}
      <ProductList/>
    </div>
  )
}
