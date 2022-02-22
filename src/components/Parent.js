import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [data, setData] = useState('')
  return (
    <>
      <p>來自ChildB資料:{data}</p>
      <ChildA pData={data} />
      <ChildB setdata={setData} />
    </>
  )
}

export default Parent
