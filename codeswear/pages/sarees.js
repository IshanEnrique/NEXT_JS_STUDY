import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import {BsFillHeartFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from "./state/index"

const Tshirts = () => {
  const [tshirts, setTshirts] = useState([]);
  const [size, setSize] = useState("M");
  const dispatch = useDispatch();
  const { addToCart, removeFromCart,removeFromCartCompletly } = bindActionCreators(actionCreators, dispatch);
  const cartList = useSelector(state => state.cart);
  const onChangeSize=(e)=>{
    setSize(e.target.value);
  }
  const getTShirts = async () => {
    let tShirtsRes = await fetch("/api/get-all-products")
    if (tShirtsRes.status == 200) {
      let tshirtsJson = await tShirtsRes.json();
     
      setTshirts(await tshirtsJson.filter(tshirt=>tshirt.categoryCode==="S-001"));

    } else {
      console.info(">>>>>>>>Get TShirts API Error response  : " + JSON.stringify(tShirtsRes));

    }
  }
  
 

  useEffect(() => {
    getTShirts();
  }, [])

  const productDetails=(productCode)=>{
    
  }
  const wishRef=useRef()
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              tshirts.map((tshirt,index) => {

                return (
                  
                    <div key={index} className="lg:w-80 md:w-72 p-4 w-full shadow-lg m-5">
                    <Link key={tshirt.productCode} href={"/product/"+tshirt.productCode}   legacyBehavior>
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" className="h-[50vh] block" src={tshirt.imgUrl} />
                    </a>
                    </Link>
                    <div className="mt-4 text-center">
                      <BsFillHeartFill ref={wishRef} className= {'flex float-right mr-10 h-5 w-5 ' +( cartList.cart.some(code=> code.productCode=== tshirt.productCode)?' text-pink-500':' text-gray-400') } onClick={(e)=>{
                      
                        if (e.currentTarget.classList.contains('text-pink-500')) {
                          e.currentTarget.classList.remove("text-pink-500");
                          e.currentTarget.classList.add("text-gray-400");
                          removeFromCartCompletly(tshirt.productCode)
                          
                      } else if (!e.currentTarget.classList.contains('text-pink-500')) {
                        e.currentTarget.classList.remove("text-gray-400");
                        e.currentTarget.classList.add("text-pink-500");
                        addToCart(tshirt.productCode, 1, tshirt.price, tshirt.name, tshirt.size, tshirt.vairant)
                          
                      }
                      }} />
                      <Link key={tshirt.productCode} href={"/product/"+tshirt.productCode}   legacyBehavior><a>
                      <h3 className="text-black text-lg font-bold tracking-widest title-font mb-1">{"Suta"}</h3>
                      <h3 className="text-gray-700 text-lg font-medium tracking-widest title-font mb-1">{tshirt.name + "-" + tshirt.vairant[0]}</h3>
                      {/* <h2 className="text-gray-900 title-font text-lg font-medium ">{size}</h2> */}
                      <p className="text-black text-lg font-bold mt-1">₹{tshirt.price}</p>
                      {/* <p className="mt-1" >SIZE :{tshirt.size.map((element) => {
                        return (
                          
                          <span key={element} className="mt-1 mx-2" >
                            {element}
                            <input className="mt-2 pt-1 mx-1" type="checkbox" name="size" id="size" checked={false} value={element} onChange={onChangeSize} />
                          </span>
                        )

                      })}
                      </p> */}
                  </a>
                  </Link>
                    </div>
                  </div>
                )
              })

            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tshirts