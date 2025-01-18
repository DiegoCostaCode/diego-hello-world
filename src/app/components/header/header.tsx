'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Header() {

    const router = usePathname();

    return (
        <>
            <header className='flex justify-center items-center fixed top-2 left-0 right-0 z-40  drop-shadow-lg'>
                <nav className=' h-full flex items-center bg-[#181818] text-white rounded-lg '>
                    <a className={clsx('px-4 py-2 h-full rounded-l-lg', router === '/' && 'text-sky-500 border-b-2 border-b-sky-500', 'hover:text-sky-500')} href='/'>Profile</a>
                    <a className={clsx('px-4 py-2 h-full rounded-r-lg', router === '/about' && 'text-sky-500 border-b-2 border-b-sky-500', 'hover:text-sky-500')} href='/about'>About me</a>
                </nav>
            </header>
      </>
       )
}