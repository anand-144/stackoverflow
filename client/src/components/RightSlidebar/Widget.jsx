import React from 'react'
import './RightSlidebar.css'
import comment from '../../images/comment.svg'
import pen from '../../images/pen.svg'
import stackb from '../../images/stackb.svg'


const Widget = () => {
  return (
    <div className='widget'>
    <h4>The Overflow Blog</h4>
    <div className='right-sidebar-div-1'>
    <div className='right-sidebar-div-2'>
    <img src={pen} alt="pen" width='18'/>
    <p>Celebrating the Stack Exchange sites that turned ten years old in Q1 2022</p>
    </div>
    <div className='right-sidebar-div-2'>
    <img src={pen} alt="pen" width='18'/>
    <p>Your own private space hosted on stackoverflowteams.com</p>
    </div>
      </div>
      <h4>Featured on Meta</h4>
    <div className='right-sidebar-div-1'>
    <div className='right-sidebar-div-2'>
    <img src={comment} alt="pen" width='18'/>
    <p>
Stack Exchange Q&amp;A access will not be restricted in Russia</p>
    </div>
    <div className='right-sidebar-div-2'>
    <img src={comment} alt="pen" width='18'/>
    <p>What goes into site sponsorships on SE?</p>
    </div>
    <div className='right-sidebar-div-2'>
    <img src={stackb} alt="pen" width='18'/>
    <p>
New User Experience: Deep Dive into our Research on the Staging Ground- How...</p>
    </div>
      </div>
      <h4>Hot Meta Posts</h4>
    <div className='right-sidebar-div-1'>
    <div className='right-sidebar-div-2'>
    <p>78</p>
    <p>Changing initializer-list tag wiki</p>
    </div>
    <div className='right-sidebar-div-2'>
    <p>32</p>
    <p>What is the true intention in the "How to reference material written by...</p>
    </div>
    <div className='right-sidebar-div-2'>
    <p>88</p>
    <p>What is the true intention in the "How to reference material written by...</p>
    </div>
      </div>
    </div>
  )
}

export default Widget
