"use client"
import React, { useEffect, useMemo, useState } from 'react'
import searchIcon from "../../public/src/assets/search.svg"
import star from "../../public/src/assets/star.svg"
import cart from "../../public/src/assets/cart-added.svg"
import { IoClose } from "react-icons/io5";

import Image from 'next/image'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { useFood } from '@/context/FoodContext'
import {motion} from "framer-motion"
import MenuSkeleton from '@/skeleton/MenuSkeleton'
import SidebarSkeleton from '@/skeleton/SidebarSkeleton'
import PaginationSkeleton from '@/skeleton/PaginationSkeleton'
export default function Menu() {

  const [changeLevel , setChangeLevel] = useState("")
  const [search , setSearch] = useState("")
  const [categories , setCategories] = useState<string[]>([])
  const [types , setTypes] = useState<string[]>([])

  const handelChangeLevel = (value: string)=>{
    setChangeLevel(value)
  }

  const handelCategories = (ca:string)=>{
    setCategories((prev)=> prev.includes(ca) ? prev.filter((p)=> p !== ca) : [...prev , ca])
  }

  const handelTypes = (ty:string)=>{
    setTypes((prev)=> prev.includes(ty) ? prev.filter((p)=> p !== ty) : [...prev , ty])
  }

  const {food , addToCart} = useFood()

  

  const handelFilter = useMemo(()=> {

    let data = [...food]

    if(search){
      data = [...data].filter((item)=> item.title.includes(search))
    }

    if(changeLevel === "low"){
      data = [...data].sort((a, b) => {
        const priceA = (Object.values(a.price)[0] as number | undefined) ?? 0;
        const priceB = (Object.values(b.price)[0] as number | undefined) ?? 0;
        return priceA - priceB;
      });
    }else if(changeLevel === "high"){
      data = [...data].sort((a, b) => {
        const priceA = (Object.values(a.price)[0] as number | undefined) ?? 0;
        const priceB = (Object.values(b.price)[0] as number | undefined) ?? 0;
        return priceB - priceA ;
      });
    }

    if(categories.length > 0){
      data = [...data].filter((item)=> categories.includes(item.category))
    }

    if(types.length > 0){
      data = [...data].filter((item)=> types.includes(item.type))
    }

    return data
}, [search , food , changeLevel , categories , types])

  const [currentPage , setCurrentPage] = useState(1)
  const perPage = 12

  const paginatedData = useMemo(()=> handelFilter.slice((currentPage - 1) * perPage , (currentPage * perPage)) , [handelFilter, currentPage])
  const totalPages = Math.ceil(handelFilter.length / perPage)
  const filteredCategories = useMemo(()=> [...new Set(food.map((item)=> item.category))],[food])
  const filteredTypes = useMemo(()=> [...new Set(food.filter((item)=> categories.length === 0 || categories.includes(item.category)).map((item)=> item.type))],[food , categories])

  useEffect(() => {
    setCurrentPage(1);
  }, [search, changeLevel, categories, types]);

  const [showSide , setShowSide] = useState(true)
  const [isDesktop , setIsDesktop] = useState(true)

   useEffect(()=>{
      const handelResize = ()=>{
        if(window.innerWidth >= 1280){
          setShowSide(true)
          setIsDesktop(true)
        }else{
          setShowSide(false)
          setIsDesktop(false)
        }
      }
  
      handelResize()
  
      window.addEventListener("resize" , handelResize)
  
      return  ()=>{
        window.removeEventListener("resize" , handelResize)
      }
    },[])

    const [size ,  setSize] = useState<string[]>([])

    useEffect(() => {
      if (food.length > 0) {
        setSize(food.map((item) => item.sizes[0])); 
      }
    }, [food]);
    
    const handelSize = (itemIndex:number , value:string)=>{
        setSize((prev)=> {
            const newSize = [...prev]
            if (newSize[itemIndex] === value){
                newSize[itemIndex] = "";
            }else{
                newSize[itemIndex] = value;
            } 
            return newSize;
        })
    }

    const isLoading = !paginatedData || paginatedData.length === 0;
  return (
    <div className='bg-tertiray py-12'>
      <div onClick={()=>setShowSide(true) } className='cursor-pointer text-2xl px-4 text-black font-bold block xl:hidden mb-5'>Click to choose</div>
      <div className="flex gap-8">

        {isLoading ? <SidebarSkeleton /> : <>
        {showSide && (  <motion.div initial={{ y: isDesktop ? 0 : "-130%"}} animate={{ y: 0}} transition= {{ duration: 0.7, ease: "easeOut" }}  className={`translate-y-0 absolute h-auto z-40 top-[120px] xl:static px-4 py-10 bg-white w-full xl:w-[300px] rounded-md xl:rounded-none xl:rounded-r-md`}>
          <div onClick={()=> setShowSide(false)} className='cursor-pointer absolute top-3 right-3 xl:hidden'>
            <IoClose  className='text-2xl'/>
          </div>
        <div className='relative w-full h-[38px]'>
          <input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search...' className='outline-none rounded-xl px-2 h-full border-[1px] border-primary w-full bg-pink-200'/>
          <Image src={searchIcon} alt='search-icon' width={25} height={25} className='cursor-pointer  absolute right-2 top-[50%] translate-y-[-50%]'/>
        </div>

        <div className='mt-5 bg-tertiray rounded-xl p-4'>
          <h2 className='text-base font-medium'>Sort By Price</h2>
          <Select value={changeLevel} onValueChange={handelChangeLevel}>
            <SelectTrigger className="w-full mt-3">
              <SelectValue placeholder="relevant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevant">Relevant</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='mt-5 bg-tertiray rounded-xl p-4'>
          <h2 className='text-base font-medium'>Categories</h2>
          <div className='mt-3 flex flex-col gap-3'>
            {filteredCategories.map((item , index)=>{
              return <label key={index} className='flex items-center gap-1'>
                <input value={item} type='checkbox' checked={categories.includes(item)} onChange={(e)=> handelCategories(e.target.value)}/>
                {item}
              </label>
            })}
          </div>
        </div>

        <div className='mt-5 bg-tertiray rounded-xl p-4'>
          <h2 className='text-base font-medium'>Types</h2>
          <div className='mt-3 flex flex-col gap-3'>
            {filteredTypes.map((item , index)=>{
              return <label key={index} className='flex items-center gap-1'>
                <input value={item} type='checkbox' checked={types.includes(item)} onChange={(e)=> handelTypes(e.target.value)}/>
                {item}
              </label>
            })}
          </div>
        </div>

      </motion.div>)}
    </>}
    
      <div className='p-4 bg-white flex flex-col gap-8 w-full xl:max-w-[80%] xl:rounded-l-md'>
        {isLoading  ? <MenuSkeleton /> :   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {paginatedData.map((item , index)=>{
                return <div key={index} className='mt-12 bg-tertiray rounded-md relative z-30 p-2.5'>
                  <div className='absolute left-[50%] translate-x-[-50%] -top-12'>
                    <Image src={item.images[0]} alt='products-image' width={100} height={100} />
                  </div>
                  <h3 className='mt-10 text-xl font-black line-clamp-1'>{item.title}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className='text-base font-medium'>{item.category}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Image src={star} alt='icon-star' width={20} height={20} />
                          <Image src={star} alt='icon-star' width={20} height={20} />
                          <Image src={star} alt='icon-star' width={20} height={20} />
                          <Image src={star} alt='icon-star' width={20} height={20} />
                          <Image src={star} alt='icon-star' width={20} height={20} />
                        </div>
                        <span className='text-base font-normal text-gray-400'>5.0</span>
                      </div>
                  </div>
                  <p className='mt-2 text-gray-400 font-normal line-clamp-1 text-[14px]'>{item.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className='flex items-center gap-2'>
                      {item.sizes.map((si , sizeIndex)=>{
                                return <label key={sizeIndex} className={`cursor-pointer w-[25px] h-[25px] flex items-center justify-center ${size[index] === si ? "border-[1px] border-secondary bg-white" : "border-[1px] border-gray-100 bg-gray-200"}`}>
                                    <input value={si} checked={size[index] === si} type="checkbox" className='appearance-none' onChange={()=> handelSize(index , si)}/>
                                    {si}
                                </label>
                            })}
                    </div>
                    <span className='text-xl font-bold text-secondary'>${ item.price[size[index]] ?? item.price[item.sizes[0]] ?? 0 }</span>

                  </div>
                  <div className='mt-1'>
                    <div className='flex items-center gap-4'>
                      <div className='flex flex-col gap-1'>
                        <span className='text-base font-semibold'>Prep</span>
                        <span className='text-[14px] font-normal text-gray-400'>5m</span>
                      </div>
                      <div className='flex flex-col gap-1 border-l-[1px] border-l-secondary pl-5'>
                        <span className='text-base font-semibold'>Prep</span>
                        <span className='text-[14px] font-normal text-gray-400'>5m</span>
                      </div>
                    </div>
                    <div onClick={()=> addToCart(item._id , item.images[0] , item.title , size[index] , item.price[size[index]] ?? 0  , 1)} className='cursor-pointer w-10 h-10 rounded-md absolute bottom-0 right-0 flex items-center justify-center bg-secondary'>
                        <Image src={cart} alt='icon-cart' width={25} height={25} />
                    </div>
                  </div>
                </div>
        })}
      </div>}
 
        {isLoading ? <PaginationSkeleton /> :  <div className='mt-8 flex items-center justify-center gap-4 flex-wrap'>
          <button onClick={()=>setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={`${currentPage === 1 ? "cursor-not-allowed bg-primary text-white" : "bg-secondary"} cursor-pointer px-3 py-1`}>previous</button>

          <div className='flex items-center gap-4'>
            {Array.from({length: totalPages}).map((_, i)=>{
              return <button className={`cursor-pointer px-2.5 py-1 ${currentPage === i+1 ? "bg-black text-white" : "bg-white text-black"}`} onClick={()=>setCurrentPage(i + 1) } key={i}>{i+1}</button>
            })}
          </div>

          <button onClick={()=>setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className={`${currentPage === totalPages ? "cursor-not-allowed bg-primary text-white" : "bg-secondary"} cursor-pointer px-3 py-1`}>Next</button>
        </div>}

      </div>

      </div>
    </div>
  )
}
