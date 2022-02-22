import { useState } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  const add = function (value) {
    if (value > 0) {
      return <p>總數大於0</p>
    } else {
      return <p>總數0</p>
    }
  }

  return (
    <>
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
      {/* {total && <p>總數大於0</p>} 有truthy造成頁面一開始顯示0 */}
      {/* {total > 0 && <p>總數大於0</p>} if else寫法 */}
      {total > 0 ? <p>總數大於0</p> : ''} {/*三元運算式寫法*/}
      {add(total)}
    </>
  )
}

export default FC
