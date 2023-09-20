// eslint-disable-next-line no-unused-vars
import React from 'react'
import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeoff.png'
const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>We help you create Everlasting Memories </h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop ></video>
        </div>

        <img src={aeroplane} className='plane' />
      </div>
    </div>
  )
}

export default Home
