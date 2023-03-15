import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import imageVehicle from "../assets/technology/image-launch-vehicle-portrait.jpg"
import imageSpace from "../assets/technology/image-spaceport-portrait.jpg"
import imageCapsule from "../assets/technology/image-space-capsule-portrait.jpg"


function Technology() {


  return (
      <div className='bg-technology-desktop p-[3rem]'>
        <h2 className='text-2xl text-white w-[17rem]'><span className='text-slate-500'>03</span>Space launch 101</h2>
        <div className='mt-[3.5rem] text-white flex'>
        <Tabs className="flex">
        <TabList className="mt-[1.5rem]">   
      <Tab className='rounded-full border-slate-300 border-[1.5px] hover:text-slate-400 hover:border-slate-400 p-4 bg-black cursor-pointer'>1</Tab>
       <Tab className='rounded-full border-slate-300 border-[1.5px] hover:text-slate-400 hover:border-slate-400 p-4 bg-black my-[1.5rem] cursor-pointer'>2</Tab>
       <Tab className='rounded-full border-slate-300 border-[1.5px] hover:text-slate-400 hover:border-slate-400 p-4 bg-black cursor-pointer'>3</Tab>
          </TabList>
          
            <TabPanel>
            <div className='flex max-[768px]:flex-col'>
          <div className='px-[3rem] ml-[2rem]'>
            <h2 className='text-slate-300 text-xl'>THE TERMINOLOGY…</h2>
            <h1 className='my-[1.2rem] text-4xl'>LAUNCH VEHICLE</h1>
            <p className='pr-[3.5rem] text-slate-300'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
          </div>

          <div>
            <img className='w-[85rem] max-[768px]:mt-[3rem]' src={imageVehicle} alt="" />
          </div>
          </div>
          </TabPanel>

          <TabPanel>
            <div className='flex'>
          <div className='px-[3rem] ml-[2rem]'>
            <h2 className='text-slate-300 text-xl'>THE TERMINOLOGY…</h2>
            <h1 className='my-[1.2rem] text-4xl'>SPACEPORT</h1>
            <p className='pr-[3.5rem] text-slate-300'>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
          </div>

          <div>
            <img className='w-[85rem]' src={imageSpace} alt="" />
          </div>
          </div>
          </TabPanel>

          <TabPanel>
            <div className='flex'>
          <div className='px-[3rem] ml-[2rem]'>
            <h2 className='text-slate-300 text-xl'>THE TERMINOLOGY…</h2>
            <h1 className='my-[1.2rem] text-4xl'>SPACE CAPSULE</h1>
            <p className='pr-[3.5rem] text-slate-300'>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
          </div>

          <div>
            <img className='w-[85rem]' src={imageCapsule} alt="" />
          </div>
          </div>
          </TabPanel>
            </Tabs>
        </div>
    </div>
  )
}

export default Technology