"use client"
import {useDispatch} from "react-redux";
import {cartActions} from "@/store/slice/cartSlice";
import {Button} from "@/components/ui/button";
import toast from "react-hot-toast";
import { urlForImage } from '../../sanity/lib/image';
import {FC} from 'react';

// // const AddToCart = () => {
// //   const dispatch = useDispatch();
// //   const addItem =  () => {
// //     dispatch(cartActions.addToCart({product:{}, quantity:1}));
// //     toast.success("product added")
// //   };
//   const AddToCart: FC<any> = (item) => {
//     const handleAddToCart = async () => {
//           const res = await fetch("/api/cart", {
//                   method: "POST",
//                   body: JSON.stringify({
//                     product_id: item._id
//                   })         
//     })
//     const result = await res.json()
//     console.log(result)
//   }
//   return (

//     // <Button onClick={addItem} >Add To Cart</Button>
//     <Button onClick={handleAddToCart}>Add To Cart</Button>
//   )
// };

// export default AddToCart;
// ***********************************************

const AddToCart: FC<any> = (item) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));
    toast.success("Product added");
  };

  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item._id,
      }),
    });
    

    const result = await res.json();
    console.log(result);

    // Uncomment the following line if you want to add the item to the cart
    addItem();
  };

  return (
    <Button onClick={() => {
      addItem();
      handleAddToCart();
    }}>Add To Cart</Button>
  );
};

export default AddToCart;

//************************************* */
// const AddToCart: FC<any> = (item) => {
//   const dispatch = useDispatch();

//   const addItem = () => {
//     dispatch(cartActions.addToCart({ product: item, quantity: 1 }));
//     toast.success('Product added');
//   };

//   return (
//     <Button onClick={addItem}>Add To Cart</Button>
//   );
// };

// export default AddToCart;