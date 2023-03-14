import React from 'react'
import LeftSlidebar from '../../components/LeftSlidebar/LeftSlidebar'
import RightSlidebar from '../../components/RightSlidebar/RightSlidebar'
import QuestionsDetails from './QuestionsDetails'
const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
    <LeftSlidebar/>
      <div className='home-container-2'>
      <QuestionsDetails/>
<RightSlidebar/>
      </div>
      </div>
  )
}

export default DisplayQuestion
