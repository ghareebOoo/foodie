"use client"
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import {dummyProducts} from "../public/src/assets/data"
import {DummyProducts} from "../type"
import { StaticImageData } from 'next/image'

export type CartItem = {
  id: string;
  image: string | StaticImageData;
  title: string;
  size: string;
  price: number;
  quantity: number;
};

type propsFoodContext = {
    food: DummyProducts[];
    setFood: React.Dispatch<React.SetStateAction<DummyProducts[] | []>>;
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    addToCart : (id:string , image: string | StaticImageData , title:string , size: string , price: number , quantity: number) => void;
    readyCart : boolean;
    setReadyCart : React.Dispatch<React.SetStateAction<boolean>>;
    decreaseCart : (index: number)=> void;
    increaseCart : (index: number)=> void;
    deleteCart : (index: number)=> void;
    clearAll : ()=> void;
    token : string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}
const foodContext = createContext<propsFoodContext | undefined>(undefined)
export default function FoodContextProvider({children}:{children: ReactNode}) {
    const [food , setFood] = useState<DummyProducts[]>([])
    const [cart , setCart] = useState<CartItem[]>([])
    const [readyCart, setReadyCart] = useState(false)
    const [token , setToken] = useState<string | null>(null)

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        }
    } , []);

    console.log(cart)

    const fetchFood = useCallback(()=>(
        setFood(dummyProducts)
    ),[])

    useEffect(()=>{
        fetchFood()
    },[fetchFood])


    const addToCart = (id:string , image: string | StaticImageData , title:string , size: string , price: number , quantity: number)=>{
        setCart((prev)=>{
            const findIndex = prev.findIndex((item)=> item.id === id && item.size === size)
            if(findIndex !== -1){
                const updatedCart = [...prev];
                updatedCart[findIndex].quantity ++
                return updatedCart
            }

            return [...prev , {id , image , size , title , price , quantity}]
        })
    }

    const decreaseCart = (index: number)=>{
        const newCart = [...cart]
        if(newCart[index] && newCart[index].quantity > 1){
            newCart[index].quantity --
        }
        setCart(newCart)
    }

    const increaseCart = (index: number)=>{
        const newCart = [...cart]
        if(newCart[index]){
            newCart[index].quantity ++
        }
        setCart(newCart)
    }

    const deleteCart = (index:number)=>{
        const newCart = [...cart]
        if(newCart[index]){
            newCart.splice(index , 1)
        }
        setCart(newCart)
    }

    const clearAll = ()=>{
        const newCart = [...cart]
        newCart.splice(0)
        setCart(newCart)
    }

    
    useEffect(()=>{
        const savedCart = localStorage.getItem("myCart")
        if(savedCart){
            const parsedCart = JSON.parse(savedCart) as CartItem[]
            setCart(parsedCart)
        }
        setReadyCart(true)
    },[])

    useEffect(()=>{
        localStorage.setItem("myCart" , JSON.stringify(cart))
    },[cart])


  return (
    <foodContext.Provider value={{food , setFood , cart , setCart , addToCart , readyCart, setReadyCart , decreaseCart , increaseCart , deleteCart , clearAll , token , setToken}}>
        {children}
    </foodContext.Provider>
  )
}


export const useFood = ()=>{
    const context = useContext(foodContext)
    if(!context){
        throw new Error("contetx food not found");
    }
    return context
}
