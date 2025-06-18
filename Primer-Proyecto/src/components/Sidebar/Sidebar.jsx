import React from 'react'
import Banner from '../Banner/Banner'

const Sidebar = ({nombre}) => {
  return (
    <div>
        
       <p>{nombre} </p>
       <Banner/>
        
        </div>
  )
}

export default Sidebar