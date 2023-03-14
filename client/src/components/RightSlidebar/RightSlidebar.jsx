import React from 'react'
import './RightSlidebar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

const RightSlidebar = () => {
  return (
   <aside className='right-sidebar'>
<Widget/>
<WidgetTags/>
   </aside>
  )
}

export default RightSlidebar
