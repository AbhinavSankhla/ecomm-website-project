import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { SiOpenproject } from "react-icons/si";
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'black',
  }
  // More products...
]

export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 border-2 border-blue-500">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className=""> 
              <div className="group relative aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-black lg:aspect-none lg:h-80 border-2 border-orange-500">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 ease-in-out transform group-hover:scale-125 group-hover:opacity-80 border border-blue-500 " 
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  border-4 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center transition-transform duration-300 ease-in-out transform scale-0 group-hover:scale-100">
                    <button className="p-4 text-white bg-black bg-opacity-75 border-2 border-green-500 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                        <FaShoppingCart className='text-2xl'/>
                    </button>
                    <button className="p-4 text-white bg-black bg-opacity-75 border-2 border-green-500 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                        <SiOpenproject className='text-2xl '/>
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-red-500">
                  <h3 className="text-sm md:text-base lg:text-[19px] text-#161922 font-light py-1 border border-green-500 pt-4">
                      <Link href={`/products/${product.id}`}>
                        {product.name}
                      </Link>
                  </h3>
                  <p className="text-lg font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}