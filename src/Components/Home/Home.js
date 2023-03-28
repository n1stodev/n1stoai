import React from 'react'
import './Home.css'


function Home() {
  return (
    <div className='Home'>
      <h2 className="home__desc">
        <span>N1STO AI</span> yordamida matnni ovozga, ovozni esa matnga o'girishingiz mumkin
      </h2>
      <div className="home__btns">
        <a
          href="/stt"
        >
          <button className="btn">Speech to Text</button>
        </a>
        <a
          href="/tts"
        >
          <button className="btn">Text to Speech</button>
        </a>
      </div>
    </div>
  )
}

export default Home