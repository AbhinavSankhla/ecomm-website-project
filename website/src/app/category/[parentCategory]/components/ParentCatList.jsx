'use client'

import axios from 'axios';
import { useParams } from 'next/navigation';
import React from 'react'

const ParentCatList = () => {
    const params = useParams();
    console.log(params)

    const response = axios.get(''); 

  return (
    <div>
        hello
    </div>
  )
}

export default ParentCatList;