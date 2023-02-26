import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Tshirts = () => {
  const [tshirts, setTshirts] = useState([]);
  const [size, setSize] = useState("M");
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
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              tshirts.map((tshirt,index) => {

                return (
                  <Link key={tshirt.productCode} href={"/product/"+tshirt.productCode}   legacyBehavior><a><div className="lg:w-full md:w-full p-4 w-full shadow-lg m-5">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" className="h-[50vh] block" src={tshirt.imgUrl} />
                    </a>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{tshirt.name + "-" + tshirt.vairant[0]}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium ">{size}</h2>
                      <p className="mt-1">₹{tshirt.price}</p>
                      <p className="mt-1" >SIZE :{tshirt.size.map((element) => {
                        return (
                          
                          <span key={element} className="mt-1 mx-2" >
                            {element}
                            <input className="mt-2 pt-1 mx-1" type="checkbox" name="size" id="size" checked={false} value={element} onChange={onChangeSize} />
                          </span>
                        )

                      })}
                      </p>
                    </div>
                  </div>
                  </a>
                  </Link>
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