import React, { useState } from 'react'

const NewLine = (text) => {
  return <div style={{ whiteSpace: "pre-wrap" }}>{text}</div>
}


const EpisodeDescription = ({ description }) => {

  const [isReadMore, setIsReadMore] = useState(true)

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <>
      <div className="text-xs">
        {
          description ?
          <>
          {isReadMore ? description.slice(0, 150) + '...' : NewLine(description)}
          &nbsp;&nbsp;
          <span onClick={toggleReadMore} className="font-black underline cursor-pointer text-white">
          {isReadMore ? <span>read more</span> : <span className="block text-right -mt-4 ">read less</span> }
        </span>
          </>
          :
          <span className="italic text-gray-600">No description</span>
        }
        
      </div>


    </>
  )

}

export default EpisodeDescription