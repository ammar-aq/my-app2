"use client"
import {useDispatch} from "react-redux";
import {cartActions} from "@/store/slice/cartSlice";
import {Button} from "@/components/ui/button";
import toast from "react-hot-toast";



const AddToCart = () => {
  const dispatch = useDispatch();
  const addItem =  () => {
    dispatch(cartActions.addToCart({product:{}, quantity:1}));
    toast.success("product added")
  };
  return (

    <Button onClick={addItem}>Add To Cart</Button>
  )
};

export default AddToCart;