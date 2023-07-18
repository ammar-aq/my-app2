import Quantity from "@/components/Quantity";
import AddToCart from "@/components/AddToCart";
import {Products} from "@/utils/mock";
import Image from "next/image";

const getProductsDetail = (id: number| string) => {
    return Products.filter((product) => product.id == id);
};

const sizes = ["XS", "S", "M", "L", "XL"]
export default function Page({ params }: { params: { id: string } }) {
     const result = getProductsDetail(params.id);
    return (
        <div className="flex gap-6 mt-16 py-10">
          {result.map((product)=> (
                <div key={product.id} className="flex justify-between gap-6">
                  {/* Left div image */}
                  <div>
                    <Image src={product.image} alt={product.name} />
                  </div>
                  {/* Right div content */}
                  <div>
                    <div>
                      <h1 className="text-2xl font-bold">{product.name}</h1>
                      <h2 className="text-base text-gray-400 font-semibold ">
                      {product.tagline} </h2>
                    </div>
                  <div>
                    <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>
                    {/* Sizes circle text, hover with shadow*/}
                    <div className="flex gap-x-3">
                    {
                      sizes.map((item) => {
                        return(
                          <div className="flex items-center justify-center h-6 w-6 duration-200 border rounded-full hover:shadow-xl mt-2">
                            <span className="text-[10px] font-semibold text-center text-gray-400">
                              {item}
                            </span>
                          </div>
                          
                        );
                      })
                    }
                    </div> 
                    {/* {Quantity} */}
                    <div className="flex gap-x-3 mt-6 items-center">
                      <h3 className="text-[10px]font-semibold">Quantity</h3>
                      <Quantity/>
                    </div>
                    {/* {Add to Cart} */}
                    <div className="flex items-center mt-5 gap-x-4">
                    <AddToCart/>
                    <h2 className="text-2xl font-bold">$ {product.price.toFixed(2)}</h2>
                    </div>                  
                  </div>
              </div>
        </div>
              ))}
      </div>
    )
  }