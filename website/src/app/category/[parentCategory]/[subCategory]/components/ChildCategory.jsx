'use client'

import { useParams } from 'next/navigation'
import React from 'react'

export default function ChildCategory() {

    const params = useParams();
    console.log(useParams)
    console.log(params)

  return (
    <div>
      hello
    </div>
  )
}
