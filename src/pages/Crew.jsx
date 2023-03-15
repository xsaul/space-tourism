import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import douglas from "../assets/crew/image-douglas-hurley.png"
import mark from "../assets/crew/image-mark-shuttleworth.png"
import victor from "../assets/crew/image-victor-glover.png"
import anousheh from "../assets/crew/image-anousheh-ansari.png"

function Crew() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='bg-crew-desktop mt-[-1.5rem] px-[4rem] py-[4.25rem]'>
        <h2 className='text-2xl text-white w-[15rem]'><span className='text-slate-500'>02</span>Meet your crew</h2>
        <div className='mt-[1.5rem]'>
        <Slider {...settings}>
          <div className='px-7 d-flex flex-row'>
            <div className='px-[5rem] ml-[-6rem]'>
            <h3 className='text-slate-500 text-2xl uppercase'>Commander</h3>
            <h2 className='text-white text-4xl my-5'>Douglas Hurley</h2>
            <p className="text-white">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
            <div>
              <img className='w-[36rem]' src={douglas} alt="douglas" />
            </div>
          </div>


          <div className='px-7 d-flex flex-row'>
            <div className='px-[5rem] ml-[-6rem]'>
            <h3 className='text-slate-500 text-2xl uppercase'>Mission Specialist</h3>
            <h2 className='text-white text-4xl my-5'>Mark Shuttleworth</h2>
            <p className="text-white">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
            </div>
           <div>
            <img className='w-[36rem]' src={mark} alt="mark" />
           </div>
          </div>


          <div className='px-7 d-flex flex-row'>
            <div className='px-[5rem] ml-[-6rem]'>
            <h3 className='text-slate-500 text-2xl uppercase'>Pilot</h3>
            <h2 className='text-white text-4xl my-5'>Victor Glover</h2>
            <p className="text-white">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
            </div>
            <div>
              <img className='w-[36rem]' src={victor} alt="victor" />
            </div>
            
          </div>


          <div className='px-7 d-flex flex-row'>
            <div className='px-[5rem] ml-[-6rem]'>
            <h3 className='text-slate-500 text-2xl uppercase'>Flight Engineer</h3>
            <h2 className='text-white text-4xl my-5'>Anousheh Ansari</h2>
            <p className="text-white">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
            </div>
           <div>
            <img className='w-[36rem]' src={anousheh} alt="anousheh" />
           </div>
          </div>
        </Slider>
           </div>
        </div>
  )
}

export default Crew