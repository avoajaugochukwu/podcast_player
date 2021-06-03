import React from 'react'
import moment  from 'moment'


const ReleaseDate = (props) => {

    const { date } = props

    
    const date_string = moment(date).format('DD MMM YYYY')
    return (
        <span className="text-xs">{ date_string }</span>
    )
}


export default ReleaseDate