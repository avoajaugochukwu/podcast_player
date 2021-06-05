import React, { useState } from 'react'

const NewLine = (text) => <div style={{ whiteSpace: "pre-wrap" }}>{text}</div>


const EpisodeDescription = ({ description }) => {

  const [isReadMore, setIsReadMore] = useState(true)

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
    console.log('I was hit')
  }

  return (
    <>
      <div className="text-xs">
        {isReadMore ? description.slice(0, 150) + '...' : NewLine(description)}
          &nbsp;&nbsp;
          <span onClick={toggleReadMore} className="font-black underline cursor-pointer text-white">
          {isReadMore ? <span>read more</span> : <span className="block text-right -mt-4 ">read less</span> }
        </span>
      </div>


    </>
  )

}

export default EpisodeDescription