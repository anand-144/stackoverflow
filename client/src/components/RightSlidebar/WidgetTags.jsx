import React from 'react'

const WidgetTags = () => {
    const tags =['c','c++','python','mongoose','mern','react','django','php','sql','express','css','java','javascript']
  return (
    <div className='widget-tags'>
    <h4>Watched tags</h4>
    <div className='widget-tags-div'> 
    {
        tags.map((tag)=>(
<p key={tag}>{tag}</p>
        ))
    }
    </div>
    </div>
  )
}

export default WidgetTags
