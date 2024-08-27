import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='text-center mt-10'>
        <h3>404 Not Found</h3>
        <Link href='/'>Go Home</Link>
    </div>
  )
}
