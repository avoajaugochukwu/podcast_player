import React, { useState } from 'react'


const EpisodeDescription = ({ description }) => {

  const [isReadMore, setIsReadMore] = useState(true)

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
    console.log('I was hit')
  }

  return (
    <>
      <p className="text-xs">
        {isReadMore ? description.slice(0, 150) + '...' : description}
          &nbsp;&nbsp;
          <span onClick={toggleReadMore} className="font-black underline cursor-pointer text-white">
          {isReadMore ? 'read more' : 'read less'}
        </span>
      </p>


    </>
  )

}

export default EpisodeDescription