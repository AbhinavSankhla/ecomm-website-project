import React from 'react'
import ProductList from '../../components/ProductListing'

export default function RelatedProducts() {
  return (
    <>
        <div>
            <div className='w-[80%] max-w-screen-xl mx-auto'>
                <h1 className='py-4 text-xl'>Related Products</h1>
                <ProductList/>
            </div>
        </div>
    </>
  )
}
