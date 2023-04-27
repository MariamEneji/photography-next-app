import React from 'react'
import Image from 'next/legacy/image'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='text-2xl font-bold p-4 '>Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 md:gap-4 p-4'>
            <div className='w-full h-ful col-span-2 md:col-span-3 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1617447871614-ffddc87dd75c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' alt='/' layout='responsive' width='677' height='451'/>
            </div>
            <div className="w-full h-full">
                <Image src='https://images.unsplash.com/photo-1681189116425-fd3e47eb9647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                />
            </div>

            <div className="w-full h-full">
                <Image src='https://images.unsplash.com/photo-1680875894705-1b23d0bfd064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                />
            </div>

            <div className="w-full h-full">
                <Image src='https://images.unsplash.com/photo-1671603221845-8dd3db802b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                />
            </div>

            <div className="w-full h-full">
                <Image src='https://images.unsplash.com/photo-1680794060754-a55714ded55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                alt='/'
                width='217'
                height='215'
                layout='responsive'
                />
            </div>
        </div>
    </div>
  )
}

export default Portfolio