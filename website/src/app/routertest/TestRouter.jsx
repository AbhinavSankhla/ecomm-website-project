

'use client'
 
import { useRouter } from 'next/navigation'
 
export default function TestRouter() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/')}>
      Dashboard
    </button>
  )
}