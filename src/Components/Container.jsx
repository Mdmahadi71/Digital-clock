import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`container mx-auto ${children ,className}`}>
      {children}
    </div>
  )
}

export default Container
