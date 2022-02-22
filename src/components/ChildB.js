import { useState } from 'react'

function ChildB(props) {
  const [childBdata, setChildBData] = useState('ChildB Data')
  console.log(props)

  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={() => {
          props.setdata(childBdata)
        }}
      >
        送資料回Parent
      </button>
    </>
  )
}

export default ChildB
