import React, { useRef, useState } from 'react'
import menu from '../assets/menu.png'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import upload from '../assets/upload.png'
import more from '../assets/more.png'
import notification from '../assets/notification.png'
import profile from '../assets/tom.png'
import { Link } from 'react-router-dom'
import images from '../assets/images.jpg'
import { API_KEY } from '../data'
import Feed from './Feed'
import { value_converter } from '../data'
import moment from 'moment'

const Navbar = ({ sidebar, setSidebar }) => {
    const searchRef = useRef(null);
    const [searchList, setSearchList] = useState([]);

    const fetchSearch = async () => {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchRef.current.value}&key=${API_KEY}`);
        const data = await res.json();
        // console.log(data);
        setSearchList(data.items);
    }

    // const [videoData, setVideoData] = useState(null)
    // const searchVideo = () => {
    //     return (
    //         searchList.slice(1).map((video, index) => {
    //             const fetchSearchVideo = async () => {
    //                 const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video.id.videoId}&key=${API_KEY}`);
    //                 const data = await res.json();
    //                 console.log(data.items[0]);
    //                 setVideoData(data.items[0]);
    //             }
    //             const [videoData, setVideoData] = useState(null)
    //             return (
    //                 <Link to={`/video/${videoData.snippet.categoryId}/${videoData.id}`} className='w-full' key={index}>
    //                     <div className='flex flex-col'>
    //                         <div>
    //                             <img className='rounded-lg w-full' src={videoData.snippet.thumbnails.medium.url} alt="thumbnail" />
    //                         </div>
    //                         <div className='flex gap-2 '>
    //                             <div className='w-10/12'>
    //                                 <h2 className='mx-1 text-lg font-semibold mt-2'> {videoData.snippet.title} </h2>
    //                                 <p className='mx-1 font-semibold text-gray-500'>{videoData.snippet.channelTitle}</p>
    //                                 {/* <p className='mx-1 text-sm text-gray-500'>{video.snippet.description} </p> */}
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </Link>
    //             )
    //         })
    //     )
    // }

    const searchResults = ()=>{
        return(
            <section className={sidebar ? 'feed max-w-screen-2xl px-4 py-4 gap-4 bg-gray-100 ml-24' : 'bg-gray-100 feed max-w-screen-2xl ml-56 px-4 py-4 '}>
            {
                searchList.map((video, index) => {
                    return (
                        <Link to={`/video/${video.snippet.categoryId}/${video.id.videoId}`} className='w-full' key={index}>
                            <div className='flex flex-col'>
                                <div>
                                    <img className='rounded-lg w-full' src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
                                </div>
                                <div className='flex gap-2 '>
                                    <div className='w-10/12'>
                                        <h2 className='mx-1 text-lg font-semibold mt-2'> {video.snippet.title} </h2>
                                        <p className='mx-1 font-semibold text-gray-500'>{video.snippet.channelTitle}</p>
                                        {/* <p className='mx-1 text-sm text-gray-500'>{video.snippet.description} </p> */}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </section>
        )
    }

    return (
        <>
            <nav className='flex items-center px-[10px] py-4 justify-between shadow-md bg-white sticky top-0 z-10'>
                <div className='px-4 w-full flex md:w-auto justify-between md:flex md:px-4 md:items-center'>
                    <button type='button' onClick={() => { setSidebar(!sidebar) }}><img className='w-[28px] mx-2' src={menu} alt="Menu" /></button>
                    <Link to={'/'} ><img className='w-[130px] mx-4' src={logo} alt='Logo' /></Link>
                </div>
                <div className='hidden md:flex'>
                    <div className='border mr-4 px-2 py-2 rounded-3xl flex items-center'>
                        <input className='ml-2 bg-transparent w-[400px] border-none outline-none' type="text" placeholder="Search" ref={searchRef} />
                        <button onClick={fetchSearch}><img className='w-4 h-4 mr-2' src={search} alt="search_icon" /></button>
                    </div>
                </div>
                <div className='hidden md:flex md:gap-6 md:mr-4'>
                    <img className='w-8' src={upload} alt="upload" />
                    <img className='w-8' src={more} alt="more" />
                    <img className='w-8' src={notification} alt="notification" />
                    <img className='w-8 rounded-full' src={profile} alt="ptofile" />
                </div>
            </nav>
            {searchRef.current !== null ? searchResults() : ''}
        </>
    )
}

export default Navbar