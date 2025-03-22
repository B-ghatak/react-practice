import React, { Children } from 'react'

const Container = ({children}) => {
  return <div className='w-full mx-auto px-4 max-w-7xl'>{children}</div>;
}

export default Container