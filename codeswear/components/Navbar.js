import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { AiFillCloseSquare, AiOutlineShoppingCart, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill, BsFillCartXFill } from 'react-icons/bs'
import { actionCreators } from "../pages/state/index"
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch();
    const { addToCart, removeFromCart } = bindActionCreators(actionCreators, dispatch);
    const cartList = useSelector(state => state.cart);
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove("translate-x-full");
            ref.current.classList.add("translate-x-0");
        } else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.add("translate-x-full");
            ref.current.classList.remove("translate-x-0");
        }
    }
    const ref = useRef();
const [productList, setProductList] = useState([])
    const getProductList = async () => {
        let categoriesRes = await fetch("/api/get-all-categories")
        if (categoriesRes.status == 200) {
            let categoriesJson = await categoriesRes.json();

            setProductList(categoriesJson);

        } else {
            console.info(">>>>>>>>Get All Categories API Error response  : " + JSON.stringify(categoriesRes));

        }
    }

    useEffect(() => {
        getProductList();
    }, [])
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md sticky top-0 z-10 bg-white'>
            <div className="logo">
                <Link legacyBehavior href={"/"}>
                    <a> <Image src="/images/logo.png" alt="CodesWear" width={150} height={20} /></a>
                </Link>
            </div>
            <div className="nav ml-3">
                <ul className="flex items-center space-x-4 font-bold md:text-md top-2">
                    {
                        
                        productList.map((categories,index)=> {

                          return ( <Link key={index} legacyBehavior href={categories.href}><a><li>{categories.cateogryName}</li></a></Link>
                          )
                        })
                    }
                    
                    <Link legacyBehavior href={"/about"}><a><li>About Us</li></a></Link>
                    <Link legacyBehavior href={"/about"}><a><li>Contact Us</li></a></Link>
                </ul>
            </div>
            <div onClick={toggleCart} className="cart absolute right-0 top-2 mx-5 cursor-pointer">
                <AiOutlineShoppingCart className='text-xl md:text-3xl' />
            </div>

            <div ref={ref} className="sideCart w-72 h-[100vh] absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full">
                <h2 className="font-bold text-xl text-center">Your Cart</h2>
                <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseSquare /></span>
                <ol className='list-decimal' >

                    {

                        (!cartList || !cartList.cart || cartList.cart.length === 0) &&
                        <div>
                            <BsFillCartXFill className='text-red-700 md:h-14 md:w-14 lg:h-28 lg:w-28 lg:mt-5 lg:mb-5 lg:ml-5' />
                            <span className='text-red-800 font-bold'>Sorry! Your cart is empty.</span>

                        </div>
                    }

                    {


                        cartList && cartList.cart.length > 0 && cartList.cart.map((product) => {
                            return (<li key={product.productCode}>
                                <div className="item flex my-3">
                                    <div className='w-2/3 font-semibold'>{product.name} - {product.vairant}</div>
                                    <div className='flex items-center justify-center w-1/3 font-semibold text-lg'><AiFillMinusCircle className='cursor-pointer text-red-600' onClick={() => {
                                        removeFromCart(product.productCode)
                                    }} />
                                        <span className='mx-2'>{product.qty}</span>
                                        <AiFillPlusCircle className='cursor-pointer text-green-600' onClick={() => {
                                            addToCart(product.productCode, 1, product.price, product.name, product.size, product.vairant)
                                        }} /></div>
                                </div>
                            </li>
                            )
                        })

                    }
                </ol>
                {cartList && cartList.size > 0 && <div className="flex">

                    <button className="flex mx-2 mt-5 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1' /> Checkout</button>
                    <button className="flex mx-2 mt-5 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
                </div>}
            </div>
        </div>
    )
}

export default Navbar
