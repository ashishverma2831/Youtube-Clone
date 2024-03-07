import React from 'react'
import { Link } from 'react-router-dom'

const SearchedVideo = ({sidebar,setSidebar,searchList,setSearchList}) => {


    

  return (
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

export default SearchedVideo