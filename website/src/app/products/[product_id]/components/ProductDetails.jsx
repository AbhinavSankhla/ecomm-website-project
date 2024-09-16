import React from 'react'

export default function ProductDetails() {
  return (
    <>
      <section>
        <div className='w-[80%] border-2 border-red-500 mx-auto my-5'>
          <div className='grid lg:grid-cols-2 gap-4'>
            <div className='border-2 border-green-500'>
              <div>
                {/* <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic8.jpg" alt="" /> */}
              </div>
            </div>
            <div className='border-2 border-green-500'>
              <h3>Quisque lorem tortor</h3>
              <p>$9.00</p>
              <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula porta urna.</p>
              <div className="border-b border-gray-300 py-2">
                <span className="font-bold">Occasion:</span>
                <span className="font-bold">Fit Type:</span>
                <span className="font-bold">Style:</span>
                <span className="font-bold">Material:</span>
                <span className="font-bold">colour:</span>
 
              </div>
              <div className="border-b border-gray-300 py-2">
                
                <span className="px-4 py-1">Regular</span>
              </div>
              <div className="border-b border-gray-300 py-2">
                              <span className="px-4 py-1">Elegant</span>
              </div>
              <div className="border-b border-gray-300 py-2">
                
                <span className="px-4 py-1">Polyester</span>
              </div>
              <div className="border-b border-gray-300 py-2">
                               <span className="px-4 py-1"></span>
              </div>
            </div>
          </div> 
        </div>
      </section>
    </>
  )
}
