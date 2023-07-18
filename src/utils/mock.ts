import { Product } from "./types";
import ProductCard from "@/components/ProductCard";
import P1 from "/public/prod1.webp"
import P2 from "/public/prod2.webp"
import P3 from "/public/prod3.webp"
import P4 from "/public/prod1.webp"
import P5 from "/public/prod2.webp"
import P6 from "/public/prod3.webp"

export const Products : Product[] = [
    {
        id: 1,
        name: "Product 1",
        tagline: "Dress",
        price: 5.99,
        category: "Female",
        image: P1,
    },
    {
        id: 2,
        name: "Product 2",
        price: 5.99,
        category: "Male",
        image: P2,
    },
    {
        id: 3,
        name: "Product 3",
        price: 5.99,
        category: "kids",
        image: P3,
    },
    {
        id: 4,
        name: "Product 4",
        price: 5.99,
        category: "Female",
        image: P4,
    },
    {
        id: 5,
        name: "Product 5",
        price: 5.99,
        category: "Male",
        image: P5,
    },
    {
        id: 6,
        name: "Product 6",
        price: 5.99,
        category: "Kids",
        image: P6,
    },
    {
        id: 7,
        name: "Product 7",
        price: 6.99,
        category: "Kids",
        image: P6,
    },
]