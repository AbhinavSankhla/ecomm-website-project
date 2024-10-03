import Link from 'next/link';
import React from 'react'

const NavLinks = () => {
    const links = [
        {name: "About", path:"/about"},
        {name: "Contact", path:"/contact"}
    ];
    
    return (
        <>
            {
                links.map((LinkItem, index) =>{
                    return(
                        <div key={index} className='capitalize'>
                            <div> 
                                <Link href={LinkItem.path} className='px-4 pb-[24px] hover:border-b-[2px] hover:border-[#212121] hover:text-black duration-100 ease-in-out capitalize'>{LinkItem.name}</Link>
                            </div>
                        </div>
                    )
                })
            }    
        </>
    )
}

export default NavLinks


