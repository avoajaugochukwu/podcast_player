import React from 'react'

import PodcastTableRow from '../components/PodcastTableRow'

const PodcastTable = (props) => {
    const { episodes } = props
    return (
            <div className="max-w-full text-left">
                <div className="flex  text-gray-300">
                    <div className="w-7/12">
                        <PodcastTableRow episodes={episodes} />
                    </div>
                    <div className="w-5/12 h-32 pl-12">
                        <h2 className="font-semibold text-2xl">About</h2>
                        <p className="text-1xl font-thin pt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti cupiditate quibusdam magnam ipsum. 
                            Eveniet numquam sit, dignissimos rerum nihil quod mollitia, natus tempora ullam, esse dolores error repellat nisi.
                        </p>
                    </div>
                </div>
                
            </div>
    )
}



export default PodcastTable