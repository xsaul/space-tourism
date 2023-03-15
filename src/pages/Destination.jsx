import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import imagemoon from "../assets/destination/imagemoon.png"
import imagetitan from "../assets/destination/imagetitan.png"
import imagemars from "../assets/destination/imagemars.png"
import imageeuropa from "../assets/destination/imageeuropa.png"


function Destination() {
      return (
    <div className='bg-destination-desktop'>
      <div className='flex max-[768px]:flex-col justify-evenly text-white'>
        <div>
        <div className='p-[5rem] mt-[3.2rem]'>
        <h2 className='text-2xl w-[12rem] max-[768px]:w-[25rem]'><span className='text-slate-500'>01</span> Pick your destination</h2>
        </div>
        </div>
        <div className='m-[7rem]'>
    <Tabs>
    <TabList className="flex max-[768px]:mt-[5rem] gap-x-[1rem] ml-[6rem]">   
      <Tab className="cursor-pointer">Moon</Tab>
       <Tab className="cursor-pointer">Mars</Tab>
       <Tab className="cursor-pointer">Europa</Tab>
       <Tab className="cursor-pointer">Titan</Tab>
    </TabList>

    <TabPanel>
      <div className='flex'>
        <div className='absolute max-[768px]:mt-[2.5rem] left-[12rem] max-[768px]:left-[15rem] top-[16rem] max-[768px]:top-[14rem]'>
      <img className='mt-[3rem] w-[12rem]' src={imagemoon} alt="moon" />
        </div>
        <div>
             <h1 className='text-5xl my-5'>Moon</h1>
          <p className='py-3 border-b-2 border-slate-600'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
       <div className='flex mt-[2rem] pt-2 justify-evenly'>
         <div>
         <h3>AVG. DISTANCE</h3>
         <p>384,400 km</p>  
         </div>
         <div>
         <h3>EST. TRAVEL TIME</h3>
         <p>3 days</p>
        </div>
        </div>
      </div>
      </div>
    </TabPanel>

    <TabPanel>
      <div className='flex'>
        <div className='absolute left-[12rem] top-[16rem]'>
      <img className='mt-[3rem] w-[12rem]' src={imagemars} alt="mars" />
        </div>
        <div>
             <h1 className='text-5xl my-5'>Mars</h1>
          <p className='py-3 border-b-2 border-slate-600'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
       <div className='flex mt-[2rem] pt-2 justify-evenly'>
         <div>
         <h3>AVG. DISTANCE</h3>
         <p>225 mil. km</p>  
         </div>
         <div>
         <h3>EST. TRAVEL TIME</h3>
         <p>9 months</p>
        </div>
        </div>
      </div>
      </div>
    </TabPanel>
    
    <TabPanel>
      <div className='flex'>
        <div className='absolute left-[12rem] top-[16rem]'>
      <img className='mt-[3rem] w-[12rem]' src={imageeuropa} alt="europa" />
        </div>
        <div>
             <h1 className='text-5xl my-5'>Europa</h1>
          <p className='py-3 border-b-2 border-slate-600'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
       <div className='flex mt-[2rem] pt-2 justify-evenly'>
         <div>
         <h3>AVG. DISTANCE</h3>
         <p>628 mil. km</p>  
         </div>
         <div>
         <h3>EST. TRAVEL TIME</h3>
         <p>3 years</p>
        </div>
        </div>
      </div>
      </div>
    </TabPanel>
    
    <TabPanel>
      <div className='flex'>
        <div className='absolute left-[12rem] top-[16rem]'>
      <img className='mt-[3rem] w-[12rem]' src={imagetitan} alt="titan" />
        </div>
        <div>
             <h1 className='text-5xl my-5'>Titan</h1>
          <p className='py-3 border-b-2 border-slate-600'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
       <div className='flex mt-[2rem] pt-2 justify-evenly'>
         <div>
         <h3>AVG. DISTANCE</h3>
         <p>1.6 bil. km</p>  
         </div>
         <div>
         <h3>EST. TRAVEL TIME</h3>
         <p>7 years</p>
        </div>
        </div>
      </div>
      </div>
    </TabPanel>
  </Tabs>
  </div>
       </div>
       </div>
      )
}

export default Destination