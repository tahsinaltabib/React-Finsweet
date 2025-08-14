import React, { Children } from 'react'

const H3tag = ({className, children}) => {
  return (
    <h3 className={className}>
      {children}
    </h3>
  )
}

export default H3tag