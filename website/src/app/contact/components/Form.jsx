import React from 'react'

export default function Form() {
  return (
    <section className='bg-rose-100'>
      <div className='w-[50%] mx-auto py-20 text-center'>
        <h2 className='text-[20px] md:text-[40px] font-light mb-5'> 
          Need a quick help?
        </h2>
        <input type="text" name="street-address" id="street-address" placeholder='Your name' className="block w-full border-0 ps-2 py-1.5 text-gray-900 shadow-sm focus:ring-0 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-br-3xl mb-2"/>

        <input type="text" name="street-address" id="street-address" placeholder='Your e-mail' className="block w-full border-0 ps-2 py-1.5 text-gray-900 shadow-sm focus:ring-0 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-br-3xl mb-2"/>

        <input type="text" name="street-address" id="street-address" placeholder='Subject' className="block w-full border-0 ps-2 py-1.5 text-gray-900 shadow-sm focus:ring-0 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-br-3xl mb-2"/>

        <textarea id="about" name="about" rows="3" placeholder='Message' className="block w-full border-0 ps-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"></textarea>
      
        <button className="bg-black text-white font-medium py-3 px-10 hover:opacity-75 transition-opacity duration-300 my-4">
            Send a message
        </button>
      </div>
    </section>
  )
}
