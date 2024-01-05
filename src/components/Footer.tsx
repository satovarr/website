import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-around bg-background-dark h-36 text-white text-xl font-light pt-6 pl-20'>
        <div className='w-1/2'>
            <div className='flex gap-24 pb-8'>
                <Link href='/'>Home</Link>
                <Link href='/blog'>Blog</Link>
                <p className='text-gray-500'>
                  Contact</p>
            </div>
        <p className='text-gray-500 text-base'>UI design: Sara Ortiz | Dev: Santiago Tovar</p>
        </div>
        <div className='flex flex-col gap-2 text-base'>
          <div className='flex gap-5'>
            <Link href='https://github.com/satovarr' target='_blank'>
            <Image src='/icons/github.svg' width={30} height={30} alt='github'/>
            </Link>
            <Link href='https://www.linkedin.com/in/santiago-tovar/' target='__blank'>
            <Image src='/icons/linkedin.svg' width={30} height={30} alt='linkedin' className='p-0.5'/>
            </Link>
          </div>
          <a href="mailto:santiagotovar.contacto@gmail.com" target="__blank" className='text-gray-300'>
              santiagotovar.contacto@gmail.com
            </a>
            <p className='text-gray-300'>(+57) 313 5187100</p>
        </div>
    </footer>
  )
}
