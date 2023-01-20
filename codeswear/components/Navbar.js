import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
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
            <div className="cart absolute right-0 top-2 mx-5">
                <AiOutlineShoppingCart className='text-xl md:text-3xl' />
            </div>
        </div>
    )
}

export default Navbar
