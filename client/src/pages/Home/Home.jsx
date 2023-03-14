import React from 'react'
import '../../App.css'
import LeftSlidebar from '../../components/LeftSlidebar/LeftSlidebar'
import RightSlidebar from '../../components/RightSlidebar/RightSlidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
const Home = () => {
  return (
    <div className='home-container-1'>
    <LeftSlidebar/>
      <div className='home-container-2'>
<HomeMainbar/>
<RightSlidebar/>
      </div>
    </div>
  )
}

export default Home
