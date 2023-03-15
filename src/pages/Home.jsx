import React from 'react'
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div className="bg-home-desktop">
      <div className='flex max-[768px]:flex-col'>
        <div className='px-[5rem] max-[768px]:px-[0.1rem] py-[5rem] mt-5 max-[768px]:ml-[5rem]'>
       <h2 className='tracking-wide text-2xl text-slate-300'>SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className='text-8xl text-white my-3'>SPACE</h1>
        <p className='pr-[28rem] text-slate-300'>
Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div>
        <NavLink className='absolute right-[13rem] max-[768px]:right-[3rem] top-[16rem] max-[768px]:top-[20rem] bg-white w-[14rem] h-[14rem] rounded-full flex justify-center items-center text-2xl textDark font-bold hover:bg-slate-100' to="/destination">Explore</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home