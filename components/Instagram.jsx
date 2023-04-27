import React from 'react'

import Img1 from './img/Img1.jpeg';
import Img2 from './img/Img2.jpeg';
import Img3 from './img/Img3.jpeg';
import Img4 from './img/Img4.jpeg';
import Img5 from './img/Img4.jpeg';
import Img6 from './img/Img4.jpeg';
import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className='max-w-{1200px} mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Elvace</p>
        <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={Img1}/>
            <InstagramImg socialImg={Img2}/>
            <InstagramImg socialImg={Img3}/>
            <InstagramImg socialImg={Img4}/>
            <InstagramImg socialImg={Img5}/>
            <InstagramImg socialImg={Img6}/>
        </div>
    </div>
  )
}

export default Instagram