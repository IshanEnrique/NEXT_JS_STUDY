import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center'>
            <div className="logo">
                <Image src="/images/logo.png" alt="CodesWear" width={150} height={20} />
            </div>
            <div className="nav">
                <ul className="flex items-center space-x-4">
                    <Link legacyBehavior href={"/"}><a><li>T-Shirts</li></a></Link>
                    <Link legacyBehavior href={"/"}><a><li>Hoodies</li></a></Link>
                    <Link legacyBehavior href={"/"}><a><li>Mugs</li></a></Link>
                    <Link legacyBehavior href={"/"}><a><li>Stickers</li></a></Link>
                </ul>
            </div>
            <div className="cart">Cart</div>
        </div>
    )
}

export default Navbar
