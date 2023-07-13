import React from 'react'

const Page2 = ({data}) => {
  return (
    <div>
      <h1>Pagina 2 </h1>
      {JSON.stringify(data,2)}
    </div>
  )
}

export default Page2
