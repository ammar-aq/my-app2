import { StaticImageData } from "next/image"
import Processor from "postcss/lib/processor";

export type Product = {
    id: number;
    name: string;
    tagline?: string;
    price: number;
    category: string ;
    image: string | StaticImageData;
    

};