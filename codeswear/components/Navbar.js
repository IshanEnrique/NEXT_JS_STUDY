import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiFillCloseSquare, AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
    const toggleCart=()=>{
        if(ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove("translate-x-full");
            ref.current.classList.add("translate-x-0");
        }else{
            ref.current.classList.add("translate-x-full");
            ref.current.classList.remove("translate-x-0");
        }
    }
    const ref = useRef();
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md'>
            <div className="logo">
                <Link legacyBehavior href={"/"}>
                    <a> <Image src="/images/logo.png" alt="CodesWear" width={150} height={20} /></a>
                </Link>
            </div>
            <div className="nav ml-3">
                <ul className="flex items-center space-x-4 font-bold md:text-md top-2">
                    <Link legacyBehavior href={"/tshirts"}><a><li>T-Shirts</li></a></Link>
                    <Link legacyBehavior href={"/hoodies"}><a><li>Hoodies</li></a></Link>
                    <Link legacyBehavior href={"/mugs"}><a><li>Mugs</li></a></Link>
                    <Link legacyBehavior href={"/sticker"}><a><li>Stickers</li></a></Link>
                </ul>
            </div>
            <div onClick={toggleCart} className="cart absolute right-0 top-2 mx-5 cursor-pointer">
                <AiOutlineShoppingCart className='text-xl md:text-3xl' />
            </div>

            <div ref={ref} className="sideCart absolute top-0 right-0 bg-gray-100 p-10 transform transition-transform translate-x-full">
                <h2 className="font-bold text-xl">Shopping Cart</h2>
                <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-2xl text-gray-500"><AiFillCloseSquare  /></span>
                <ol>
                    <li>
                        <span>T-Shirt - Wear The Code</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Navbar
