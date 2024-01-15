import React from 'react'
import CompC from './CompC'

const CompB = ({data}) => {
  return (
    <div>CompB
        <CompC data={data}/>
    </div>
  )
}

export default CompB