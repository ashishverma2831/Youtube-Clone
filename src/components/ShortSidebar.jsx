import React from 'react'
import home from '../assets/home.png'
import game_icon from '../assets/game_icon.png'
import automobiles from '../assets/automobiles.png'
import music from '../assets/music.png'
import sports from '../assets/sports.png'
import news from '../assets/news.png'
import tech from '../assets/tech.png'
import entertainment from '../assets/entertainment.png'
import blogs from '../assets/blogs.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import megan from '../assets/megan.png'
import cameron from '../assets/cameron.png'
import { NavLink } from 'react-router-dom'
import '../App.css'

const ShortSidebar = ({sidebar,setCategory}) => {
  return (
    <>
        <section className={!sidebar?'hidden':'block absolute z-5'}>
        <div className='bg-white w-24 h-[100vh] fixed top-0 pt-24 '>
            <div className='flex flex-col gap-2 justify-center'>
                <div className='flex mx-auto px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(0)}}>
                    <img className='w-7' src={home} />
                </div>
                <div className='flex mx-auto px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(20)}}>
                    <img className='w-7' src={game_icon} />
                </div>
                <div className='flex mx-auto px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(2)}}>
                    <img className='w-7' src={automobiles} />
                </div>
                <div className='flex mx-auto px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(17)}}>
                    <img className='w-7' src={sports} />
                </div>
                <div className='flex mx-auto px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(24)}}>
                    <img className='w-7' src={entertainment} />
                </div>
                <div className='flex mx-auto px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(28)}}>
                    <img className='w-7' src={tech} />
                </div>
                <div className='flex mx-auto px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(10)}}>
                    <img className='w-7' src={music} />
                </div>
                <div className='flex mx-auto px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(22)}}>
                    <img className='w-7' src={blogs} />
                </div>
                <div className='flex mx-auto px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(25)}}>
                    <img className='w-7' src={news} />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ShortSidebar