'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Header() {

    const router = usePathname();

    return (
        <>
            <header className='flex justify-center items-center fixed top-2 left-0 right-0 z-40 drop-shadow-lg '>
                <nav className=' h-full flex items-center bg-soft-black text-white border-[0.15rem]  rounded-lg border-dark-gray'>
                    <a className={clsx('px-4 py-2 h-full rounded-l-lg', router === '/' && 'text-sky-500 border-b-2 border-b-sky-500', 'hover:text-sky-500')} href='/'>
                        <img src='logo.png' className='w-6' alt='Uma logo escrito Di. O apelido de Diego.'/>
                    </a>
                    <a className={clsx('px-4 py-2 h-full rounded-r-lg', router === '/about' && 'text-sky-500 border-b-2 border-b-sky-500', 'hover:text-sky-500')} href='/about'>Get to know Me</a>
                </nav>
            </header>
      </>
       )
}