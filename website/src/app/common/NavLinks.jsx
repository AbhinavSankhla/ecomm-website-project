import React from 'react'

const NavLinks = () => {
    const links = [
        {name: "About us"},
        {name: "Shop"},
        {name: "Contact"}
    ];

    return (
        <>
            {
                links.map((link, index) =>{
                    return(
                        <div key={index}> 
                        <h1>{link.name}</h1>
                        </div>
                    )
                })
            }    
        </>
    )
}

export default NavLinks

// import React from 'react'

// export default function Navlinks() {
//     const links = [{name: 'About us'},{name: 'Shop'},{name: 'Contact'}];
//     return (
//         <>
//             <h1>this text is visible</h1>
//             {
//                 // this is not visible on home page nav
//                 links.map((link, index) => {

//                     <div key={index}>
//                         <h1>{link.name}</h1>
//                     </div>

//                 })
//             }

//         </>
//     )
// }

